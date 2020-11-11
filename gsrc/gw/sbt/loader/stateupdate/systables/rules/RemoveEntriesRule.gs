package gw.sbt.loader.stateupdate.systables.rules

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.loader.modifier.SystemTableModifier
uses gw.sbt.loader.stateupdate.systables.SystemTableRuleBook
uses gw.sbt.util.LoaderUtil

/**
 * Rule condition:
 * one more or rows in the current system table associated by same keys do not appear in the new
 * system table. This means these rows are removed by the new system table.
 * <p>
 * Merging actions:
 * 1). Expire any state-specific row with adoption date as expiry date.
 * 2). Copy countrywide rows to be state-specific, and expire it with adoption date as expiry date.
 * <p>
 */
class RemoveEntriesRule implements SystemTableMergingRule {

  override function matches(newRows : List<SystemTableRow>,
                            currentRows : List<SystemTableRow>) : boolean {
    return currentRows.HasElements and newRows.Empty // rows have been removed in the new.
  }

  override function apply(newRows : List<SystemTableRow>,
                          currentRows : List<SystemTableRow>,
                          currentSystemTable : SystemTable,
                          valueColumnName : String,
                          adoptionDate: Date,
                          jurisdiction: String) : SystemTableRuleBook.REQUIRED_REPORT_ENUM {
    var auditRequired = currentRows.hasMatch(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction))
    SystemTableModifier.expireSystemTableRows(currentSystemTable, currentRows, adoptionDate, jurisdiction)
    if (auditRequired) {
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_AUDIT_REPORT_REQUIRED
    } else {
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_REPORT_REQUIRED
    }
  }

}