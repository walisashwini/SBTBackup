package gw.sbt.loader.stateupdate.systables.rules

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.loader.modifier.SystemTableModifier
uses gw.sbt.loader.stateupdate.systables.SystemTableRuleBook
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory

/**
 * Rule condition:
 * There are different rows in current and new system table.
 * (ie, some rows added, some rows removed, some rows have different values)
 * <p>
 * Merging actions:
 * 1). For added rows:
 *    add into current system table, set as jurisdiction version and effective date as AdoptionDate
 * 2). For removed rows:
 *    expire any state-specific row with adoption date as expiry date.
 *    copy countrywide rows to be state-specific, and expire it with adoption date as expiry date.
 * 3). For rows exist in new and current:
 *    do nothing
 * <p>
 */
class UpdateEntriesRule implements SystemTableMergingRule {

  override function matches(newRows : List<SystemTableRow>,
                            currentRows : List<SystemTableRow>) : boolean {
    return newRows.HasElements and currentRows.HasElements
  }

  override function apply(newRows : List<SystemTableRow>,
                          currentRows : List<SystemTableRow>,
                          currentSystemTable : SystemTable,
                          valueColumnName : String,
                          adoptionDate: Date,
                          jurisdiction: String) : SystemTableRuleBook.REQUIRED_REPORT_ENUM {
    //Rows only in Current - Removed
    var rowsToBeExpired : List<SystemTableRow> = {}
    //Rows only in New - Added
    var rowsToBeAdded : List<SystemTableRow> = {}

    if (valueColumnName == SystemTableKeyValueId.VALUE_COLUMN_NAME
        or valueColumnName == SystemTableKeyValueId.DBTERRITORY_VALUE_COLUMN_NAME) {  // Normal Value Column ('Value', or 'Code' for DBTerritory)
      rowsToBeExpired = currentRows.where(\rowInCurrent -> not newRows.hasMatch(\rowInNew -> (
          rowInCurrent.getValue(valueColumnName) == rowInNew.getValue(valueColumnName))))

      rowsToBeAdded = getRowsToBeAdded(
          jurisdiction,
          newRows,
          \rowInNew -> currentRows.where(\row -> (row.getValue(valueColumnName) == rowInNew.getValue(valueColumnName)
          )))
    } else if (valueColumnName == SystemTableKeyValueId.MIN_MAX_VALUE_COLUMN_NAME) { // Multiple Values (MinValue/MaxValue)
      rowsToBeExpired = currentRows.where(\rowInCurrent -> not newRows.hasMatch(\rowInNew -> (
          rowInCurrent.getValue(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME) == rowInNew.getValue(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME)
              and rowInCurrent.getValue(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME) == rowInNew.getValue(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME)
      )))

      rowsToBeAdded = getRowsToBeAdded(
          jurisdiction,
          newRows,
          \rowInNew -> currentRows.where(\row -> (
              row.getValue(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME) == rowInNew.getValue(SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME)
                  and row.getValue(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME) == rowInNew.getValue(SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME)
          )))
    } else { // should not happen!
      LoggerFactory.getLogger("PCA").error("Unexpected system table merging rule found for ${currentSystemTable.TableName}")
    }

    var auditRequired = false
    var loadRequired = false
    //1). Adopt the new rows.
    if(not rowsToBeAdded.Empty) {
      auditRequired = rowsToBeAdded.hasMatch(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction))
      SystemTableModifier.adoptSystemTableRows(currentSystemTable, rowsToBeAdded, adoptionDate, jurisdiction)
      loadRequired = true
    }
    //2). Expire the removed rows.
    if(not rowsToBeExpired.Empty) {
      auditRequired = auditRequired or rowsToBeExpired.hasMatch(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction))
      SystemTableModifier.expireSystemTableRows(currentSystemTable, rowsToBeExpired, adoptionDate, jurisdiction)
      loadRequired = true
    }

    if (auditRequired and loadRequired) {
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_AUDIT_REPORT_REQUIRED
    } else if(auditRequired){
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.AUDIT_REPORT_REQUIRED
    } else if(loadRequired){
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_REPORT_REQUIRED
    } else {
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.NOT_REQUIRED
    }
  }

  //find out the rows to be added (not in current)
  private function getRowsToBeAdded(jurisdiction : String,
                                    rowsInNew : List<SystemTableRow>,
                                    getMatchingRowsInCurrent(rowInNew : SystemTableRow) : List<SystemTableRow>) : List<SystemTableRow>{
    var rowsToBeAdded : List<SystemTableRow> = {}
    rowsInNew.each(\rowInNew -> {
      var matchingRowsInCurrent = getMatchingRowsInCurrent(rowInNew)
      //try the jurisdiction first,
      var rowInCurrent = matchingRowsInCurrent.firstWhere(\row -> row.Jurisdiction == jurisdiction)
      if (rowInCurrent == null) {
        //if not found jurisdiction row, try countrywide
        rowInCurrent = matchingRowsInCurrent.firstWhere(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction))
      }
      if (rowInCurrent == null) { // if still can't find the matched row, means this row only exists in new, should add
        rowsToBeAdded.add(rowInNew)
      }
    })
    return rowsToBeAdded
  }
}