package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropdownEntryRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropdownEntryRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType) : int {
      return 0
    }
    
    static function __constructorIndex (rule :  APDDropdownEntryRule, dropdownEntry :  APDDropdownEntry, ruleType :  APDRuleType, startInEditMode :  boolean) : int {
      return 1
    }
    
    // 'afterEnter' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 11, column 67
    function afterEnter_20 () : void {
      if (rule == null) {rule = dropdownEntry.createAndAddRule(ruleType)}
    }
    
    // 'def' attribute on PanelRef at APDDropdownEntryRulePopup.pcf: line 59, column 32
    function def_onEnter_18 (def :  pcf.APDRuleDV) : void {
      def.onEnter(rule)
    }
    
    // 'def' attribute on PanelRef at APDDropdownEntryRulePopup.pcf: line 59, column 32
    function def_refreshVariables_19 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(rule)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultExistence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // EditButtons at APDDropdownEntryRulePopup.pcf: line 30, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function label_6 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getDefaultValueLabel(rule)
    }
    
    // 'startInEditMode' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 11, column 67
    function startInEditMode_21 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'title' attribute on Popup (id=APDDropdownEntryRulePopup) at APDDropdownEntryRulePopup.pcf: line 11, column 67
    static function title_22 (dropdownEntry :  APDDropdownEntry, rule :  APDDropdownEntryRule, ruleType :  APDRuleType, startInEditMode :  boolean) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(rule)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function valueRange_10 () : java.lang.Object {
      return APDDataExistenceType.TF_DROPDOWNENTRYEXISTENCE.TypeKeys
    }
    
    // 'value' attribute on TextInput (id=dropdownEntryLabel_Input) at APDDropdownEntryRulePopup.pcf: line 38, column 54
    function valueRoot_3 () : java.lang.Object {
      return dropdownEntry
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function valueRoot_9 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDDropdownEntryRulePopup.pcf: line 54, column 86
    function value_15 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(rule)
    }
    
    // 'value' attribute on TextInput (id=dropdownEntryLabel_Input) at APDDropdownEntryRulePopup.pcf: line 38, column 54
    function value_2 () : java.lang.String {
      return dropdownEntry.Name
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function value_7 () : APDDataExistenceType {
      return rule.DefaultExistence
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function verifyValueRangeIsAllowedType_11 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDDropdownEntryRulePopup.pcf: line 48, column 48
    function verifyValueRange_12 () : void {
      var __valueRangeArg = APDDataExistenceType.TF_DROPDOWNENTRYEXISTENCE.TypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=dropdownEntryLabel_Input) at APDDropdownEntryRulePopup.pcf: line 38, column 54
    function visible_1 () : java.lang.Boolean {
      return dropdownEntry.Name.HasContent
    }
    
    // 'visible' attribute on InputSet at APDDropdownEntryRulePopup.pcf: line 40, column 65
    function visible_17 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    override property get CurrentLocation () : pcf.APDDropdownEntryRulePopup {
      return super.CurrentLocation as pcf.APDDropdownEntryRulePopup
    }
    
    property get dropdownEntry () : APDDropdownEntry {
      return getVariableValue("dropdownEntry", 0) as APDDropdownEntry
    }
    
    property set dropdownEntry ($arg :  APDDropdownEntry) {
      setVariableValue("dropdownEntry", 0, $arg)
    }
    
    property get rule () : APDDropdownEntryRule {
      return getVariableValue("rule", 0) as APDDropdownEntryRule
    }
    
    property set rule ($arg :  APDDropdownEntryRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getVariableValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    
  }
  
  
}