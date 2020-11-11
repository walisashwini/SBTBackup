package gw.sbt.pca.view.presenter

uses com.guidewire.pl.web.util.WebFileUtil
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.Intent
uses gw.sbt.model.OptionSelector
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses gw.sbt.pca.persistence.SBTUpdateCache
uses gw.sbt.pca.repository.ContentRepository
uses gw.sbt.pca.view.ArtifactStatistics
uses gw.sbt.util.DisplayDescriptionHelper
uses java.io.ByteArrayInputStream
uses java.util.List
uses gw.api.locale.DisplayKey

class MetaDataPresenter {
  private enum ValidationSource { LATEST_SBT, NEW_SBT }
  var _sbtSelectionErrorSource: ValidationSource = null

  var _newSbtUpdateMetaDataList : List<SBTUpdateMetaData>
  var _latestAdoptedSBTMetaData : SBTUpdateMetaData
  var _selectedNewSBTMetaData : SBTUpdateMetaData
  var _defaultMetaData : SBTUpdateMetaData

  internal construct(latestAdoptedSBTMetaData : SBTUpdateMetaData, newSBTOptionSelector: OptionSelector<SBTUpdateMetaData>) {
    _newSbtUpdateMetaDataList = newSBTOptionSelector.Options
    _selectedNewSBTMetaData = newSBTOptionSelector.Selection
    _latestAdoptedSBTMetaData = latestAdoptedSBTMetaData

    if(_latestAdoptedSBTMetaData != null) {
      _newSbtUpdateMetaDataList.retainWhere(
          \newSbtUpdateMetaData ->
              newSbtUpdateMetaData.isLaterThan(_latestAdoptedSBTMetaData)
          )
    }

    // Select a default new update if a selection was never made before
    if(_selectedNewSBTMetaData == null and _newSbtUpdateMetaDataList != null) {
      _selectedNewSBTMetaData = _newSbtUpdateMetaDataList.first()
    }

    if(_newSbtUpdateMetaDataList != null) {
      _defaultMetaData = _newSbtUpdateMetaDataList.first() ?: _latestAdoptedSBTMetaData
    } else {
      _defaultMetaData = _latestAdoptedSBTMetaData
    }

    refreshMaintenanceUpdateProps()
  }

  property get Line(): String {
    return _defaultMetaData.Line.Name
  }

  property get Icon() : String {
    return PresenterUtil.getUpdateSummaryIconName(_defaultMetaData.Line.Code)
  }

  property get Jurisdiction(): String {
    var jurisdictionCode = _defaultMetaData.Jurisdiction
    return jurisdictionCode + " - " + typekey.Jurisdiction.get(jurisdictionCode).DisplayName
  }

  property get EffectiveDate(): Date {
    return _defaultMetaData.EffectiveDate
  }

  //For new version
  property get CwEdition(): String {
    return DisplayDescriptionHelper.getMetaDataCWEdition(_defaultMetaData)
  }

  property get AvailableSBTUpdateEdition() : String {
    return DisplayDescriptionHelper.getMetaDataEditionForDisplay(_selectedNewSBTMetaData)
  }

  property get HasAvailableSBTUpdateEdition() : boolean {
    return AvailableSBTUpdateEdition.HasContent
  }

  //For latest adopted version
  property get LatestAdoptedSBTUpdateEdition() : String {
    return DisplayDescriptionHelper.getMetaDataEditionForDisplay(_latestAdoptedSBTMetaData)
  }

  property get LatestAdoptedSBTUpdateCwEdition() : String {
    return DisplayDescriptionHelper.getMetaDataCWEdition(_latestAdoptedSBTMetaData)
  }

  property get HasLatestAdoptedSBTUpdateEdition() : boolean {
    return LatestAdoptedSBTUpdateEdition.HasContent
  }

  //Cw Edition's label for new package is different between StateAdd and StateUpdate.
  property get CwEditionLabel() : String {
    if (HasLatestAdoptedSBTUpdateEdition) {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.NewUpdateCwEdition")
    } else {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.CwEdition")
    }
  }

  function hasStateRCRN(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.MetaData.StateRCRN)
  }

  function hasCWRCRN(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.MetaData.CWRCRN)
  }

  function downloadStateRCRN(repo : ContentRepository) {
    var releaseNotes = getNewSBTUpdate(repo).MetaData.StateRCRN
    sendFile(releaseNotes, :contentType = "application/msword")
  }

  function downloadCWRCRN(repo : ContentRepository) {
    var releaseNotes = getNewSBTUpdate(repo).MetaData.CWRCRN
    sendFile(releaseNotes, :contentType = "application/msword")
  }

  function hasAnyReport(repo: ContentRepository): boolean {
    if (_selectedNewSBTMetaData == null) {
      return false
    }
    var newSbtUpdate = getNewSBTUpdate(repo)
    if (newSbtUpdate.LoadReportContent != null or newSbtUpdate.ConfigurationReportContent != null or newSbtUpdate.DeviationsReportContent != null
        or hasRatingReport(repo) or newSbtUpdate.AuditReportContent != null){
      return true
    }
    return false
  }

  function hasLoadReport(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.LoadReportContent)
  }

  function hasConfigurationReport(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.ConfigurationReportContent)
  }

  function hasAuditReport(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.AuditReportContent)
  }

  function hasDeviationsReport(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.DeviationsReportContent)
  }

  function hasRatingReport(repo : ContentRepository) : boolean {
    return _latestAdoptedSBTMetaData != null and
        selectedUpdateHasContent(repo, \ update -> update.StateUpdateRatingReportContent)
  }

  function downloadLoadReport(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).LoadReportContent
    downloadReport(downloadContent)
  }

  function downloadConfigurationReport(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).ConfigurationReportContent
    downloadReport(downloadContent)
  }

  function downloadAuditReport(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).AuditReportContent
    downloadReport(downloadContent)
  }

  function downloadDeviationsReport(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).DeviationsReportContent
    downloadReport(downloadContent)
  }

  function downloadRatingReport(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).StateUpdateRatingReportContent
    downloadReport(downloadContent)
  }

  function hasConflictFilesZip(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.ConflictFilesZipContent)
  }

  function downloadConflictFilesZip(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).ConflictFilesZipContent
    sendFile(downloadContent, :contentType = "application/zip")
  }

  function hasMergedFilesZip(repo : ContentRepository) : boolean {
    return selectedUpdateHasContent(repo, \ update -> update.MergedFilesZipContent)
  }

  function downloadMergedFilesZip(repo : ContentRepository) {
    var downloadContent = getNewSBTUpdate(repo).MergedFilesZipContent
    sendFile(downloadContent, :contentType = "application/zip")
  }

  private function downloadReport(reportContent : DownloadContent) {
    sendFile(reportContent, :contentType = "text/html")
  }

  private function selectedUpdateHasContent(
      repo : ContentRepository,
      getContent(update : SBTUpdate) : DownloadContent
  ) : boolean {
    return _selectedNewSBTMetaData != null and getContent(getNewSBTUpdate(repo)) != null
  }

  private function sendFile(downloadContent : DownloadContent, contentType : String) {
    WebFileUtil.copyStreamToClient(
        contentType,
        downloadContent.FileName,
        new ByteArrayInputStream(downloadContent.Content),
        downloadContent.Content.length)
  }

  function getArtifactStatistics(repo : ContentRepository) : List<ArtifactStatistics> {
    var sbtUpdate = getNewSBTUpdate(repo)
    var _artifactStatistics : List<ArtifactStatistics>  = null
    if(HasLatestAdoptedSBTUpdateEdition) {
      var latestAdoptedSBTUpdate = getLatestAdoptedSBTUpdate(repo)
      latestAdoptedSBTUpdate.AdoptionDate = sbtUpdate.AdoptionDate
      EffectiveAvailabilityHelper.setEffectiveAvailability(sbtUpdate)
      EffectiveAvailabilityHelper.setEffectiveAvailability(latestAdoptedSBTUpdate)
      _artifactStatistics = {
        computeComparisonClauseStatistics(latestAdoptedSBTUpdate, sbtUpdate),
        computeComparisonFormsStatistics(latestAdoptedSBTUpdate, sbtUpdate),
        computeComparisonRateTablesStatistics(latestAdoptedSBTUpdate, sbtUpdate),
        computeComparisonAlgorithmsStatistics(latestAdoptedSBTUpdate, sbtUpdate)
      }
      _artifactStatistics.addAll(computeComparisonBureauCodesStatistics(latestAdoptedSBTUpdate, sbtUpdate))
      _artifactStatistics.add(computeComparisonRiskAttributeStatistics(latestAdoptedSBTUpdate, sbtUpdate))
    }
    else {
      _artifactStatistics = {
        computeClauseStatistics(sbtUpdate),
        computeFormsStatistics(sbtUpdate),
        computeRateTablesStatistics(sbtUpdate),
        computeAlgorithmsStatistics(sbtUpdate)
      }
      _artifactStatistics.addAll(computeBureauCodesStatistics(sbtUpdate))
      _artifactStatistics.add(computeRiskAttributesStatistics(sbtUpdate))
    }

    return _artifactStatistics
  }

  function getNewSBTUpdate(repo: ContentRepository) : SBTUpdate {
    if (_latestAdoptedSBTMetaData == null) { // state add: no adoption date needed.
      return SBTUpdateCache.findOrCreateAndPersistSBTUpdate(_selectedNewSBTMetaData, repo, null)
    } else {
      return SBTUpdateCache.findOrCreateAndPersistSBTUpdate(_selectedNewSBTMetaData, repo, _selectedNewSBTMetaData.EffectiveDate)
    }
  }

  function getLatestAdoptedSBTUpdate(repo : ContentRepository) : SBTUpdate {
    return SBTUpdateCache.findOrCreateAndPersistSBTUpdate(_latestAdoptedSBTMetaData, repo, _selectedNewSBTMetaData.EffectiveDate)
  }

  function validateLatestAdoptedSBTMetaData(latestAdoptedSBTMetaData : SBTUpdateMetaData) : String {
    // Note this function isn't triggered by pcf when selection is returned to default value
    return validateSBTWithSelectionContext(ValidationSource.LATEST_SBT, latestAdoptedSBTMetaData, _selectedNewSBTMetaData)

  }

  function validateAvailableSBTMetaData(availableSBTMetaData : SBTUpdateMetaData) : String {
    // Note this function isn't triggered by pcf when selection is returned to default value
    return validateSBTWithSelectionContext(ValidationSource.NEW_SBT, _latestAdoptedSBTMetaData, availableSBTMetaData)
  }

  private function validateSBTWithSelectionContext(validationSrc : ValidationSource, latestAdoptedSBTMetaData : SBTUpdateMetaData, availableSBTMetaData : SBTUpdateMetaData) : String {
    // Validate if there isn't already an existing error, or
    // if there is an existing error and the user is doing the same selection, then re-throw the same error
    if(validateSBTSelections(_latestAdoptedSBTMetaData, _selectedNewSBTMetaData) == null or _sbtSelectionErrorSource == validationSrc) {
      _latestAdoptedSBTMetaData = latestAdoptedSBTMetaData
      _selectedNewSBTMetaData = availableSBTMetaData
      refreshMaintenanceUpdateProps()

      var error = validateSBTSelections(_latestAdoptedSBTMetaData, _selectedNewSBTMetaData)
      if(error != null) {
        _sbtSelectionErrorSource = validationSrc
      } else {
        _sbtSelectionErrorSource = null
      }
      return error
    }
    // If there is an existing error but the user is selecting a different element, then do not highlight this widget too
    // for the same error
    return null
  }

  static function validateSBTSelections(latestAdoptedSBTMetaData : SBTUpdateMetaData, availableSBTMetaData : SBTUpdateMetaData) : String {
    if(latestAdoptedSBTMetaData != null and availableSBTMetaData != null) {
      if (not availableSBTMetaData.isLaterThan(latestAdoptedSBTMetaData)) {
        return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.SBTSelectionDatesInvalid")
      }
    }
    return null
  }

  property set LatestAdoptedSBTUpdate(metaDataUpdate : SBTUpdateMetaData){
    _latestAdoptedSBTMetaData = metaDataUpdate
    refreshMaintenanceUpdateProps()
  }

  property get LatestAdoptedSBTUpdate() : SBTUpdateMetaData {
    return _latestAdoptedSBTMetaData
  }

  property set AvailableSBTUpdate(metaDataUpdate : SBTUpdateMetaData){
    _selectedNewSBTMetaData = metaDataUpdate

    updateLatestAdoptedMaintenanceProp()
  }

  property get AvailableSBTUpdate() : SBTUpdateMetaData {
    return _selectedNewSBTMetaData
  }

  property get AvailableSBTUpdates() : List<SBTUpdateMetaData> {
    return _newSbtUpdateMetaDataList
  }

  property get LatestAdoptedSBTUpdates (): List<SBTUpdateMetaData> {
    return {_latestAdoptedSBTMetaData}
  }

  property get ValidUpdatesSelected() : boolean {
    return _selectedNewSBTMetaData != null and validateSBTSelections(_latestAdoptedSBTMetaData, _selectedNewSBTMetaData) == null
  }

  property get Status() : typekey.SBTUpdateStatus {
    return SBTUpdateCache.getStatus(AvailableSBTUpdate)
  }

  property get DisplayStatus() : String {
    if(AvailableSBTUpdate == null) {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Status.NoNewUpdatesAvailable")
    }

    return Status.toString()
  }

  property get LatestAdoptedDropDownEditable() : boolean {
    return false
  }

  property get NewUpdateDropDownEditable() : boolean {
    return EnableSBTSelection and _newSbtUpdateMetaDataList.size() > 1
  }

  property get RowVisible() : boolean {
    return _latestAdoptedSBTMetaData != null or _newSbtUpdateMetaDataList.size() > 0
  }

  private property get EnableSBTSelection() : boolean {
    return Status == SBTUpdateStatus.TC_NOTSTARTED
  }

  private function computeComparisonClauseStatistics(latestAdoptedSBTUpdate : SBTUpdate, newSBTUpdate : SBTUpdate) : ArtifactStatistics {
    var latestAdoptedClauses = latestAdoptedSBTUpdate.Clauses
    var newClauses = newSBTUpdate.Clauses
    var publicIDs = latestAdoptedClauses*.PublicId.toList().union(newClauses*.PublicId.toList())
    var totalAdded = 0
    var totalRemoved = 0
    var totalChanged = 0

    publicIDs.each( \ publicID  -> {
      var latestAdoptedClause = latestAdoptedClauses.firstWhere( \ clause -> clause.PublicId == publicID )
      var newClause = newClauses.firstWhere( \ clause -> clause.PublicId == publicID )
      var twoWayCompare = Comparison.forClause(null, newClause, latestAdoptedClause, ComparisonDecisionSource.createDeattached()).CompareAdoptedToNew

      if(twoWayCompare.IsAdd) {
        totalAdded++
      } else if(twoWayCompare.IsRemove) {
        totalRemoved++
      } else if(twoWayCompare.IsChange) {
        totalChanged++
      }
    })

    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClausesTitle"),
        :NumberAdded = totalAdded,
        :NumberUpdated = totalChanged,
        :NumberDeleted = totalRemoved
    }
  }

  // not the prettiest approach to get maintenance update display but due to the limitations of RangeCell in the pcf
  // this must be done
  private function refreshMaintenanceUpdateProps() {
    updateLatestAdoptedMaintenanceProp()

    if (_newSbtUpdateMetaDataList != null) {
      _newSbtUpdateMetaDataList.each(\newMetadata -> {
        newMetadata.IsMaintenanceMetaData = PresenterUtil.isMaintenanceUpdate(
            DisplayDescriptionHelper.getMetaDataEdition(newMetadata),
            DisplayDescriptionHelper.getMetaDataEdition(_latestAdoptedSBTMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(newMetadata),
            DisplayDescriptionHelper.getMetaDataCWEdition(_latestAdoptedSBTMetaData)
        )
      })
    }
  }

  private function updateLatestAdoptedMaintenanceProp() {
    if (_latestAdoptedSBTMetaData != null) {
      _latestAdoptedSBTMetaData.IsMaintenanceMetaData = PresenterUtil.isMaintenanceUpdate(
          DisplayDescriptionHelper.getMetaDataEdition(_selectedNewSBTMetaData),
          DisplayDescriptionHelper.getMetaDataEdition(_latestAdoptedSBTMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(_selectedNewSBTMetaData),
          DisplayDescriptionHelper.getMetaDataCWEdition(_latestAdoptedSBTMetaData)
      )
    }
  }

  private function computeClauseStatistics(sbtUpdate : SBTUpdate) : ArtifactStatistics {
    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClausesTitle"),
        :NumberAdded = sbtUpdate.Clauses?.countWhere( \ clause -> clause.Intent == Intent.STATE_ADD),
        :NumberUpdated = sbtUpdate.Clauses?.countWhere( \ clause -> clause.Intent == Intent.STATE_MODIFIED),
        :NumberDeleted = sbtUpdate.Clauses?.countWhere( \ clause -> clause.Intent == Intent.STATE_REMOVE)
    }
  }

  private function computeComparisonFormsStatistics(latestAdoptedSBTUpdate : SBTUpdate, newSBTUpdate : SBTUpdate) : ArtifactStatistics {
    var latestAdoptedForms = latestAdoptedSBTUpdate.Forms
    var newForms = newSBTUpdate.Forms
    var formNumbers = latestAdoptedForms*.Number.toList().union(newForms*.Number.toList())
    var totalAdded = 0
    var totalRemoved = 0
    var totalChanged = 0

    formNumbers.each( \ formNumber  -> {
      var adoptedForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(latestAdoptedForms, formNumber)
      var newForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(newForms, formNumber)
      var twoWayCompare = Comparison.forPolicyForm(null, newForm, adoptedForm, ComparisonDecisionSource.createDeattached()).CompareAdoptedToNew

      if(twoWayCompare.IsAdd) {
        totalAdded++
      } else if(twoWayCompare.IsRemove) {
        totalRemoved++
      } else if(twoWayCompare.IsChange) {
        totalChanged++
      }
    })

    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.FormsTitle"),
        :NumberAdded = totalAdded,
        :NumberUpdated = totalChanged,
        :NumberDeleted = totalRemoved
    }
  }

  private function computeComparisonRateTablesStatistics(latestAdoptedSBTUpdate : SBTUpdate, newSBTUpdate : SBTUpdate) : ArtifactStatistics {
    var latestAdoptedRateTables = latestAdoptedSBTUpdate.RateBook.RateTables
    var newRateTables = newSBTUpdate.RateBook.RateTables

    var rateTableCodes = latestAdoptedRateTables*.TableCode.toList().union(newRateTables*.TableCode.toList())

    var totalAdded = 0
    var totalRemoved = 0
    var totalChanged = 0

    rateTableCodes.each( \ tableCode  -> {
      var adoptedRateTable = latestAdoptedRateTables.firstWhere(\rateTable ->  rateTable.TableCode == tableCode)
      if (adoptedRateTable == null) {  // try to read from referencedbook
        adoptedRateTable = latestAdoptedSBTUpdate.RateBook.ReferencedBook.RateTables?.firstWhere(\rateTable -> rateTable.TableCode == tableCode)
      }
      var newRateTable = newRateTables.firstWhere(\rateTable ->  rateTable.TableCode == tableCode)
      if (newRateTable == null) {  // try to read from referencedbook
        newRateTable = newSBTUpdate.RateBook.RateTables?.firstWhere(\rateTable -> rateTable.TableCode == tableCode)
      }
      var twoWayCompare = Comparison.forRateTable(null, newRateTable, adoptedRateTable, ComparisonDecisionSource.createDeattached()).CompareAdoptedToNew

      if(twoWayCompare.IsAdd) {
        totalAdded++
      } else if(twoWayCompare.IsRemove) {
        totalRemoved++
      } else if(twoWayCompare.IsChange) {
        totalChanged++
      }
    })

    return new ArtifactStatistics() {
      :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle"),
      :NumberAdded = totalAdded,
      :NumberUpdated = totalChanged,
      :NumberDeleted = totalRemoved
    }
  }

  private function computeComparisonAlgorithmsStatistics(latestAdoptedSBTUpdate : SBTUpdate, newSBTUpdate : SBTUpdate) : ArtifactStatistics {
    var latestAdoptedAlgorithms = latestAdoptedSBTUpdate.RateBook.Algorithms
    var newAlgorithms = newSBTUpdate.RateBook.Algorithms

    var algorithmCodes = newAlgorithms*.Code.union(latestAdoptedAlgorithms*.Code)

    var totalAdded = 0
    var totalRemoved = 0
    var totalChanged = 0

    algorithmCodes.each( \ algorithmCode  -> {
      var adoptedAlgorithm = latestAdoptedAlgorithms.firstWhere(\algorithm ->  algorithm.Code == algorithmCode)
      var newRateAlgorithm = newAlgorithms.firstWhere(\algorithm ->  algorithm.Code == algorithmCode)
      var twoWayCompare = Comparison.forRatingAlgorithm(newRateAlgorithm, adoptedAlgorithm, ComparisonDecisionSource.createDeattached()).CompareAdoptedToNew

      if(twoWayCompare.IsAdd) {
        totalAdded++
      } else if(twoWayCompare.IsRemove) {
        totalRemoved++
      } else if(twoWayCompare.IsChange) {
        totalChanged++
      }
    })

    return new ArtifactStatistics() {
      :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle"),
      :NumberAdded = totalAdded,
      :NumberUpdated = totalChanged,
      :NumberDeleted = totalRemoved
    }
  }

  private function computeComparisonRiskAttributeStatistics(latestAdoptedSBTUpdate : SBTUpdate, newSBTUpdate : SBTUpdate) : ArtifactStatistics {
    var latestAdoptedRiskAttributes:Collection<RiskAttribute> = {}
    latestAdoptedSBTUpdate.Risks.each(\risk -> {
      if(risk.RiskAttributes.HasElements) {
        latestAdoptedRiskAttributes.addAll(risk.RiskAttributes)
      }
    })
    var newRiskAttributes:Collection<RiskAttribute> = {}
    newSBTUpdate.Risks.each(\risk -> {
      if(risk.RiskAttributes.HasElements) {
        newRiskAttributes.addAll(risk.RiskAttributes)
      }
    })
    //note: the fullPath is a combination of entity and code, should be unique across all risks.
    var allRiskAttributeFullPath = newRiskAttributes*.OriginatingFullPath.union(latestAdoptedRiskAttributes*.OriginatingFullPath)

    var totalAdded = 0
    var totalRemoved = 0
    var totalChanged = 0

    allRiskAttributeFullPath.each(\fullPath -> {
      var adoptedRiskAttribute = latestAdoptedRiskAttributes.firstWhere(\attr -> (attr.OriginatingFullPath == fullPath and attr.EffectiveVersion != null))
      var newRiskAttribute = newRiskAttributes.firstWhere(\attr -> (attr.OriginatingFullPath == fullPath and attr.EffectiveVersion != null))
      var twoWayCompare = Comparison.forRiskAttribute(null, newRiskAttribute, adoptedRiskAttribute, ComparisonDecisionSource.createDeattached(), null).CompareAdoptedToNew
      if (twoWayCompare.IsAdd) {
        totalAdded++
      } else if (twoWayCompare.IsRemove) {
        totalRemoved++
      } else if (twoWayCompare.IsChange) {
        totalChanged++
      }
    })

    return new ArtifactStatistics() {
      :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RisksTitle"),
      :NumberAdded = totalAdded,
      :NumberUpdated = totalChanged,
      :NumberDeleted = totalRemoved
    }
  }

  private function computeComparisonBureauCodesStatistics(latestAdoptedSBTUpdate : SBTUpdate, newSBTUpdate : SBTUpdate) : List<ArtifactStatistics> {
    var bureauCodesStatistics : List<ArtifactStatistics> = {}
    var adoptedBureauCodesList = latestAdoptedSBTUpdate.BureauCodes
    var newBureauCodesList = newSBTUpdate.BureauCodes

    var tableNames = newBureauCodesList*.TableName.toList().union(adoptedBureauCodesList*.TableName.toList())

    tableNames.each( \ tableName -> {
      var adoptedBureauCodes = adoptedBureauCodesList.firstWhere(\bureauCodes -> bureauCodes.TableName == tableName)
      var newBureauCodes = newBureauCodesList.firstWhere(\bureauCodes -> bureauCodes.TableName == tableName)
      var bureauCodesRowComparisons = Comparison.forBureauCodes(null, newBureauCodes, adoptedBureauCodes, newSBTUpdate.AdoptionDate, ComparisonDecisionSource.createDeattached()).Children
      var totalAdded = 0
      var totalRemoved = 0
      var totalChanged = 0

      bureauCodesRowComparisons.map(\comparison -> comparison.CompareAdoptedToNew).each(\twoWayCompare -> {
        if(twoWayCompare.IsAdd) {
          totalAdded++
        } else if(twoWayCompare.IsRemove) {
          totalRemoved++
        } else if(twoWayCompare.IsChange) {
          totalChanged++
        }
      })

      bureauCodesStatistics.add(new ArtifactStatistics() {
        :Description = newBureauCodes != null ? newBureauCodes.Label : adoptedBureauCodes.Label,
        :NumberAdded = totalAdded,
        :NumberUpdated = totalChanged,
        :NumberDeleted = totalRemoved
      })
    })

    return bureauCodesStatistics
  }

  private function computeFormsStatistics(sbtUpdate : SBTUpdate) : ArtifactStatistics {
    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.FormsTitle"),
        :NumberAdded = sbtUpdate.Forms?.countWhere( \ form -> form.Intent == Intent.STATE_ADD),
        :NumberUpdated = sbtUpdate.Forms?.countWhere( \ form -> form.Intent == Intent.STATE_MODIFIED),
        :NumberDeleted = sbtUpdate.Forms?.countWhere( \ form -> form.Intent == Intent.STATE_REMOVE)
    }
  }

  private function computeRateTablesStatistics(sbtUpdate : SBTUpdate) : ArtifactStatistics {
    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle"),
        :NumberAdded = sbtUpdate.RateBook.RateTables?.countWhere( \ rateTable -> rateTable.Intent == Intent.STATE_ADD),
        :NumberUpdated = sbtUpdate.RateBook.RateTables?.countWhere( \ rateTable -> rateTable.Intent == Intent.STATE_MODIFIED),
        :NumberDeleted = sbtUpdate.RateBook.RateTables?.countWhere( \ rateTable -> rateTable.Intent == Intent.STATE_REMOVE)
    }
  }

  private function computeAlgorithmsStatistics(sbtUpdate : SBTUpdate) : ArtifactStatistics {
    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle"),
        :NumberAdded = sbtUpdate.RateBook.Algorithms?.countWhere( \ algorithm -> algorithm.Intent == Intent.STATE_ADD),
        :NumberUpdated = sbtUpdate.RateBook.Algorithms?.countWhere( \ algorithm -> algorithm.Intent == Intent.STATE_MODIFIED),
        :NumberDeleted = sbtUpdate.RateBook.Algorithms?.countWhere( \ algorithm -> algorithm.Intent == Intent.STATE_REMOVE)
    }
  }

  private function computeBureauCodesStatistics(sbtUpdate : SBTUpdate) : List<ArtifactStatistics> {
    var bureauCodesStatistics : List<ArtifactStatistics> = {}
    sbtUpdate.BureauCodeFileDefinitions.each(\fileDefinition -> {
      var bureauCode = sbtUpdate.getBureauCodes(fileDefinition.FileName)
      if (bureauCode != null) {
        bureauCodesStatistics.add(
            new ArtifactStatistics() {
              :Description = fileDefinition.Label,
              :NumberAdded = sbtUpdate.getBureauCodes(fileDefinition.FileName).Codes?.size(),
              :NumberUpdated = 0,
              :NumberDeleted = 0
            }
        )
      }
    })
    return bureauCodesStatistics
  }

  private function computeRiskAttributesStatistics(sbtUpdate : SBTUpdate) : ArtifactStatistics {
    var numberAdded = 0
    var numberUpdated = 0
    var numberDeleted = 0

    var allRiskAttributes = sbtUpdate.Risks*.RiskAttributes

    allRiskAttributes.each( \ riskAttribute -> {
      numberAdded = numberAdded + riskAttribute.countWhere( \ ra -> ra.Intent == Intent.STATE_ADD)
      numberUpdated = numberUpdated + riskAttribute.countWhere( \ ra -> ra.Intent == Intent.STATE_MODIFIED)
      numberDeleted = numberDeleted + riskAttribute.countWhere( \ ra -> ra.Intent == Intent.STATE_REMOVE)
    })

    return new ArtifactStatistics() {
        :Description = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RisksTitle"),
        :NumberAdded = numberAdded,
        :NumberUpdated = numberUpdated,
        :NumberDeleted = numberDeleted
    }
  }
}