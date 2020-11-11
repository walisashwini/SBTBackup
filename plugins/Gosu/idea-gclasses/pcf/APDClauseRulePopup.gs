package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseRulePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (rule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, riskCoverable :  APDRiskCoverable, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {rule, clause, ruleType, riskCoverable, openForEdit}, 1)
  }
  
  static function createDestination (rule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {rule, clause, ruleType, openForEdit}, 0)
  }
  
  static function push (rule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, riskCoverable :  APDRiskCoverable, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {rule, clause, ruleType, riskCoverable, openForEdit}, 1).push()
  }
  
  static function push (rule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseRulePopup, {rule, clause, ruleType, openForEdit}, 0).push()
  }
  
  
}