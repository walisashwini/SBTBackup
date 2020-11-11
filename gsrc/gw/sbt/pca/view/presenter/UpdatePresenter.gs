package gw.sbt.pca.view.presenter

uses com.guidewire.pl.web.controller.UserDisplayableException
uses com.guidewire.pl.web.util.WebFileUtil
uses gw.api.locale.DisplayKey
uses gw.api.tree.RowTreeRootNode
uses gw.sbt.config.FileTargetConfiguration
uses gw.sbt.loader.SBTUpdateLoader
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.UpdateDecision
uses gw.sbt.pca.ConfigurationKey
uses gw.sbt.pca.persistence.SBTUpdateCache
uses gw.sbt.pca.repository.ContentRepository
uses gw.sbt.pca.repository.ContentRepositoryProvider
uses gw.sbt.pca.validation.SBTUpdateValidator
uses gw.sbt.pca.view.BasicDecisionHandler
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.presenter.bureau.BureauCodesCategoryPresenter
uses gw.sbt.pca.view.presenter.rating.RateBookPresenter
uses gw.sbt.pca.view.selection.DBUpdateSelectionRepository
uses gw.sbt.pca.view.selection.UpdateSelectionRepository
uses gw.sbt.util.DisplayDescriptionHelper
uses gw.sbt.util.Formatter
uses gw.sbt.util.PcaVersionUtil
uses pcf.AvailableUpdatesPage
uses pcf.Desktop

uses java.io.ByteArrayInputStream
uses java.io.File

class UpdatePresenter implements SBTUpdateLoadAction {
  var _roots : List<RowPresenter> = {}
  var _update : SBTUpdate
  var _decisionHandler : DecisionHandler
  var _contentRepo : ContentRepository
  var _updateSelectionRepo : UpdateSelectionRepository
  var _configLocation : File
  final var _validator : SBTUpdateValidator

  construct(update : SBTUpdate,
            contentRepo : ContentRepository = null,
            updateSelectionRepo : UpdateSelectionRepository = null,
            configLocation : File = null) {
    _update = update
    _contentRepo = contentRepo?:ContentRepositoryProvider.CurrentRepository
    _updateSelectionRepo = updateSelectionRepo?:new DBUpdateSelectionRepository()
    _configLocation = configLocation

    _validator = new SBTUpdateValidator(SBTUpdate)

    if (AdoptionDate == null) {
      AdoptionDate = _update.MetaData.EffectiveDate
    }

    createDecisionHandler()
    createChildPresenters()
  }

  function saveChanges(status : SBTUpdateStatus) {
    var metaData = _update.MetaData
    _updateSelectionRepo.saveSelectionsForUpdate(
        :configurationKey = ConfigurationKey.fromMetaData(metaData),
        :adoptedEffectiveDate = null,
        :adoptedVersion = null,
        :newEffectiveDate = metaData.EffectiveDate,
        :newVersion = metaData.PackageVersion)

    SBTUpdateCache.persist(metaData, _update, status)
  }

  private function createDecisionHandler() {
    _decisionHandler = new BasicDecisionHandler(_update)
  }

  private function aggregateCategoryDecisions() {
    _update.DecisionAndInstructionsForClauses.Decision = DecisionHandler.aggregateDecision(_update.Clauses*.DecisionAndInstructions*.Decision.toList())
    _update.DecisionAndInstructionsForForms.Decision = DecisionHandler.aggregateDecision(_update.Forms*.DecisionAndInstructions*.Decision.toList())

    _update.Risks.each(\risk -> {
      var attributesNeedingDecisions = risk.RiskAttributes.where(\ attribute -> not attribute.CountrywideOnly)
      risk.DecisionAndInstructions.Decision = DecisionHandler.aggregateDecision(
          attributesNeedingDecisions*.DecisionAndInstructions*.Decision.toList())
    })
    _update.DecisionAndInstructionsForRiskAttributes.Decision = DecisionHandler.aggregateDecision(_update.Risks*.DecisionAndInstructions*.Decision.toList())
  }

  private function createChildPresenters() {
    if (_update.Clauses.HasElements) {
      _roots.add(new ClauseCategoryPresenter(_update.Clauses, _update.DecisionAndInstructionsForClauses, _decisionHandler))
    }

    if (_update.Forms.HasElements) {
      _roots.add(new FormCategoryPresenter(_update.Forms, _update.DecisionAndInstructionsForForms))
    }


    if (_update.RateBook != null) {
      _roots.add(new RateBookPresenter(_update.RateBook))
    }

    if (_update.HasBureauCodes) {
      _roots.add(new BureauCodesCategoryPresenter(_update))
    }

    if (_update.Risks.HasElements) {
      _roots.add(new RiskCategoryPresenter(_update.Risks, _update.DecisionAndInstructionsForRiskAttributes))
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

  property get TreeRootNode() : RowTreeRootNode {
    return new RowTreeRootNode(_roots, \diff -> (diff as RowPresenter).Children)
  }

  property get DecisionAndInstructions() : DecisionAndInstructions {
    return _update.DecisionAndInstructions
  }

  property get Line() : String {
    return _update.MetaData.Line.Name
  }

  property get Jurisdiction() : String {
    var jurisdictionCode = _update.MetaData.Jurisdiction
    return jurisdictionCode + " - " + typekey.Jurisdiction.get(jurisdictionCode).DisplayName
  }

  property get EffectiveDate() : String {
    return Formatter.dateToString(_update.MetaData.EffectiveDate)
  }

  property get CWEffectiveDate() : String {
    return Formatter.dateToString(_update.MetaData.CWEffectiveDate)
  }

  property set AdoptionDate(adoptionDate : Date) {
    _update.AdoptionDate = adoptionDate
  }

  property get AdoptionDate() : Date {
    return _update.AdoptionDate
  }

  property get CwEdition() : String {
    return DisplayDescriptionHelper.getMetaDataCWEdition(_update.MetaData)
  }

  property get Edition() : String {
    return EffectiveDate + " " + Version
  }

  property get Version() : String {
    return _update.MetaData.PackageVersion
  }

  property get CWVersion() : String {
    return _update.MetaData.CWVersion
  }

  function hasStateRCRN() : boolean {
    return _update.MetaData.StateRCRN != null
  }

  function hasCWRCRN() : boolean {
    return _update.MetaData.CWRCRN != null
  }

  function downloadStateRCRN() {
    var releaseNotes = _update.MetaData.StateRCRN
    WebFileUtil.copyStreamToClient("application/msword", releaseNotes.FileName, new ByteArrayInputStream(releaseNotes.Content), releaseNotes.Content.length)
  }

  function downloadCWRCRN() {
    var releaseNotes = _update.MetaData.CWRCRN
    WebFileUtil.copyStreamToClient("application/msword", releaseNotes.FileName, new ByteArrayInputStream(releaseNotes.Content), releaseNotes.Content.length)
  }

  property get Qualifier() : String {
    return _update.MetaData.Qualifier
  }

  property get SBTUpdate() : SBTUpdate {
    return _update
  }

  function validateAdoptionDataUI(adoptionDateUI : Date) : String {
    return _validator.validateAdoptionDate(adoptionDateUI, SBTUpdate.MetaData.EffectiveDate, SBTUpdate.MetaData.Jurisdiction)
  }

  override function loadUpdate() {
    _validator.validate()

    if (_validator.HasErrors) {
      throw new UserDisplayableException(_validator.ErrorMessages.toTypedArray())
    }

    saveChanges(SBTUpdateStatus.TC_INPROGRESS)

    aggregateCategoryDecisions()

    PcaVersionUtil.logPcaVersion()

    SBTUpdateLoader.newStateAddInstance(new FileTargetConfiguration(_configLocation), new LoaderEntityReader())
        .load(SBTUpdate, _contentRepo.findCustomerContent(SBTUpdate.MetaData))

    // Another persist to save generated reports
    saveChanges(SBTUpdateStatus.TC_COMPLETE)


    // move the package to adopted folder
    _contentRepo.adoptSBTUpdate(SBTUpdate.MetaData)

    // reset the cached flag to force a refresh.
    PresenterUtil.UpdateListCachedFlag = false

    //redirect to ALL once completed an analysis
    AvailableUpdatesPage.go(PresenterUtil.SBTUPDATE_FILTER_OPTION.ALL, false)
  }

  override function revertMerge() {
    if (PresenterUtil.revertMerge(_update)) {
      Desktop.go()
    } else {
      throw new UserDisplayableException(DisplayKey.get ("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Revert.OperationNotSuccessful"))
    }
  }

  override function confirmAnalysisComplete() : String {
    var confirmationMessage = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.AnalysisCompleteConfirmation")
    if (SBTUpdate.RateBook.DecisionAndInstructions.Decision == UpdateDecision.REJECT) {
      confirmationMessage = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.AnalysisCompleteConfirmationWithRejectedRateBook")
          + "\n" + confirmationMessage
    }
    return confirmationMessage

  }

  override property get ReadOnly() : boolean {
    return SBTUpdateCache.getStatus(_update.MetaData) == SBTUpdateStatus.TC_COMPLETE
  }

  override property get HasAnalysisCompletePriv() : boolean {
    return perm.System.pcamerge
  }

  override property get HasMergeRevertPriv (): boolean {
    return PresenterUtil.hasMergeRevertPriv(_update.MetaData)
  }

  override function confirmRevertMerge() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.MergeRevertConfirmation", _update!= null? _update.MetaData.Jurisdiction : "")
  }

  override function descriptionForDecision(decision : UpdateDecision) : String {
    return DisplayDescriptionHelper.getUpdateDecisionDescription(decision)
  }

}
