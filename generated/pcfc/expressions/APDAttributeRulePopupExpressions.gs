package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDAttributeRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDAttributeRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rule :  APDAttributeRule, attribute :  APDAttribute, ruleType :  APDRuleType, openForEdit :  boolean) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 12, column 67
    function afterEnter_73 () : void {
      if (rule == null) {rule = attribute.createAndAddRule(ruleType)}
    }
    
    // 'beforeCommit' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 12, column 67
    function beforeCommit_74 (pickedValue :  java.lang.Object) : void {
      rule.removeIfUnnecessary()
    }
    
    // 'canEdit' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 12, column 67
    function canEdit_75 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDAttributeRulePopup.pcf: line 116, column 76
    function def_onEnter_71 (def :  pcf.APDRuleDV) : void {
      def.onEnter(rule)
    }
    
    // 'def' attribute on PanelRef at APDAttributeRulePopup.pcf: line 116, column 76
    function def_refreshVariables_72 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(rule)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDAttributeRulePopup.pcf: line 55, column 111
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultBitValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=DefaultDateValue_Input) at APDAttributeRulePopup.pcf: line 63, column 64
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultDateValue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=DefaultStringValue_Input) at APDAttributeRulePopup.pcf: line 71, column 111
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultStringValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DefaultIntegerValue_Input) at APDAttributeRulePopup.pcf: line 81, column 67
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultIntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'value' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultCodeValue = (__VALUE_TO_SET as APDDropdownEntry)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultExistence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 47, column 113
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultDecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // EditButtons at APDAttributeRulePopup.pcf: line 29, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 47, column 113
    function label_7 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getDefaultValueLabel(rule)
    }
    
    // 'title' attribute on Popup (id=APDAttributeRulePopup) at APDAttributeRulePopup.pcf: line 12, column 67
    static function title_76 (attribute :  APDAttribute, openForEdit :  boolean, rule :  APDAttributeRule, ruleType :  APDRuleType) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(rule)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function valueRange_51 () : java.lang.Object {
      return attribute.CodesToUse
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function valueRange_62 () : java.lang.Object {
      return APDDataExistenceType.TF_ATTRIBUTEEXISTENCE.TypeKeys
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 47, column 113
    function valueRoot_10 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDAttributeRulePopup.pcf: line 37, column 51
    function valueRoot_3 () : java.lang.Object {
      return attribute
    }
    
    // 'value' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDAttributeRulePopup.pcf: line 55, column 111
    function value_16 () : java.lang.Boolean {
      return rule.DefaultBitValue
    }
    
    // 'value' attribute on TextInput (id=attributeLabel_Input) at APDAttributeRulePopup.pcf: line 37, column 51
    function value_2 () : java.lang.String {
      return attribute.Label
    }
    
    // 'value' attribute on DateInput (id=DefaultDateValue_Input) at APDAttributeRulePopup.pcf: line 63, column 64
    function value_24 () : java.util.Date {
      return rule.DefaultDateValue
    }
    
    // 'value' attribute on TextInput (id=DefaultStringValue_Input) at APDAttributeRulePopup.pcf: line 71, column 111
    function value_32 () : java.lang.String {
      return rule.DefaultStringValue
    }
    
    // 'value' attribute on TextInput (id=DefaultIntegerValue_Input) at APDAttributeRulePopup.pcf: line 81, column 67
    function value_40 () : Integer {
      return rule.DefaultIntegerValue
    }
    
    // 'value' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function value_48 () : APDDropdownEntry {
      return rule.DefaultCodeValue
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function value_59 () : APDDataExistenceType {
      return rule.DefaultExistence
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDAttributeRulePopup.pcf: line 111, column 84
    function value_68 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(rule)
    }
    
    // 'value' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 47, column 113
    function value_8 () : java.math.BigDecimal {
      return rule.DefaultDecimalValue
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function verifyValueRangeIsAllowedType_52 ($$arg :  APDDropdownEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function verifyValueRangeIsAllowedType_52 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function verifyValueRangeIsAllowedType_63 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function verifyValueRangeIsAllowedType_63 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function verifyValueRange_53 () : void {
      var __valueRangeArg = attribute.CodesToUse
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDAttributeRulePopup.pcf: line 104, column 48
    function verifyValueRange_64 () : void {
      var __valueRangeArg = APDDataExistenceType.TF_ATTRIBUTEEXISTENCE.TypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_63(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=attributeLabel_Input) at APDAttributeRulePopup.pcf: line 37, column 51
    function visible_1 () : java.lang.Boolean {
      return attribute.Label.HasContent
    }
    
    // 'visible' attribute on BooleanDropdownInput (id=DefaultBitValue_Input) at APDAttributeRulePopup.pcf: line 55, column 111
    function visible_14 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BOOLEAN and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on DateInput (id=DefaultDateValue_Input) at APDAttributeRulePopup.pcf: line 63, column 64
    function visible_22 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_DATE
    }
    
    // 'visible' attribute on TextInput (id=DefaultStringValue_Input) at APDAttributeRulePopup.pcf: line 71, column 111
    function visible_30 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_VARCHAR and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on TextInput (id=DefaultIntegerValue_Input) at APDAttributeRulePopup.pcf: line 81, column 67
    function visible_38 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_INTEGER
    }
    
    // 'visible' attribute on RangeInput (id=DefaultCodeValue_Input) at APDAttributeRulePopup.pcf: line 91, column 111
    function visible_46 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_TYPEKEY and rule.RuleType == APDRuleType.TC_DEFAULT
    }
    
    // 'visible' attribute on InputSet at APDAttributeRulePopup.pcf: line 39, column 141
    function visible_57 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_DEFAULT or rule.RuleType == APDRuleType.TC_MIN or rule.RuleType == APDRuleType.TC_MAX
    }
    
    // 'visible' attribute on TextInput (id=DefaultDecimalValue_Input) at APDAttributeRulePopup.pcf: line 47, column 113
    function visible_6 () : java.lang.Boolean {
      return attribute.Type == APDFieldType.TC_BIGDECIMAL or attribute.Type == APDFieldType.TC_MONEY
    }
    
    // 'visible' attribute on InputSet at APDAttributeRulePopup.pcf: line 96, column 65
    function visible_67 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    // 'visible' attribute on PanelRef at APDAttributeRulePopup.pcf: line 116, column 76
    function visible_70 () : java.lang.Boolean {
      return rule.DefaultExistence != APDDataExistenceType.TC_HIDDEN
    }
    
    override property get CurrentLocation () : pcf.APDAttributeRulePopup {
      return super.CurrentLocation as pcf.APDAttributeRulePopup
    }
    
    property get attribute () : APDAttribute {
      return getVariableValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setVariableValue("attribute", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get rule () : APDAttributeRule {
      return getVariableValue("rule", 0) as APDAttributeRule
    }
    
    property set rule ($arg :  APDAttributeRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getVariableValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    
  }
  
  
}