package gw.sbt.pca.view.presenter.compare

uses com.guidewire.pl.web.controller.UserDisplayableException
uses com.guidewire.pl.web.util.WebFileUtil
uses gw.api.locale.DisplayKey
uses gw.api.tree.RowTreeRootNode
uses gw.sbt.config.FileTargetConfiguration
uses gw.sbt.loader.SBTUpdateLoader
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.report.StateUpdateRatingReportAdapter
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses gw.sbt.pca.ConfigurationKey
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses gw.sbt.pca.persistence.SBTUpdateCache
uses gw.sbt.pca.repository.ContentRepository
uses gw.sbt.pca.repository.ContentRepositoryProvider
uses gw.sbt.pca.validation.StateUpgradeSBTUpdateValidator
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.pca.view.presenter.SBTUpdateLoadAction
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateBookPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableCategoryPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableRowPresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRatingAlgorithmRowPresenter
uses gw.sbt.pca.view.selection.DBUpdateSelectionRepository
uses gw.sbt.pca.view.selection.UpdateSelectionRepository
uses gw.sbt.util.DisplayDescriptionHelper
uses gw.sbt.util.Formatter
uses gw.sbt.util.PcaVersionUtil
uses pcf.AvailableUpdatesPage
uses pcf.Desktop
uses pcf.StateUpdateDiffsPage

uses java.io.ByteArrayInputStream
uses java.io.File

class StateUpdatePresenter implements SBTUpdateLoadAction {
  var _roots : List<RowPresenter> = {}
  var _newUpdate : SBTUpdate as NewSBTUpdate
  var _latestAdoptedUpdate : SBTUpdate as LatestAdoptedUpdate
  var _currentUpdate : SBTUpdate as CurrentSBTUpdate
  var _contentRepo : ContentRepository as ContentRepository
  var _updateSelectionRepo : UpdateSelectionRepository
  var _configLocation : File as ConfigLocation
  var _stateUpdateRatingReportAdapter : StateUpdateRatingReportAdapter
  var _stateUpdateBureauCodesCategoryPresenter : StateUpdateBureauCodesCategoryPresenter
  var _stateUpdateRateBookPresenter : StateUpdateRateBookPresenter
  final var _validator : StateUpgradeSBTUpdateValidator

  construct(newUpdate : SBTUpdate,
            latestAdoptedUpdate : SBTUpdate,
            contentRepo : ContentRepository = null,
            updateSelectionRepo : UpdateSelectionRepository = null,
            configLocation : File = null,
            adoptionDate : Date = null) {

    _newUpdate = newUpdate
    _latestAdoptedUpdate = latestAdoptedUpdate
    _contentRepo = contentRepo?:ContentRepositoryProvider.CurrentRepository
    _updateSelectionRepo = updateSelectionRepo?:new DBUpdateSelectionRepository()
    _configLocation = configLocation

    _validator = new StateUpgradeSBTUpdateValidator(this)

    // Create currentSbtUpdate (metadata only)
    var currentConfigMetaData = newUpdate.MetaData.getCombinedMetaDataBasedOn(_latestAdoptedUpdate.MetaData)
    _currentUpdate = CurrentSBTUpdateBuilder.getSBTUpdateInBuilder(currentConfigMetaData)

    // Always prime all updates with the correct adoption date and initialize effective availabilities on all children
    initUpdatesWithAdoptionDate(adoptionDate)
    setEffectiveAvailabilityOnUpdates()

    // Create child presenters and persist the content on the current SBTUpdate
    createChildPresenters()
    CurrentSBTUpdateBuilder.finishBuild(_currentUpdate)
  }

  function saveChanges(status : SBTUpdateStatus) {
    _updateSelectionRepo.saveSelectionsForUpdate(
        :configurationKey = ConfigurationKey.fromMetaData(NewSBTUpdate.MetaData),
        :adoptedEffectiveDate = LatestAdoptedUpdate.MetaData.EffectiveDate,
        :adoptedVersion = LatestAdoptedUpdate.MetaData.PackageVersion,
        :newEffectiveDate = NewSBTUpdate.MetaData.EffectiveDate,
        :newVersion = NewSBTUpdate.MetaData.PackageVersion)

    SBTUpdateCache.persist(_newUpdate.MetaData, _newUpdate, status)
  }

  override function loadUpdate() {
    _validator.validate()

    if (_validator.HasErrors) {
      throw new UserDisplayableException(_validator.ErrorMessages.toTypedArray())
    }

    _stateUpdateRateBookPresenter.propagateChildrenDecisionsToNewRateBook()

    saveChanges(SBTUpdateStatus.TC_INPROGRESS)

    if (_stateUpdateRatingReportAdapter != null) {
      _stateUpdateRatingReportAdapter.RateTableRowPresenters?.each(\rateTableRowPresenter -> {
        if (rateTableRowPresenter typeis StateUpdateRateTableRowPresenter) {
          NewSBTUpdate.registerComparison(rateTableRowPresenter.RateTableComparison)
        }
      })
      _stateUpdateRatingReportAdapter.RatingAlgorithmPresenters?.each(\rateTableRowPresenter -> {
        if (rateTableRowPresenter typeis StateUpdateRatingAlgorithmRowPresenter) {
          NewSBTUpdate.registerComparison(rateTableRowPresenter.RatingAlgorithmComparison)
        }
      })
    }

    PcaVersionUtil.logPcaVersion()

    SBTUpdateLoader
        .newStateUpdateInstance(new FileTargetConfiguration(_configLocation), new LoaderEntityReader(),
            LatestAdoptedUpdate, _stateUpdateRatingReportAdapter)
        .withSystemTablePresenters(_stateUpdateBureauCodesCategoryPresenter.AllSystemTablePresenters)
        .load(NewSBTUpdate,
            _contentRepo.findCustomerContent(NewSBTUpdate.MetaData),
            _contentRepo.findCustomerContent(LatestAdoptedUpdate.MetaData))

    // Another persist to save generated reports
    saveChanges(SBTUpdateStatus.TC_COMPLETE)

    // move the package to adopted folder
    _contentRepo.adoptSBTUpdate(NewSBTUpdate.MetaData)

    // reset the cached flag to force a refresh.
    PresenterUtil.UpdateListCachedFlag = false

    //redirect to ALL once completed an analysis
    AvailableUpdatesPage.go(PresenterUtil.SBTUPDATE_FILTER_OPTION.ALL, false)
  }

  override function revertMerge() {
    if (PresenterUtil.revertMerge(_newUpdate)) {
      Desktop.go()
    } else {
      throw new UserDisplayableException(DisplayKey.get ("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Revert.OperationNotSuccessful"))
    }
  }

  override function confirmAnalysisComplete() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.AnalysisCompleteConfirmation")
  }

  override function confirmRevertMerge() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.MergeRevertConfirmation", _latestAdoptedUpdate!= null? _latestAdoptedUpdate.MetaData.Jurisdiction : "")
  }

  property get DecisionAndInstructions() : DecisionAndInstructions {
    return NewSBTUpdate.DecisionAndInstructions
  }


  property get Jurisdiction() : String {
    var jurisdictionCode = NewSBTUpdate.MetaData.Jurisdiction
    return jurisdictionCode + " - " + typekey.Jurisdiction.get(jurisdictionCode).DisplayName
  }

  property get EffectiveDate() : String {
    return Formatter.dateToString(NewSBTUpdate.MetaData.EffectiveDate)
  }

  property get CWEffectiveDate() : String {
    return Formatter.dateToString(NewSBTUpdate.MetaData.CWEffectiveDate)
  }

  //For latest adopted version
  property get LatestAdoptedCwEdition() : String {
    return Formatter.dateToString(LatestAdoptedUpdate.MetaData.CWEffectiveDate) + " " + LatestAdoptedUpdate.MetaData.CWVersion
  }

  property get LatestAdoptedEdition() : String {
    return Formatter.dateToString(LatestAdoptedUpdate.MetaData.EffectiveDate) + " " + LatestAdoptedUpdate.MetaData.PackageVersion
  }

  property set AdoptionDate(adoptionDate : Date) {
    NewSBTUpdate.AdoptionDate = adoptionDate
  }

  property get AdoptionDate() : Date {
    return NewSBTUpdate.AdoptionDate
  }

  property get TreeRootNode() : RowTreeRootNode {
    return new RowTreeRootNode(_roots, \diff -> (diff as RowPresenter).Children)
  }

  override property get ReadOnly() : boolean {
    return SBTUpdateCache.getStatus(NewSBTUpdate.MetaData) == SBTUpdateStatus.TC_COMPLETE
  }

  override property get HasAnalysisCompletePriv() : boolean {
    return perm.System.pcamerge
  }

  override property get HasMergeRevertPriv() : boolean {
    return PresenterUtil.hasMergeRevertPriv(_newUpdate.MetaData)
  }

  override function descriptionForDecision(decision : UpdateDecision) : String {
    return DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(decision)
  }

  //For new version
  property get CwEdition() : String {
    return DisplayDescriptionHelper.getMetaDataCWEdition(NewSBTUpdate.MetaData)
  }

  property get Edition() : String {
    return EffectiveDate + " " + Version
  }

  property get Version() : String {
    return NewSBTUpdate.MetaData.PackageVersion
  }

  property get CWVersion() : String {
    return NewSBTUpdate.MetaData.CWVersion
  }

  function hasStateRCRN() : boolean {
    return NewSBTUpdate.MetaData.StateRCRN != null
  }

  function hasCWRCRN() : boolean {
    return NewSBTUpdate.MetaData.CWRCRN != null
  }

  function validateAdoptionDataUI(adoptionDateUI : Date) : String {
    return _validator.validateAdoptionDate(adoptionDateUI, _newUpdate.MetaData.EffectiveDate, _newUpdate.MetaData.Jurisdiction)
  }

  function downloadStateRCRN() {
    var releaseNotes = NewSBTUpdate.MetaData.StateRCRN
    WebFileUtil.copyStreamToClient("application/msword", releaseNotes.FileName, new ByteArrayInputStream(releaseNotes.Content), releaseNotes.Content.length)
  }

  function downloadCWRCRN() {
    var releaseNotes = NewSBTUpdate.MetaData.CWRCRN
    WebFileUtil.copyStreamToClient("application/msword", releaseNotes.FileName, new ByteArrayInputStream(releaseNotes.Content), releaseNotes.Content.length)
  }

  function refreshByAdoptionDate(adoptionDate : Date) {
    var anyClauseEffectiveAvailabilityChanged =
        EffectiveAvailabilityHelper.isAnyClauseEffectiveAvailabilityDifferent(NewSBTUpdate, adoptionDate) or
            EffectiveAvailabilityHelper.isAnyClauseEffectiveAvailabilityDifferent(LatestAdoptedUpdate, adoptionDate) or
            EffectiveAvailabilityHelper.isAnyClauseEffectiveAvailabilityDifferent(CurrentSBTUpdate, adoptionDate)
    var anyFormEffectiveAvailabilityChanged =
        EffectiveAvailabilityHelper.isAnyFormEffectiveAvailabilityDifferent(NewSBTUpdate, adoptionDate) or
            EffectiveAvailabilityHelper.isAnyFormEffectiveAvailabilityDifferent(LatestAdoptedUpdate, adoptionDate) or
            EffectiveAvailabilityHelper.isAnyFormEffectiveAvailabilityDifferent(CurrentSBTUpdate, adoptionDate)

    var anyRiskEffectiveAvailabilityChanged =
        EffectiveAvailabilityHelper.isAnyRiskEffectiveAvailabilityDifferent(NewSBTUpdate, adoptionDate) or
            EffectiveAvailabilityHelper.isAnyRiskEffectiveAvailabilityDifferent(LatestAdoptedUpdate, adoptionDate) or
            EffectiveAvailabilityHelper.isAnyRiskEffectiveAvailabilityDifferent(CurrentSBTUpdate, adoptionDate)

    // Clear all decisions for a category if anything has a different effective availability
    if (anyClauseEffectiveAvailabilityChanged) {
      var clauseCategoryPresenter = _roots.firstWhere(\presenter -> presenter typeis StateUpdateClauseCategoryPresenter)

      if (clauseCategoryPresenter != null) {
        clauseCategoryPresenter.Children
            .map(\rowPresenter -> rowPresenter as StateUpdateClauseRowPresenter)
            .each(\comparisonRowPresenter -> {
              new ClauseComparisonPresenter(
                  comparisonRowPresenter.ClauseComparison,
                  new ComparisonDecisionHandler(new DecisionRequiredStrategy()),
                  PresenterUtil.isMaintenanceUpdate(Edition, LatestAdoptedEdition, CwEdition, LatestAdoptedCwEdition)).Decision = null
            })
      }
    }
    if (anyFormEffectiveAvailabilityChanged) {
      var formCategoryPresenter = _roots.firstWhere(\presenter -> presenter typeis StateUpdateFormCategoryPresenter)

      if (formCategoryPresenter != null) {
        formCategoryPresenter.Children
            .map(\rowPresenter -> rowPresenter as StateUpdateFormRowPresenter)
            .each(\comparisonRowPresenter -> {
              new FormComparisonPresenter(
                  comparisonRowPresenter.FormComparison, null, null).Decision = null
            })
      }
    }

    if (anyRiskEffectiveAvailabilityChanged) {
      var riskCategoryPresenter = _roots.firstWhere(\presenter -> presenter typeis StateUpdateRiskCategoryPresenter)
      if (riskCategoryPresenter != null) {
        riskCategoryPresenter.Children
            .map(\rowPresenter -> rowPresenter as StateUpdateRiskRowPresenter)
            .each(\comparisonRowPresenter -> {
              new StateUpdateRiskRowPresenter(
                  comparisonRowPresenter.RiskComparison, null, null).Decision = null
            })
      }
    }

    StateUpdateDiffsPage.go(new StateUpdatePresenter(NewSBTUpdate, LatestAdoptedUpdate, ContentRepository,
        _updateSelectionRepo, ConfigLocation, adoptionDate), PresenterUtil.SBTUPDATE_FILTER_OPTION.ALL)
  }

  private function setEffectiveAvailabilityOnUpdates() {
    EffectiveAvailabilityHelper.setEffectiveAvailability(NewSBTUpdate)
    EffectiveAvailabilityHelper.setEffectiveAvailability(CurrentSBTUpdate)
    EffectiveAvailabilityHelper.setEffectiveAvailability(LatestAdoptedUpdate)
  }

  private function initUpdatesWithAdoptionDate(adoptionDate : Date) {
    // Use the passed in adoptionDate only if new update doesn't have an adoption date already
    if (AdoptionDate == null) {
      AdoptionDate = adoptionDate
    }
    LatestAdoptedUpdate.AdoptionDate = AdoptionDate
    CurrentSBTUpdate.AdoptionDate = AdoptionDate
  }

  private function createChildPresenters() {
    _roots.clear()

    var clauseCategoryPresenter = new StateUpdateClauseCategoryPresenter(
        NewSBTUpdate.Clauses,
        LatestAdoptedUpdate.Clauses,
        NewSBTUpdate.DecisionAndInstructionsForClauses,
        NewSBTUpdate.MetaData,
        LatestAdoptedUpdate.MetaData,
        NewSBTUpdate,
        CurrentSBTUpdate,
        AdoptionDate)

    if (clauseCategoryPresenter.Children.HasElements) {
      _roots.add(clauseCategoryPresenter)
    }

    var formCategoryPresenter = new StateUpdateFormCategoryPresenter(
        NewSBTUpdate.Forms,
        LatestAdoptedUpdate.Forms,
        NewSBTUpdate.DecisionAndInstructionsForForms,
        NewSBTUpdate.MetaData,
        LatestAdoptedUpdate.MetaData,
        NewSBTUpdate,
        CurrentSBTUpdate,
        AdoptionDate)

    if (formCategoryPresenter.Children.HasElements) {
      _roots.add(formCategoryPresenter)
    }


    _stateUpdateRateBookPresenter = new StateUpdateRateBookPresenter(
        NewSBTUpdate.RateBook,
        LatestAdoptedUpdate.RateBook,
        NewSBTUpdate.MetaData,
        LatestAdoptedUpdate.MetaData,
        NewSBTUpdate,
        CurrentSBTUpdate,
        AdoptionDate)

    if (_stateUpdateRateBookPresenter.Children.HasElements) {
      _roots.add(_stateUpdateRateBookPresenter)
      _stateUpdateRatingReportAdapter = new StateUpdateRatingReportAdapter(_stateUpdateRateBookPresenter)
    }

    var riskCategoryPresenter = new StateUpdateRiskCategoryPresenter(NewSBTUpdate.Risks,
        LatestAdoptedUpdate.Risks,
        NewSBTUpdate.DecisionAndInstructionsForRiskAttributes,
        NewSBTUpdate.MetaData,
        LatestAdoptedUpdate.MetaData,
        NewSBTUpdate,
        CurrentSBTUpdate,
        AdoptionDate)

    if (riskCategoryPresenter.Children.HasElements) {
      _roots.add(riskCategoryPresenter)
    }

    _stateUpdateBureauCodesCategoryPresenter = new StateUpdateBureauCodesCategoryPresenter(
        NewSBTUpdate.SystemTables,
        LatestAdoptedUpdate.SystemTables,
        NewSBTUpdate.DIForStateUpdateBureauCodes,
        NewSBTUpdate.MetaData,
        LatestAdoptedUpdate.MetaData,
        NewSBTUpdate,
        CurrentSBTUpdate,
        AdoptionDate)

    if(_stateUpdateBureauCodesCategoryPresenter.Children.HasElements) {
      _roots.add(_stateUpdateBureauCodesCategoryPresenter)
    }

    var readOnly = ReadOnly
    //note: recursively set readonly to all children
    _roots.each(\presenter -> {
      presenter.ReadOnly = readOnly
    })
  }

  property get Roots() : List<RowPresenter> {
    return _roots
  }
}