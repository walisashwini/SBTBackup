package gw.sbt.loader.stateupdate.systables

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.loader.stateupdate.systables.rules.NewEntriesRule
uses gw.sbt.loader.stateupdate.systables.rules.RemoveEntriesRule
uses gw.sbt.loader.stateupdate.systables.rules.SystemTableMergingRule
uses gw.sbt.loader.stateupdate.systables.rules.UpdateEntriesRule

class SystemTableRuleBook {
  private static var _rules : List<SystemTableMergingRule> = {
      new NewEntriesRule(),
      new UpdateEntriesRule(),
      new RemoveEntriesRule()
  }

  public enum REQUIRED_REPORT_ENUM {
    LOAD_REPORT_REQUIRED,
    AUDIT_REPORT_REQUIRED,
    LOAD_AUDIT_REPORT_REQUIRED,
    NOT_REQUIRED
  }

  private var _systemTable: String
  private var _adoptionDate : Date
  private var _jurisdiction : String

  public construct(systemTable: String,
                   adoptionDate : Date,
                   jurisdiction : String) {
    _systemTable = systemTable
    _adoptionDate = adoptionDate
    _jurisdiction = jurisdiction
  }

  function applyRules(newRows : List<SystemTableRow>,
                      currentRows : List<SystemTableRow>,
                      currentSystemTable : SystemTable,
                      valueColumnName : String) : REQUIRED_REPORT_ENUM {
    // Apply any applicable merging rule
    // There shoud have one applicable rule, otherwise, either some bugs in the rule matching logic or this business case does not be handled.
    var matchedRule = _rules.firstWhere(\mergingRule -> mergingRule.matches(newRows, currentRows))
    if (matchedRule != null) {
      return matchedRule.apply(newRows, currentRows, currentSystemTable, valueColumnName, _adoptionDate, _jurisdiction)
    } else {
      throw "Unable to find a system table merging rule for ${_systemTable}"
    }
  }
}