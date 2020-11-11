package gw.sbt.pca.view.presenter

uses gw.api.locale.DisplayKey
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.CovTermOpt
uses gw.api.productmodel.CovTermPattern
uses gw.api.util.DateUtil
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.FileTargetConfiguration
uses gw.sbt.model.ConfigurationUpdate
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.OptionSelector
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.meta.ERCPackageMetaData
uses gw.sbt.model.meta.JurisdictionMetaData
uses gw.sbt.model.meta.LineMetaData
uses gw.sbt.pca.ConfigurationKey
uses gw.sbt.pca.persistence.PersistenceManager
uses gw.sbt.pca.persistence.SBTUpdateCache
uses gw.sbt.pca.repository.ContentRepository
uses gw.sbt.pca.repository.ContentRepositoryProvider
uses gw.sbt.pca.view.presenter.compare.StateUpdatePresenter
uses gw.sbt.pca.view.selection.DBUpdateSelectionRepository
uses gw.sbt.pca.view.selection.UpdateSelection
uses gw.sbt.pca.view.selection.UpdateSelectionRepository
uses gw.sbt.util.ProductCodeToAbbreviationMapper
uses gw.sbt.util.PcaVersionUtil
uses gw.sbt.zip.ConfigurationBackup
uses org.slf4j.LoggerFactory
uses pcf.StateUpdateDiffsPage
uses pcf.UpdateDiffsPage
uses gw.sbt.util.Formatter

uses java.io.File

/**
 * Common presentation-level util methods
 */
class PresenterUtil {
  final static var ICON_NOT_STARTED = "pca_start_20px.svg"
  final static var ICON_COMPLETED = "pca_finished_20px.svg"
  final static var ICON_IN_PROGRESS = "pca_in_progress_20px.svg"

  final static var ICON_User = "pca_instructions_modified_20px.svg"
  final static var ICON_Configuration = "pca_instructions_20px.svg"

  public final static var ICON_NO_CHANGE : String = "pca_no_change_20px.svg"
  public final static var ICON_MODIFIED : String = "pca_changed_20px.svg"
  public final static var ICON_ADDED : String = "pca_new_20px.svg"
  public final static var ICON_DELETED : String = "pca_removed_20px.svg"

  public final static var ICON_NO_CHANGE_NONCLICKABLE : String  = "pca_no_change_20px-nonClickable.svg"
  public final static var ICON_MODIFIEDE_NONCLICKABLE : String = "pca_changed_20px-nonClickable.svg"
  public final static var ICON_ADDEDE_NONCLICKABLE : String = "pca_new_20px-nonClickable.svg"
  public final static var ICON_DELETEDE_NONCLICKABLE : String = "pca_removed_20px-nonClickable.svg"
  public final static var GUIDEWIRE_COLOR_CODE_BLUE: String = "#0067ac"  // given by UX team
  public final static var GUIDEWIRE_COLOR_CODE_BLANK: String = ""

  public enum SBTUPDATE_FILTER_OPTION {ALL, AVAILABLE, COMPLETE}

  static var cachedAllPresenters : List<MetaDataPresenter> = {}
  static var cachedAvailablePresenters : List<MetaDataPresenter> = {}
  static var cachedCompletedPresenters : List<MetaDataPresenter> = {}
  static var cachedFlag : boolean as UpdateListCachedFlag
  static var isVersionLogged : boolean = false

  static function getInstructionsIconName(decisionAndInstructions : DecisionAndInstructions) : String {
    if (decisionAndInstructions != null) {
      return decisionAndInstructions.HasInstructions ? ICON_User : ICON_Configuration
    }
    return null
  }

  static function getInstructionsTooltips(decisionAndInstructions : DecisionAndInstructions) : String {
    if (decisionAndInstructions != null) {
      return decisionAndInstructions.HasInstructions
          ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Tooltips.ModifiedInstructions")
          : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Tooltips.Instructions")
    }
    return null
  }

  static function getUpdateSummaryIconName(lineCode: String) : String {
    return ProductCodeToAbbreviationMapper.getProductLineIcon(lineCode)
  }

  static function isUserIcon(iconName : String) : boolean {
    return iconName == ICON_User
  }

  static function isConfigurationIcon(iconName : String) : boolean {
    return iconName == ICON_Configuration
  }

  static function canAssignInstructions(decisionAndInstructions : DecisionAndInstructions) : boolean {
    return decisionAndInstructions != null
  }

  static function getPCAInstructions(list : List<MetaDataPresenter>, filterOption : SBTUPDATE_FILTER_OPTION) : String {
    if (list == null or list.Empty) {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.PCAInstructions.NoUpdate")
    } else {
      if (filterOption == SBTUPDATE_FILTER_OPTION.COMPLETE) {
        return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.PCAInstructions.Completed")
      } else
        return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.PCAInstructions")
    }
  }

  static function getFilterOptionDescription(filterOption : SBTUPDATE_FILTER_OPTION) : String {
    if (filterOption == SBTUPDATE_FILTER_OPTION.AVAILABLE) {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.Filter.Available")
    } else if (filterOption == SBTUPDATE_FILTER_OPTION.COMPLETE) {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.Filter.Completed")
    } else {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.Filter.All")
    }
  }

  static function filterCacheKey() : String {
    return DateUtil.currentDate().Time as String
  }

  static function revertChanges(originalClause : Clause, updatedClause : Clause) {
    revertChanges(originalClause.DecisionAndInstructions, updatedClause.DecisionAndInstructions)

    // Process cov terms
    originalClause.CovTerms.each(\originalCovTerm -> {
      var updatedCovTerm = updatedClause.CovTerms.firstWhere(\covTerm -> covTerm.PublicId == originalCovTerm.PublicId)
      revertChanges(originalCovTerm.DecisionAndInstructions, updatedCovTerm.DecisionAndInstructions)

      // Process cov term options
      originalCovTerm.CovTermOptions.each(\originalCovTermOption -> {
        var updatedCovTermOption = updatedCovTerm.CovTermOptions.firstWhere(\covTermOption ->
            covTermOption.PublicId == originalCovTermOption.PublicId)
        revertChanges(originalCovTermOption.DecisionAndInstructions, updatedCovTermOption.DecisionAndInstructions)
      })
    })
  }

  static function revertChanges(originalForm : PolicyForm, updatedForm : PolicyForm) {
    revertChanges(originalForm.DecisionAndInstructions, updatedForm.DecisionAndInstructions)
  }

  static function createUpdatePresenter(sbtUpdateMetaData : SBTUpdateMetaData,
                                        contentRepository : ContentRepository,
                                        configLocation : File) : UpdatePresenter {
    return new UpdatePresenter(
        :update = SBTUpdateCache.findOrCreateAndPersistSBTUpdate(sbtUpdateMetaData, contentRepository, null),
        :contentRepo = contentRepository,
        :configLocation = configLocation)
  }

  static function createMetaDataPresentersFromRepo(repo : ContentRepository, filterOption : SBTUPDATE_FILTER_OPTION, forceRefresh : boolean)
      : List<MetaDataPresenter> {

    logPcaVersion()

    if (not UpdateListCachedFlag or forceRefresh) { // forceRefresh is true only when the user selects 'PCA' menu
      cachedAllPresenters = createMetaDataPresentersFrom(repo.list()).where(\presenter -> presenter.AvailableSBTUpdates != null and not presenter.AvailableSBTUpdates.Empty)
      cachedAvailablePresenters = cachedAllPresenters.where(\presenter -> presenter.Status != SBTUpdateStatus.TC_COMPLETE)
      cachedCompletedPresenters = cachedAllPresenters.where(\presenter -> presenter.Status == SBTUpdateStatus.TC_COMPLETE)
      UpdateListCachedFlag = true // will be reset to false if a package has been adopted.
    }
    if (filterOption == SBTUPDATE_FILTER_OPTION.COMPLETE) {
      return cachedCompletedPresenters
    } else if (filterOption == SBTUPDATE_FILTER_OPTION.AVAILABLE) {
      return cachedAvailablePresenters
    } else {
      return cachedAllPresenters
    }
  }

  static function createMetaDataPresentersFrom(sbtUpdateMetaDataList : List<SBTUpdateMetaData>,
                                               updateSelectionRepo : UpdateSelectionRepository = null)
      : List<MetaDataPresenter> {
    //1). for new updates
    var configurationUpdatesInNewFolder = configurationNewUpdatesFrom(sbtUpdateMetaDataList, updateSelectionRepo)
    //2). for adopted updates
    var configurationUpdatesInAdoptedFolder = configurationAdoptedUpdatesFrom(sbtUpdateMetaDataList, updateSelectionRepo)

    var configurationUpdates : List<ConfigurationUpdate> = {}
    configurationUpdates.addAll(configurationUpdatesInNewFolder)
    configurationUpdates.addAll(configurationUpdatesInAdoptedFolder)
    //create MetaDataPresenter for both New and Adopted updates.
    return configurationUpdates.map(\configUpdate -> new MetaDataPresenter(configUpdate.AdoptedUpdate, configUpdate.SelectedUpdateOptions))
  }

  //for each adopted update, try to find the corresponding 'adopted' db record
  static function configurationAdoptedUpdatesFrom(sbtUpdateMetaDataList : List<SBTUpdateMetaData>,
                                                  updateSelectionRepo : UpdateSelectionRepository = null)
  : List<ConfigurationUpdate> {
    updateSelectionRepo = updateSelectionRepo?:new DBUpdateSelectionRepository()
    var adoptedUpdates = sbtUpdateMetaDataList.where(\updateMetaData -> updateMetaData.Adopted)

    var adoptedConfigurationUpdateList : List<ConfigurationUpdate> = {}
    adoptedUpdates.each(\adoptedUpdate -> {
      var adoptionHistoryDBRecord = updateSelectionRepo.retrieveSelectionsForUpdate(ConfigurationKey.fromMetaData(adoptedUpdate))
      if (adoptionHistoryDBRecord != null) { // create presenters for the adopted packages only if these are adopted by PCA
        var adoptedUpdatesForThisJurisidction = adoptedUpdates.where(\updateMetaData -> updateMetaData.Jurisdiction == adoptedUpdate.Jurisdiction)
        var adoptedUpdateForThisTransaction = findSelectedSBTUpdateMetaData(adoptedUpdatesForThisJurisidction, adoptionHistoryDBRecord.AdoptedSelection)
        var availableUpdateForThisTransaction = findSelectedSBTUpdateMetaData(adoptedUpdatesForThisJurisidction, adoptionHistoryDBRecord.NewSelection)
        // create the availableUpdate for this adoption history record.
        // Note: the newUpdate has already been moved to adopted folder, its adopted flag needs to be update to 'false' to similate the availableUpdate before the adoption completed.
        var copiedAvailableUpdate : SBTUpdateMetaData = null
        if (availableUpdateForThisTransaction != null) {
          copiedAvailableUpdate = availableUpdateForThisTransaction.copy()
          copiedAvailableUpdate.Adopted = false
        }
        var configurationUpdate = new ConfigurationUpdate(
            :line = adoptedUpdate.Line.Code,
            :jurisdiction = adoptedUpdate.Jurisdiction,
            :latestAdoptedUpdate = adoptedUpdateForThisTransaction,
            :selectedUpdateOptions = OptionSelector.make({copiedAvailableUpdate}, copiedAvailableUpdate)
        )
        adoptedConfigurationUpdateList.add(configurationUpdate)
      }
    })
    return adoptedConfigurationUpdateList
  }

  static function configurationNewUpdatesFrom(sbtUpdateMetaDataList : List<SBTUpdateMetaData>,
                                              updateSelectionRepo : UpdateSelectionRepository = null)
      : List<ConfigurationUpdate> {
    updateSelectionRepo = updateSelectionRepo?:new DBUpdateSelectionRepository()
    var updatesGroupedByConfiguration = sbtUpdateMetaDataList.partition(\update ->
        ConfigurationKey.fromMetaDataGroupByLineAndState(update))
    //for each line+state
    var newConfigurationUpdateList : List<ConfigurationUpdate> = {}
    updatesGroupedByConfiguration.entrySet().each(\entry -> {
      var newUpdateOptions = entry.Value.where(\updateMetaData -> !updateMetaData.Adopted)
      if (newUpdateOptions.HasElements) { // only if newUpdateOptions is not empty
        var selections = updateSelectionRepo.retrieveSelectionsForUpdate(entry.Key)
        //get adopted pkg from file system, find the latest adopted pkg.
        var adoptedUpdateOptions = entry.Value.where(\updateMetaData -> updateMetaData.Adopted and updateMetaData.Jurisdiction == entry.Key.Jurisdiction)
            .sort(\metaData1, metaData2 -> metaData1.isLaterThan(metaData2))

        var latestAdoptedUpdate = selections == null ? adoptedUpdateOptions.first() :
            findSelectedSBTUpdateMetaData(adoptedUpdateOptions, selections.AdoptedSelection)

        newConfigurationUpdateList.add(new ConfigurationUpdate(
            :line = entry.Key.Line,
            :jurisdiction = entry.Key.Jurisdiction,
            :latestAdoptedUpdate = latestAdoptedUpdate,
            :selectedUpdateOptions = OptionSelector.make(newUpdateOptions,
                findSelectedSBTUpdateMetaData(newUpdateOptions, selections.NewSelection))))
      }
    })
    return newConfigurationUpdateList
  }

  static private function findSelectedSBTUpdateMetaData(sbtUpdateMetaDatas : List<SBTUpdateMetaData>, selection : UpdateSelection) : SBTUpdateMetaData {
    return sbtUpdateMetaDatas.firstWhere(\sbtUpdateMetaData -> sbtUpdateMetaData.EffectiveDate == selection.EffectiveDate and sbtUpdateMetaData.PackageVersion == selection.Version)
  }

  static function revertChanges(originalDecisionAndInstructions : DecisionAndInstructions,
                                updatedDecisionAndInstructions : DecisionAndInstructions) {
    updatedDecisionAndInstructions.ConfigInstructions = originalDecisionAndInstructions.ConfigInstructions
    updatedDecisionAndInstructions.FilingInstructions = originalDecisionAndInstructions.FilingInstructions
    updatedDecisionAndInstructions.ManualConfigInstructions = originalDecisionAndInstructions.ManualConfigInstructions
    updatedDecisionAndInstructions.Decision = originalDecisionAndInstructions.Decision
  }

  static function getAnalysisIconName(status : typekey.SBTUpdateStatus) : String {
    var icon = ICON_NOT_STARTED
    if (status == SBTUpdateStatus.TC_COMPLETE) {
      icon = ICON_COMPLETED
    } else if (status == SBTUpdateStatus.TC_INPROGRESS) {
      icon = ICON_IN_PROGRESS
    }
    return icon
  }

  static function getAnalysisTooltips(status : typekey.SBTUpdateStatus) : String {
    var tooltips = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Tooltips.StartAnalysis")
    if (status == SBTUpdateStatus.TC_COMPLETE) {
      tooltips = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Tooltips.Finished")
    } else if (status == SBTUpdateStatus.TC_INPROGRESS) {
      tooltips = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Tooltips.InProgress")
    }
    return tooltips
  }

  static function getDifferenceIconName(difference : UpdateDiffType, detailsAvailableToShow = true) : String {
    if (difference == null) return null
    if (detailsAvailableToShow) {
      return getClickableDiffIcons(difference)
    } else {
      return getNonClickableDiffIcons(difference)
    }
  }

  static function goToListOfUpdates(newUpdateMetaData : SBTUpdateMetaData, latestAdoptedUpdateMetaData : SBTUpdateMetaData,
                                    contentRepository : ContentRepository, configLocation : File, filterOption : SBTUPDATE_FILTER_OPTION) {
    if (latestAdoptedUpdateMetaData != null) {
      StateUpdateDiffsPage.go(
          createStateUpgradeUpdatePresenter(newUpdateMetaData, latestAdoptedUpdateMetaData, contentRepository, configLocation,
              getDefaultAdoptionDate(newUpdateMetaData)),
          filterOption)
    } else {
      UpdateDiffsPage.go(createUpdatePresenter(newUpdateMetaData, contentRepository, configLocation),
          filterOption)
    }
    SBTUpdateCache.prepareCacheForEdit(newUpdateMetaData)
    SBTUpdateCache.prepareCacheForEdit(latestAdoptedUpdateMetaData)
  }

  static function createStateUpgradeUpdatePresenter(newUpdateMetaData : SBTUpdateMetaData,
                                                    latestAdoptedUpdateMetaData : SBTUpdateMetaData,
                                                    contentRepository : ContentRepository,
                                                    configLocation : File,
                                                    adoptionDate : Date) : StateUpdatePresenter {
    var latestAdoptedUpdate = SBTUpdateCache.findOrCreateAndPersistSBTUpdate(latestAdoptedUpdateMetaData, contentRepository, adoptionDate)
    var newUpdate = SBTUpdateCache.findOrCreateAndPersistSBTUpdate(newUpdateMetaData, contentRepository, adoptionDate)
    return new StateUpdatePresenter(
        :newUpdate = newUpdate,
        :latestAdoptedUpdate = latestAdoptedUpdate,
        :contentRepo = contentRepository,
        :configLocation = configLocation,
        :adoptionDate = adoptionDate)
  }

  static function getComparisonDiffType(twoWayCompare : TwoWayCompare) : UpdateDiffType {
    if (twoWayCompare.IsAdd) {
      return UpdateDiffType.TC_NEW
    } else if (twoWayCompare.IsRemove) {
      return UpdateDiffType.TC_DELETED
    } else if (twoWayCompare.IsChange) {
      return UpdateDiffType.TC_CHANGED
    } else {
      return UpdateDiffType.TC_NOCHANGE
    }
  }

  private static function getClickableDiffIcons(difference : UpdateDiffType) : String {
    switch (difference) {
      case UpdateDiffType.TC_CHANGED:
        return ICON_MODIFIED
      case UpdateDiffType.TC_NEW:
        return ICON_ADDED
      case UpdateDiffType.TC_DELETED:
        return ICON_DELETED
      default:
        return ICON_NO_CHANGE
    }
  }

  private static function getNonClickableDiffIcons(difference : UpdateDiffType) : String {
    switch (difference) {
      case UpdateDiffType.TC_CHANGED:
        return ICON_MODIFIEDE_NONCLICKABLE
      case UpdateDiffType.TC_NEW:
        return ICON_ADDEDE_NONCLICKABLE
      case UpdateDiffType.TC_DELETED:
        return ICON_DELETEDE_NONCLICKABLE
      default:
        return ICON_NO_CHANGE_NONCLICKABLE
    }
  }

  //return the later date between Today and ERC Effective Date
  static function getDefaultAdoptionDate(updateMetaData : SBTUpdateMetaData) : Date {
    var effectiveDate = updateMetaData.EffectiveDate
    if (effectiveDate == null or effectiveDate.before(Date.Today)) {
      return Date.Today
    } else {
      return effectiveDate
    }
  }

  static property get AnalysisCompleteTooltips() : String {
    if (not perm.System.pcamerge) {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.No.AnalysisComplete.Permission.ToolTip")
    } else {
      return ""
    }
  }

  private static function logPcaVersion() {
    if (isVersionLogged)
      return
    isVersionLogged = true
    PcaVersionUtil.logPcaVersion()
  }

  static property get PCAVersion() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Version", PcaVersionUtil.PcaVersion)
  }

  static function hasMergeRevertPriv(metaData : SBTUpdateMetaData) : boolean {
    // optimiztion- skip any further processing if state is not the same as expected
    if (SBTUpdateCache.getStatus(metaData) == SBTUpdateStatus.TC_COMPLETE) {
      var lineCode = metaData.Line.Code
      var state = metaData.Jurisdiction

      var revertableUpdate = PersistenceManager.findRevertableUpdate(lineCode, state)

      // optimization- skip file existence check, and later handling it as a runtime error
      return perm.System.pcamerge and revertableUpdate != null
    }

    return false
  }

  static function revertMerge(lastUpdate : SBTUpdate) : boolean {
    var lineCode = lastUpdate.MetaData.Line.Code
    var state = lastUpdate.MetaData.Jurisdiction

    return revertMerge(lineCode, state)
  }


  static function revertMerge(lineCode : String, state : String) : boolean {
    var mergeRevertedSuccessfully = false

    var persistedUpdates = PersistenceManager.findRevertableUpdate(lineCode, state)

    if (persistedUpdates != null) {
      var targetConfiguration = new FileTargetConfiguration(ContentRepositoryProvider.CurrentConfigLocation)

      if (targetConfiguration.exists(ConfigurationFile.configurationBackupZipFile())) {
        var persistedUpdateToBeReverted = persistedUpdates

        var ercPackageMetaData = new ERCPackageMetaData() {
          :Line = new LineMetaData() {
            :Code = persistedUpdateToBeReverted.Line
          },
          :Jurisdictions = {
              new JurisdictionMetaData() {
                :Jurisdiction = persistedUpdateToBeReverted.Jurisdiction.Code,
                :EffectiveDate = persistedUpdateToBeReverted.EffectiveDate,
                :Version = persistedUpdateToBeReverted.Version
              }
          },
          :Qualifier = persistedUpdateToBeReverted.Qualifier
        }

        var sbtUpdateMeta = new SBTUpdateMetaData(ercPackageMetaData, state, persistedUpdateToBeReverted.Adopted)

        // revert to IN_PROGRESS status
        SBTUpdateCache.revertToStatus(sbtUpdateMeta, SBTUpdateStatus.TC_INPROGRESS)

        // move "adopted" file back to "new"
        ContentRepositoryProvider.CurrentRepository.unadoptSBTUpdate(sbtUpdateMeta)

        ConfigurationBackup.restoreConfiguration(targetConfiguration)

        mergeRevertedSuccessfully = true
      }
    } else {
      LoggerFactory.getLogger("PCA").error(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTUpdate.CommandLine.Revert.OperationNotSuccessful.MissingZipFile"))
    }


    return mergeRevertedSuccessfully
  }


  static function checkPatternExistence(clauseId : String, termId : String = null, optionId : String = null) : boolean {
    var clausePattern = com.guidewire.pc.system.dependency.PCDependencies.getProductModel().getPatternByCodeIdentifier(clauseId, ClausePattern)

    if (clausePattern == null)
      return false

    if (termId != null) {
      var termPattern = clausePattern.getCovTermPatternByCodeIdentifier(termId)
      if (termPattern == null)
        return false
      if (termPattern typeis gw.api.productmodel.OptionCovTermPattern and optionId != null) {
        if (!termPattern.Options*.OptionCode.contains(optionId))
          return false
      }
    }

    return true
  }

  static function isMaintenanceUpdate(newEdition : String, adoptedEdition : String, newCWEdition : String, adoptedCWEdition : String) : boolean {
    if (newEdition == null or adoptedEdition == null or newCWEdition == null or adoptedCWEdition == null) return false
    if (not newCWEdition.equals(adoptedCWEdition)) return false

    var newEditionPartition = newEdition.split(" ")
    var adoptedEditionPartition = adoptedEdition.split(" ")

    if (newEditionPartition.length != 3) return false

    var newJurisdictionDate = newEditionPartition[0]
    var adoptedJurisdictionDate = adoptedEditionPartition[0]

    var newJurisdictionVersion = newEditionPartition[1]
    var adoptedJurisdictionVersion = adoptedEditionPartition[1]

    if (not adoptedJurisdictionVersion.equals(newJurisdictionVersion) or
        not adoptedJurisdictionDate.equals(newJurisdictionDate)) {
      return false
    }

    if (newEditionPartition.length == 3) {
      var sbtVersionStrLen = "SBT_Version_".length
      var newEditionSBTVersionDate = Formatter.stringToDate(newEditionPartition[2].substring(sbtVersionStrLen), "yyyy-MM-dd")
      if (adoptedEditionPartition.length == 3) {
        // is in the format: SBT_Version_2019-12-01
        var adoptedEditionSBTVersionDate = Formatter.stringToDate(adoptedEditionPartition[2].substring(sbtVersionStrLen), "yyyy-MM-dd")

        return newEditionSBTVersionDate.after(adoptedEditionSBTVersionDate)
      }
    } else {
      return false
    }

    return true
  }

}