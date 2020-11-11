package gw.sbt.loader.reporter

uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.loader.merger.VersionedConfigMerger

//Report for New/Modified/Removed artifacts.
class ModificationReporter {
  //TODO: create 3 MAPs (added, removed, merged), messageType as Key, List<ReportContent> as Value
  var _addedArtifactsProductModel : List<ReportContent>as AddedArtifactsProductModel = {}
  var _removedArtifactsProductModel : List<ReportContent>as RemovedArtifactsProductModel = {}
  var _addedXSDs : List<ReportContent> = {}
  var _addedPlugins : List<ReportContent> = {}
  var _modifiedXSDs : List<ReportContent> = {}
  var _addedPCFs : List<ReportContent> = {}
  var _removedPCFs : List<ReportContent> = {}
  var _addedGosuClasses : List<ReportContent> = {}
  var _removedGosuClasses : List<ReportContent> = {}
  var _expiredSystemTableRows : List<ReportContent> = {}
  var _addedConfigurations : Map<MessageReporter.ReportMessageSourceType, List<ConfigurationFileReportContent>>as readonly AddedConfigurations = {}
  var _removedConfigurations : Map<MessageReporter.ReportMessageSourceType, List<ConfigurationFileReportContent>>as readonly RemovedConfigurations = {}
  var _modifiedConfigurations : Map<MessageReporter.ReportMessageSourceType, List<ConfigurationFileReportContent>>as readonly ModifiedConfigurations = {}
  var _addedSystemTables : List<ReportContent>as readonly AddedSystemTables = {}
  var _removedSystemTables : List<ReportContent>as readonly RemovedSystemTables = {}
  var _modifiedSystemTables : List<ReportContent>as readonly ModifiedSystemTables = {}
  var _addedBureauCodes : List<ReportContent>as readonly AddedBureauCodes = {}
  var _removedBureauCodes : List<ReportContent>as readonly RemovedBureauCodes = {}
  var _modifiedBureauCodes : List<ReportContent>as readonly ModifiedBureauCodes = {}
  var _addedTypeLists : List<ReportContent> = {}
  var _addedLookupTables : List<ReportContent> = {}
  var _modifiedLookupTables : List<ReportContent> = {}
  var _addedModifierMinMaxLookups : List<ReportContent> = {}
  var _removedModifierMinMaxLookups : List<ReportContent> = {}
  var _customizationDetectedManualMergeGosu : List<ReportContent> = {}
  var _customizationDetectedAutoMergeGosu : List<ReportContent> = {}
  var _potentialCustomizationDetectedSysTable : List<ReportContent> = {}

  function reportAddedProductModel(owningArtifactIdPath : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    _addedArtifactsProductModel.add(new ReportContent(owningArtifactIdPath, sourceType))
  }

  function reportRemovedProductModel(owningArtifactIdPath : List<String>, sourceType : MessageReporter.ReportMessageSourceType) {
    _removedArtifactsProductModel.add(new ReportContent(owningArtifactIdPath, sourceType))
  }

  function reportAddedXSD(xsdFileName : String) {
    _addedXSDs.add(new ReportContent({xsdFileName}, XSD))
  }

  function reportAddedPlugin(pluginFileName : String) {
    _addedPlugins.add(new ReportContent({pluginFileName}, PLUGIN))
  }

  function reportModifiedXSD(xsdFileName : String) {
    _modifiedXSDs.add(new ReportContent({xsdFileName}, XSD))
  }

  function reportAddedPCF(pcfFileName : String) {
    _addedPCFs.add(new ReportContent({pcfFileName}, PCF))
  }

  function reportRemovedPCF(pcfFileName : String) {
    _removedPCFs.add(new ReportContent({pcfFileName}, PCF))
  }

  function getLoadReportMode(effectiveVersionInCurrent : VersionedConfig, effectiveVersionInUpdate : VersionedConfig) : VersionedConfigMerger.REPORT_MODE {
    if (effectiveVersionInCurrent.Available != effectiveVersionInUpdate.Available) {
      if (effectiveVersionInCurrent.Available) {  // Available from 'true' to 'false', showing 'Expired' in report
        return EXPIRED
      } else { // Available from 'false' to 'true', showing 'New' in report
        return NEW
      }
    }
    return NOT_REQUIRED
  }

  function reportChangedConfiguration(sourceType : MessageReporter.ReportMessageSourceType, reportMode : VersionedConfigMerger.REPORT_MODE, containerName : String, propertyName : String) {
    if (reportMode == UPDATED) {
      reportModifiedConfiguration(sourceType, containerName, propertyName)
    } else if (reportMode == EXPIRED) {
      reportRemovedConfiguration(sourceType, containerName, propertyName)
    } else if (reportMode == NEW) {
      reportAddedConfiguration(sourceType, containerName, propertyName)
    }
  }

  function reportAddedConfiguration(sourceType : MessageReporter.ReportMessageSourceType, containerName : String, propertyName : String) {
    updateReportedVersionedConfigParams(_addedConfigurations, sourceType, containerName, propertyName)
  }

  function reportRemovedConfiguration(sourceType : MessageReporter.ReportMessageSourceType, containerName : String, propertyName : String) {
    updateReportedVersionedConfigParams(_removedConfigurations, sourceType, containerName, propertyName)
  }

  function reportModifiedConfiguration(sourceType : MessageReporter.ReportMessageSourceType, containerName : String, propertyName : String) {
    updateReportedVersionedConfigParams(_modifiedConfigurations, sourceType, containerName, propertyName)
  }

  private function updateReportedVersionedConfigParams(reportedParams : Map<MessageReporter.ReportMessageSourceType, List<ConfigurationFileReportContent>>, sourceType : MessageReporter.ReportMessageSourceType, containerName : String, propertyName : String) {
    var containerContentList = reportedParams.get(sourceType)

    // insert an empty list of container contents if not present
    if (containerContentList == null) {
      containerContentList = new ArrayList<ConfigurationFileReportContent>()
      reportedParams.put(sourceType, containerContentList)
    }

    var containerContents = containerContentList.firstWhere(\cont -> cont.ContainerName == containerName)
    if (containerContents == null) {
      containerContents = new ConfigurationFileReportContent(containerName, {propertyName}.toList())
      containerContentList.add(containerContents)
    } else {
      containerContents.ContainerProperties.add(propertyName)
    }

  }

  function reportAddedGosu(gosuClass : String) {
    _addedGosuClasses.add(new ReportContent({gosuClass}, GOSU))
  }

  function reportAddedTypeList(typeList : String) {
    _addedTypeLists.add(new ReportContent({typeList}, TYPELIST))
  }

  function reportAddedLookupTable(lookupTable : String) {
    _addedLookupTables.add(new ReportContent({lookupTable}, LOOKUP_TABLES))
  }

  function reportModifiedLookupTable(lookupTable : String) {
    _modifiedLookupTables.add(new ReportContent({lookupTable}, LOOKUP_TABLES))
  }

  function reportAddedSystemTables(systemTables : String) {
    _addedSystemTables.add(new ReportContent({systemTables}, SYSTEM_TABLE))
  }

  function reportRemovedSystemTables(systemTables : String) {
    _removedSystemTables.add(new ReportContent({systemTables}, SYSTEM_TABLE))
  }

  function reportModifiedSystemTables(systemTables : String) {
    _modifiedSystemTables.add(new ReportContent({systemTables}, SYSTEM_TABLE))
  }

  function reportAddedBureauCodes(bureauCodes : String) {
    _addedBureauCodes.add(new ReportContent({bureauCodes}, BUREAU_CODE))
  }

  function reportRemovedBureauCodes(bureauCodes : String) {
    _removedBureauCodes.add(new ReportContent({bureauCodes}, BUREAU_CODE))
  }

  function reportExpiredSystemTableRow(publicId : String, tableName : String) {
    _expiredSystemTableRows.add(new ReportContent({publicId + " (" + tableName + ")"}, SYSTEM_TABLE))
  }

  function reportExpiredSystemTable(tableName : String) {
    _expiredSystemTableRows.add(new ReportContent({"All rows (" + tableName + ")"}, SYSTEM_TABLE))
  }

  function reportModifiedBureauCodes(bureauCodes : String) {
    _modifiedBureauCodes.add(new ReportContent({bureauCodes}, BUREAU_CODE))
  }

  function reportAddedModifierMinMaxLookups(modifierPatternCode : String) {
    _addedModifierMinMaxLookups.add(new ReportContent({modifierPatternCode}, MODIFIER_MIN_MAX_LOOKUP))
  }

  property get AddedModifierMinMaxLookups() : List<String> {
    return _addedModifierMinMaxLookups.map(\reportContent -> reportContent.asString())
  }

  function reportRemovedModifierMinMaxLookups(modifierPatternCode : String) {
    _removedModifierMinMaxLookups.add(new ReportContent({modifierPatternCode}, MODIFIER_MIN_MAX_LOOKUP))
  }

  property get RemovedModifierMinMaxLookups() : List<String> {
    return _removedModifierMinMaxLookups.map(\reportContent -> reportContent.asString())
  }

  function reportRemovedGosu(gosuClass : String) {
    _removedGosuClasses.add(new ReportContent({gosuClass}, GOSU))
  }

  function reportCustomizationDetectedManualMergeGosu(gosuClass : String) {
    _customizationDetectedManualMergeGosu.add(new ReportContent({gosuClass}, GOSU))
  }

  property get CustomizationDetectedManualMergeGosu() : List<String> {
    return _customizationDetectedManualMergeGosu.map(\reportContent -> reportContent.asString())
  }

  function reportCustomizationDetectedAutoMergeGosu(gosuClass : String) {
    _customizationDetectedAutoMergeGosu.add(new ReportContent({gosuClass}, GOSU))
  }

  property get CustomizationDetectedAutoMergeGosu() : List<String> {
    return _customizationDetectedAutoMergeGosu.map(\reportContent -> reportContent.asString())
  }

  function reportPotentialCustomizationDetectedSysTable(publicId : String, tableName : String) {
    _potentialCustomizationDetectedSysTable.add(new ReportContent({publicId + " (" + tableName + ")"}, SYSTEM_TABLE))
  }

  property get PotentialCustomizationDetectedSysTable() : List<String> {
    return _potentialCustomizationDetectedSysTable.map(\reportContent -> reportContent.asString())
  }

  property get AddedPCFs() : List<String> {
    return _addedPCFs.map(\reportContent -> reportContent.asString())
  }

  property get RemovedPCFs() : List<String> {
    return _removedPCFs.map(\reportContent -> reportContent.asString())
  }

  property get AddedGosuClasses() : List<String> {
    return _addedGosuClasses.map(\reportContent -> reportContent.asString())
  }

  property get RemovedGosuClasses() : List<String> {
    return _removedGosuClasses.map(\reportContent -> reportContent.asString())
  }

  property get ExpiredSystemTableRows() : List<String> {
    return _expiredSystemTableRows.map(\reportContent -> reportContent.asString())
  }

  property get AddedXsdFiles() : List<String> {
    return _addedXSDs.map(\reportContent -> reportContent.asString())
  }

  property get ModifiedXsdFiles() : List<String> {
    return _modifiedXSDs.map(\reportContent -> reportContent.asString())
  }

  property get AddedPluginFiles() : List<String> {
    return _addedPlugins.map(\reportContent -> reportContent.asString())
  }

  property get AddedTypeLists() : List<String> {
    return _addedTypeLists.map(\reportContent -> reportContent.asString())
  }

  property get AddedLookupTables() : List<String> {
    return _addedLookupTables.map(\reportContent -> reportContent.asString())
  }

  property get ModifiedLookupTables() : List<String> {
    return _modifiedLookupTables.map(\reportContent -> reportContent.asString())
  }

  function clearContent() {
    _addedArtifactsProductModel.clear()
    _removedArtifactsProductModel.clear()
    _addedGosuClasses.clear()
    _removedGosuClasses.clear()
    _addedPCFs.clear()
    _removedPCFs.clear()
    _addedSystemTables.clear()
    _removedSystemTables.clear()
    _modifiedSystemTables.clear()
    _addedBureauCodes.clear()
    _removedBureauCodes.clear()
    _modifiedBureauCodes.clear()
    _addedTypeLists.clear()
    _addedLookupTables.clear()
    _modifiedLookupTables.clear()
    _addedConfigurations.clear()
    _removedConfigurations.clear()
    _modifiedConfigurations.clear()
    _addedXSDs.clear()
    _modifiedXSDs.clear()
    _addedPlugins.clear()
    _customizationDetectedManualMergeGosu.clear()
    _customizationDetectedAutoMergeGosu.clear()
    _potentialCustomizationDetectedSysTable.clear()
  }
}