package gw.sbt.loader.stateupdate.systables.rules

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.loader.modifier.SystemTableModifier
uses gw.sbt.loader.stateupdate.systables.SystemTableRuleBook
uses gw.sbt.util.LoaderUtil

/**
 * Rule condition:
 * Rows in the new system table associated by same keys do not appear in the current
 * system table. This means these rows are newly introduced by the new system table.
 * <p>
 * Merging actions:
 * 1). Copy over any new CW row as a state-specific one with adoption date as effective date.
 * 2). Copy over any new state-specific row with adoption date as effective date.
 * <p>
 */
class NewEntriesRule implements SystemTableMergingRule {

  override function matches(newRows : List<SystemTableRow>,
                            currentRows : List<SystemTableRow>) : boolean {
    return currentRows.Empty and newRows.HasElements // rows have been added in the new
  }

  override function apply(newRows : List<SystemTableRow>,
                          currentRows : List<SystemTableRow>,
                          currentSystemTable : SystemTable,
                          valueColumnName : String,
                          adoptionDate: Date,
                          jurisdiction: String) : SystemTableRuleBook.REQUIRED_REPORT_ENUM {
    var auditRequired = newRows.hasMatch(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction))
    SystemTableModifier.adoptSystemTableRows(currentSystemTable, newRows, adoptionDate, jurisdiction)
    if (auditRequired) {
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_AUDIT_REPORT_REQUIRED
    } else {
      return SystemTableRuleBook.REQUIRED_REPORT_ENUM.LOAD_REPORT_REQUIRED
    }
  }
}