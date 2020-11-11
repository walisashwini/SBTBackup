package gw.sbt.loader.stateadd

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.SystemTableHelper
uses gw.sbt.loader.io.SystemTableAddition
uses gw.sbt.loader.modifier.SystemTableModifier
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.model.UpdateDecision
uses gw.sbt.util.LoaderUtil

class SystemTablesLoadGenerator {
  var _currentContents : CurrentConfigContents
  var _messageReporter : MessageReporter

  construct(config : CurrentConfigContents, messageReporter : MessageReporter) {
    _messageReporter = messageReporter
    _currentContents = config
  }

  function generateLoad(systemTable : SystemTable, adoptionDate : Date, updateContents : SBTUpdateContents,
                        jurisdiction : String, policyLine : String, isBureauCode : boolean) : Load {
    var load = new Load<SystemTable>(systemTable)

    var systemTableFileName = systemTable.FileNameWithExtension

    // jurisdiction and countrywide rows
    var allApplicableRowsInUpdate = getAllApplicableSystemRows(systemTable, jurisdiction, policyLine, adoptionDate)

    if (allApplicableRowsInUpdate.Empty) {
      return load
    }

    var updateRequired = false

    var jurisdictionRowsInUpdate = allApplicableRowsInUpdate.where(\row -> not LoaderUtil.isJurisdictionCW(row.Jurisdiction))

    var currentSysTable = _currentContents.getSystemTable(systemTableFileName)
    if (currentSysTable == null) { // it is a new system table, need to create its registry in systables.xml
      currentSysTable = systemTable.copy()
      currentSysTable.removeAllRows()
      var sysTableRegistry = new SystemTableRegistryLoaderGenerator(_currentContents)
      sysTableRegistry.generateLoad(updateContents, load, systemTableFileName)
    }

    var allApplicableRowsInCurrent = getAllApplicableSystemRows(currentSysTable, jurisdiction, policyLine, adoptionDate)

    var configFile = ConfigurationFile.systable(systemTableFileName)

    // process countrywide rows difference (for multi-countrywide state-add case)
    // add new countrywide rows into current system table as jurisdiction versions.
    // expired removed countrywide rows into current system table as jurisdiction versions.
    var rowsMapInUpdate = getComparisonHashKeyMap(allApplicableRowsInUpdate)
    var rowsMapInCurrent = getComparisonHashKeyMap(allApplicableRowsInCurrent)
    var potentialCustomizationDetected = false

    var rowsToBeExpired : List<SystemTableRow> = {}
    var rowsToBeAdded : List<SystemTableRow> = {}

    // get all keys in update;
    var allKeys = rowsMapInCurrent.Keys.union(rowsMapInUpdate.Keys)

    allKeys.each(\key -> {
      if (rowsMapInCurrent.containsKey(key) and not rowsMapInUpdate.containsKey(key)) {
        var row = rowsMapInCurrent.get(key)
        //USPCA-950 we are nolonger expiring the rows but still leave the code in place for potential future use
//        rowsToBeExpired.add(rowsMapInCurrent.get(key))
        _messageReporter.ModificationReporter.reportPotentialCustomizationDetectedSysTable(row.PublicId, systemTableFileName)
        potentialCustomizationDetected = true;
      } else if (not rowsMapInCurrent.containsKey(key) and rowsMapInUpdate.containsKey(key)) { // only in new, rowsToBeAdded
        rowsToBeAdded.add(rowsMapInUpdate.get(key))
      }
    })

    //Backing entity is needed when adopting or expiring system table rows (to determine the 'Jurisdiction'/'State' column name)
    if (currentSysTable.TableName == null) {
      currentSysTable.TableName = systemTable.TableName
    }
    currentSysTable.BackingEntity = SystemTableHelper.retrieveBackingEntity(currentSysTable.TableName, _currentContents, updateContents)

    updateRequired = jurisdictionRowsInUpdate.HasElements or rowsToBeExpired.HasElements or rowsToBeAdded.HasElements


    // this check needs to be performed before the expireSystemTableRows () and adoptSystemTableRows () calls, as the rowsToBeAdded
    // and rowsToBeExpired lists will be modified
    final var allCWRowsAdopted = rowsToBeAdded.where(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction))
    SystemTableModifier.expireSystemTableRows(currentSysTable, rowsToBeExpired, adoptionDate, jurisdiction)
    SystemTableModifier.adoptSystemTableRows(currentSysTable, rowsToBeAdded, adoptionDate, jurisdiction)

    if (rowsToBeAdded.HasElements or rowsToBeExpired.HasElements) {

      var systemTableKeyValueId = SystemTableHelper.getSystemTableKeyValueId(policyLine, currentSysTable, jurisdiction)

      var isValueColumnExist = systemTableKeyValueId.ValueColumn != SystemTableKeyValueId.NO_VALUE_COLUMN

      // create the report title
      var auditReportTitles = createAuditReportTitles(systemTableKeyValueId, isValueColumnExist)

      auditReportAdoptedRows(allCWRowsAdopted, systemTableKeyValueId, isValueColumnExist, systemTable.TableName,
          auditReportTitles, isBureauCode)

      auditReportExpiredRows(rowsToBeExpired, systemTableKeyValueId, isValueColumnExist, systemTable.TableName,
          auditReportTitles)
    }

    if (updateRequired) {
      load.add(new SystemTableAddition(configFile, currentSysTable))
    }

    return load
  }

  // if entire system table has been removed in New package, then we must expire all rows if WC Indepedent
  function generateLoadForDeletedSystemTables(systemTable : SystemTable, adoptionDate : Date, updateContents : SBTUpdateContents,
                                              jurisdiction : String, policyLine : String) : Load {
    var load = new Load<SystemTable>(systemTable)

    var systemTableFileName = systemTable.FileNameWithExtension

    var allApplicableRowsInCurrent = getAllApplicableSystemRows(systemTable, jurisdiction, policyLine, adoptionDate)

    if (allApplicableRowsInCurrent.Empty) {
      return load
    }

    systemTable.BackingEntity = SystemTableHelper.retrieveBackingEntity(systemTable.TableName, _currentContents, updateContents)
    SystemTableModifier.expireSystemTableRows(systemTable, allApplicableRowsInCurrent, adoptionDate, jurisdiction)

    var systemTableKeyValueId = SystemTableHelper.getSystemTableKeyValueId(policyLine, systemTable, jurisdiction)
    var isValueColumnExist = systemTableKeyValueId.ValueColumn != SystemTableKeyValueId.NO_VALUE_COLUMN

    // create the report title
    var auditReportTitles = createAuditReportTitles(systemTableKeyValueId, isValueColumnExist)

    auditReportExpiredRows(allApplicableRowsInCurrent, systemTableKeyValueId, isValueColumnExist, systemTable.TableName,
        auditReportTitles)

    _messageReporter.ModificationReporter.reportExpiredSystemTable(systemTableFileName)

    load.add(new SystemTableAddition(ConfigurationFile.systable(systemTableFileName), systemTable))

    return load
  }

  private function createAuditReportTitles(systemTableKeyValueId : SystemTableKeyValueId, valueColumExists : boolean) : List<String> {
    var auditReportTitles : List<String> = {}

    if (systemTableKeyValueId.KeyColumns != null and systemTableKeyValueId.KeyColumns.HasElements) {
      // In non-Mercury version of WC, there may be tables that doesn't have any key columns
      // In such cases, we won't be able to report the key columns
      auditReportTitles.addAll(systemTableKeyValueId.KeyColumns)
    }

    if (valueColumExists) {
      var currentTitle = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.BureauCode.CurrentValue", systemTableKeyValueId.ValueColumn)
      auditReportTitles.addAll({currentTitle, "New Update", DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.DecisionLabel")})
    } else if (auditReportTitles.HasElements) {
      // Only append the decision label if there is already key columns in the titles
      auditReportTitles.addAll({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.DecisionLabel")})
    }

    return auditReportTitles
  }

  private function auditReportAdoptedRows(adoptedRows : List<SystemTableRow>, systemTableKeyValueId : SystemTableKeyValueId,
                                          valueColumnExists : boolean, systableName : String, auditReportTitles : List<String>,
                                          isBureauCode : boolean) {
    adoptedRows.each(\row -> {
      var keyColumnValues : List<String> = {}
      var auditReportContents : List<String> = {}

      if (systemTableKeyValueId.KeyColumns != null) {
        systemTableKeyValueId.KeyColumns.each(\key -> keyColumnValues.add(row.getValue(key)))
      }
      auditReportContents.addAll(keyColumnValues)

      var valueStr = getDisplayValue(row, systemTableKeyValueId)
      if (valueColumnExists) {
        auditReportContents.addAll({"-", valueStr})
      }

      _messageReporter.AuditReporter.reportSystemTable(systableName, auditReportTitles,
          auditReportContents, UpdateDecision.ACCEPT, UpdateDecision.ACCEPT,
          isBureauCode ? MessageReporter.ReportMessageSourceType.BUREAU_CODE : MessageReporter.ReportMessageSourceType.SYSTEM_TABLE)
    })
  }

  private function auditReportExpiredRows(expiredRows : List<SystemTableRow>, systemTableKeyValueId : SystemTableKeyValueId,
                                          valueColumnExists : boolean, systableName : String, auditReportTitles : List<String>) {
    expiredRows.each(\row -> {
      var keyColumnValues : List<String> = {}
      var auditReportContents : List<String> = {}

      if (systemTableKeyValueId.KeyColumns != null) {
        systemTableKeyValueId.KeyColumns.each(\key -> keyColumnValues.add(row.getValue(key)))
      }
      auditReportContents.addAll(keyColumnValues)

      var valueStr = getDisplayValue(row, systemTableKeyValueId)
      if (valueColumnExists) {
        auditReportContents.addAll({valueStr, "-"})
      }

      _messageReporter.AuditReporter.reportSystemTable(systableName, auditReportTitles,
          auditReportContents, UpdateDecision.ACCEPT, UpdateDecision.ACCEPT, MessageReporter.ReportMessageSourceType.SYSTEM_TABLE)
    })
  }

  private function getDisplayValue(row : SystemTableRow, systemTableKeyValueId : SystemTableKeyValueId) : String {
    var valueStr = ""
    switch (systemTableKeyValueId.ValueColumn) {
      case SystemTableKeyValueId.NO_VALUE_COLUMN:
        break
      case SystemTableKeyValueId.MIN_MAX_VALUE_COLUMN_NAME:
        valueStr = row.getValue(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME) + " - " + row.getValue(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME)
        break
      default:
        valueStr = row.getValue(systemTableKeyValueId.ValueColumn)
        break
    }

    return valueStr
  }


  private function getComparisonHashKeyMap(rows : List<SystemTableRow>) : Map<String, SystemTableRow> {
    var comparisonKeyMap = new HashMap<String, SystemTableRow>()
    rows.each(\row -> {
      var comparisonKey = new StringBuilder()
      var orderedColumnNames = row.ColumnNames.order()
      orderedColumnNames.each(\columnName -> {
        var columnText = row.Xml.getChild(columnName).$Text
        if ((not VERSIONING_COLUMNS.contains(columnName)) and (not columnText.Empty)) {
          comparisonKey.append(columnName).append(columnText)
        }
      })
      comparisonKeyMap.put(comparisonKey.toString(), row)
    })
    return comparisonKeyMap
  }

  //all jurisdiction rows and 'effective' countrywide rows
  private function getAllApplicableSystemRows(systemTable : SystemTable, jurisdiction : String, policyLine : String, adoptionDate : Date) : List<SystemTableRow> {
    var allApplicableRowsInUpdate = systemTable.getRows(jurisdiction, policyLine, true)?:{} as List<SystemTableRow>
    allApplicableRowsInUpdate = allApplicableRowsInUpdate.where(\row ->
        row.Jurisdiction == jurisdiction  // rows for this jurisdiction
            or (LoaderUtil.isJurisdictionCW(row.Jurisdiction) and LoaderUtil.isDateWithinRange(adoptionDate, row.EffectiveDate, row.ExpirationDate)))  // countrywide rows with effective date range.
    return allApplicableRowsInUpdate
  }

  private static property get VERSIONING_COLUMNS() : List<String> {
    //Versioned related columns
    return {
        "EffectiveDate",
        "Jurisdiction",
        "State"
    }
  }

}