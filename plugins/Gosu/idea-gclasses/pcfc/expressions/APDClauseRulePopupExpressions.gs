package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseRulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseRulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseRulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, riskCoverable :  APDRiskCoverable, openForEdit :  boolean) : int {
      return 1
    }
    
    static function __constructorIndex (rule :  APDClauseRule, clause :  APDClause, ruleType :  APDRuleType, openForEdit :  boolean) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 12, column 67
    function afterEnter_20 () : void {
      if (rule == null) {rule = clause.createAndAddRule(ruleType)}
    }
    
    // 'beforeCommit' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 12, column 67
    function beforeCommit_21 (pickedValue :  java.lang.Object) : void {
      rule.removeIfUnnecessary(); if (riskCoverable != null) riskCoverable.syncClauseAvailability(clause)
    }
    
    // 'canEdit' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 12, column 67
    function canEdit_22 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef at APDClauseRulePopup.pcf: line 63, column 32
    function def_onEnter_18 (def :  pcf.APDRuleDV) : void {
      def.onEnter(rule)
    }
    
    // 'def' attribute on PanelRef at APDClauseRulePopup.pcf: line 63, column 32
    function def_refreshVariables_19 (def :  pcf.APDRuleDV) : void {
      def.refreshVariables(rule)
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      rule.DefaultExistence = (__VALUE_TO_SET as APDDataExistenceType)
    }
    
    // EditButtons at APDClauseRulePopup.pcf: line 34, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function label_6 () : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getDefaultValueLabel(rule)
    }
    
    // 'title' attribute on Popup (id=APDClauseRulePopup) at APDClauseRulePopup.pcf: line 12, column 67
    static function title_23 (clause :  APDClause, openForEdit :  boolean, riskCoverable :  APDRiskCoverable, rule :  APDClauseRule, ruleType :  APDRuleType) : java.lang.Object {
      return gw.apd.web.APDRulePopupHelper.getRulePopupTitle(rule)
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function valueRange_10 () : java.lang.Object {
      return APDDataExistenceType.TF_CLAUSEEXISTENCE.TypeKeys
    }
    
    // 'value' attribute on TextInput (id=clauseLabel_Input) at APDClauseRulePopup.pcf: line 42, column 47
    function valueRoot_3 () : java.lang.Object {
      return clause
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function valueRoot_9 () : java.lang.Object {
      return rule
    }
    
    // 'value' attribute on TextInput (id=RuleDescText_Input) at APDClauseRulePopup.pcf: line 58, column 85
    function value_15 () : java.lang.String {
      return gw.apd.web.APDRulePopupHelper.getRuleDisplayDescription(rule)
    }
    
    // 'value' attribute on TextInput (id=clauseLabel_Input) at APDClauseRulePopup.pcf: line 42, column 47
    function value_2 () : java.lang.String {
      return clause.Name
    }
    
    // 'value' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function value_7 () : APDDataExistenceType {
      return rule.DefaultExistence
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function verifyValueRangeIsAllowedType_11 ($$arg :  APDDataExistenceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DefaultExistence_Input) at APDClauseRulePopup.pcf: line 52, column 48
    function verifyValueRange_12 () : void {
      var __valueRangeArg = APDDataExistenceType.TF_CLAUSEEXISTENCE.TypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=clauseLabel_Input) at APDClauseRulePopup.pcf: line 42, column 47
    function visible_1 () : java.lang.Boolean {
      return clause.Name.HasContent
    }
    
    // 'visible' attribute on InputSet at APDClauseRulePopup.pcf: line 44, column 65
    function visible_17 () : java.lang.Boolean {
      return rule.RuleType == APDRuleType.TC_EXISTENCE
    }
    
    override property get CurrentLocation () : pcf.APDClauseRulePopup {
      return super.CurrentLocation as pcf.APDClauseRulePopup
    }
    
    property get clause () : APDClause {
      return getVariableValue("clause", 0) as APDClause
    }
    
    property set clause ($arg :  APDClause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    property get rule () : APDClauseRule {
      return getVariableValue("rule", 0) as APDClauseRule
    }
    
    property set rule ($arg :  APDClauseRule) {
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