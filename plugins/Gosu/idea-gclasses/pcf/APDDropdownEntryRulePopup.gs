package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropdownEntryRulePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (rule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {rule, dropdownEntry, ruleType}, 0)
  }
  
  static function createDestination (rule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {rule, dropdownEntry, ruleType, startInEditMode}, 1)
  }
  
  static function push (rule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {rule, dropdownEntry, ruleType}, 0).push()
  }
  
  static function push (rule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropdownEntryRulePopup, {rule, dropdownEntry, ruleType, startInEditMode}, 1).push()
  }
  
  
}