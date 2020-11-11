package gw.sbt.loader.stateupdate.systables.rules

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.loader.stateupdate.systables.SystemTableRuleBook

interface SystemTableMergingRule {
  /**
   * New and current rows should already have matching key columns.
   *
   * @param newRows
   * @param currentRows
   */
  function matches(newRows : List<SystemTableRow>,
                   currentRows : List<SystemTableRow>) : boolean

  /**
   * New and current rows should already have matching key columns.
   * @param newRows
   * @param currentRows
   * @param currentSystemTable
   * @param valueColumnName
   * @param adoptionDate
   * @param jurisdiction
   */
  function apply(newRows : List<SystemTableRow>,
                 currentRows : List<SystemTableRow>,
                 currentSystemTable : SystemTable,
                 valueColumnName : String,
                 adoptionDate: Date,
                 jurisdiction: String) : SystemTableRuleBook.REQUIRED_REPORT_ENUM
}