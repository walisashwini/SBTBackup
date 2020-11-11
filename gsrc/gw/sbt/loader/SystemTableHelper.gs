package gw.sbt.loader

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.artifacts.entities.Entity
uses gw.util.Pair

class SystemTableHelper {

  public static var EFFECTIVE_DATE_COLUMN_MAP : Map<String, Pair<String, String>> = new HashMap<String, Pair<String, String>>(){
      "RefDateTypeLookup"->Pair.make("StartEffectiveDate", "EndEffectiveDate")
  }

  static property get ExcludedSystemTableFileNames() : List<String> {
    return {
        "lob_field_visibility.xml",
        "notification_configs.xml",
        "underwriting_companies.xml",
        "custom_form_inference.xml",
        "rtm_matchop_defs.xml"
    }
  }

  private static var BUREAU_CODE_KEY_NAME : Map<String, SystemTableKeyValueId> = new HashMap<String, SystemTableKeyValueId>(){
      "WC7Line/WC7ClassCode"->new SystemTableKeyValueId({"ShortDesc"}, "Code", null, null)
  }

  //return KeyColumn(s)/ValueColumn(s) for a system table.
  //Scan the system table rows:
  //   'Value', 'MinValue/MaxValue', 'Code' is assumed to be the value column - it might be empty string if no value column could not be determined
  //   all Columns minus value column and versioned columns are assumed as KeyColumns -  it might be empty list if no column found in the system table.
  static function getSystemTableKeyValueId(policyLine : String, systemTable : SystemTable, jurisdiction : String) : SystemTableKeyValueId {
    if (policyLine == "WC7Line") { // special process for WC7Line.
      var bureauCodeKey = policyLine + '/' + systemTable.TableName
      return BUREAU_CODE_KEY_NAME.get(bureauCodeKey)
    }

    var bureauCodeKeyValueId : SystemTableKeyValueId = null
    var ignoredColumns = IGNORED_COLUMNS
    //   key columns: all Columns minus value column, versioned columns and line code/name columns.
    //   value column: 'Value' or 'MinValue/MaxValue' or 'Code' for DBTerritory, or "" if can't be determined
    var valueColumn = generateValueColumn(systemTable)
    if (valueColumn != null) {
      ignoredColumns.add(valueColumn)
    }
    var keyColumns = generateKeyColumns(systemTable, ignoredColumns, jurisdiction)

    bureauCodeKeyValueId = new SystemTableKeyValueId(
        :keyColumns = keyColumns,
        :valueColumn = valueColumn,
        :effectiveDate = null,
        :expiryDate = null)
    return bureauCodeKeyValueId
  }

  // Assume 'Value' or 'MinValue/MaxValue' as ValueColumn,  it might return "" if Value column can't be determined
  // Hard-coded 'Code' for DBTerritory
  private static function generateValueColumn(systemTable : SystemTable) : String {
    if (systemTable.TableName.endsWith("DBTerritory")) {  //Using 'endsWith' because some lines (GL) are using prefix, ie. GL7DBTerritory
      return SystemTableKeyValueId.DBTERRITORY_VALUE_COLUMN_NAME
    }

    var firstRow = systemTable.AllRows?.first()
    var lastRow = systemTable.AllRows?.last()
    var allColumnNames = firstRow.ColumnNames.union(lastRow.ColumnNames)
    if (allColumnNames.contains(SystemTableKeyValueId.VALUE_COLUMN_NAME)) {
      return SystemTableKeyValueId.VALUE_COLUMN_NAME
    } else if (allColumnNames.contains(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME) or
        allColumnNames.contains(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME)) {
      return SystemTableKeyValueId.MIN_MAX_VALUE_COLUMN_NAME
    } else {//unable to determine the Value column, return ""
      return SystemTableKeyValueId.NO_VALUE_COLUMN
    }
  }

  private static function generateKeyColumns(systemTable : SystemTable, ignoredColumns : List<String>, jurisdiction : String) : List<String> {
    //get the column names from first and last jurisdiction/countrywide rows (to minimize the risk the first or last rows do not have all columns)
    var firstRow = systemTable.AllRows?.firstWhere(\row -> row.Jurisdiction == jurisdiction)
    if (firstRow == null) {
      firstRow = systemTable.AllRows?.first()
      if (firstRow == null) {
        return {}
      }
    }
    var lastRow = systemTable.AllRows?.lastWhere(\row -> row.Jurisdiction == jurisdiction)
    if (lastRow == null) {
      lastRow = systemTable.AllRows?.last()
    }
    var allColumnNames = firstRow.ColumnNames.union(lastRow.ColumnNames)
    allColumnNames.removeAll(ignoredColumns)
    return allColumnNames.toList()
  }

  private static property get IGNORED_COLUMNS() : List<String> {
    //Versioned related columns
    //Value related columns
    //Line Code/Name columns
    return {
        "EffectiveDate",
        "ExpirationDate",
        "Jurisdiction",
        "State",
        "Value",
        "MinValue",
        "MaxValue",
        "StartEffectiveDate",//only for reference_date_types_by_state.xml
        "EndEffectiveDate"   //only for reference_date_types_by_state.xml
    }
  }

  public static property get IGNORED_PRESENTER_COLUMNS() : List<String> {
    return {
        "PolicyLinePatternCode"
    }
  }

  //Get the entity from .eti.
  static function retrieveBackingEntity(entityName : String, currentContents: CurrentConfigContents, updateContents: SBTUpdateContents) : Entity {
    var systemTableBackingEntity = currentContents.getEntity(entityName)
    if (systemTableBackingEntity == null) {
      systemTableBackingEntity = updateContents.getEntity(entityName)
    }
    return systemTableBackingEntity
  }

}