package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeDefaultValue.none.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDAttributeDefaultValue_noneExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeDefaultValue.none.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDAttributeDefaultValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=value_Cell) at APDAttributeDefaultValue.none.pcf: line 29, column 42
    function action_2 () : void {
      APDAttributeRulePopup.push(rule, attribute, ruleType, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=value_Cell) at APDAttributeDefaultValue.none.pcf: line 29, column 42
    function action_dest_3 () : pcf.api.Destination {
      return pcf.APDAttributeRulePopup.createDestination(rule, attribute, ruleType, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at APDAttributeDefaultValue.none.pcf: line 24, column 32
    function initialValue_0 () : APDAttributeRule {
      return attribute.Rules?.firstWhere(\r -> r.RuleType == ruleType)
    }
    
    // 'valueVisible' attribute on TextCell (id=value_Cell) at APDAttributeDefaultValue.none.pcf: line 29, column 42
    function visible_1 () : java.lang.Boolean {
      return ShouldDisplayValue
    }
    
    property get attribute () : APDAttribute {
      return getRequireValue("attribute", 0) as APDAttribute
    }
    
    property set attribute ($arg :  APDAttribute) {
      setRequireValue("attribute", 0, $arg)
    }
    
    property get dataField () : APDDataField {
      return getRequireValue("dataField", 0) as APDDataField
    }
    
    property set dataField ($arg :  APDDataField) {
      setRequireValue("dataField", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get rule () : APDAttributeRule {
      return getVariableValue("rule", 0) as APDAttributeRule
    }
    
    property set rule ($arg :  APDAttributeRule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get ruleType () : APDRuleType {
      return getRequireValue("ruleType", 0) as APDRuleType
    }
    
    property set ruleType ($arg :  APDRuleType) {
      setRequireValue("ruleType", 0, $arg)
    }
    
    property get ShouldDisplayValue() : Boolean {
          if (dataField == null) {
            var exist = attribute.Rules.firstWhere(\r -> r.RuleType == APDRuleType.TC_EXISTENCE).DefaultExistence
            return exist != APDDataExistenceType.TC_HIDDEN
              and attribute.Type != APDFieldType.TC_PARTY
              and attribute.Type != APDFieldType.TC_LOCATION
              and (ruleType == APDRuleType.TC_DEFAULT
              or attribute.Type == APDFieldType.TC_BIGDECIMAL
              or attribute.Type == APDFieldType.TC_INTEGER
              or attribute.Type == APDFieldType.TC_MONEY
              or attribute.Type == APDFieldType.TC_DATE)
          }
          return dataField.Availability == APDDataExistenceType.TC_CAPTURED
            and attribute.Type != APDFieldType.TC_PARTY
            and attribute.Type != APDFieldType.TC_LOCATION
            and (ruleType == APDRuleType.TC_DEFAULT
            or attribute.Type == APDFieldType.TC_BIGDECIMAL
            or attribute.Type == APDFieldType.TC_INTEGER
            or attribute.Type == APDFieldType.TC_MONEY
            or attribute.Type == APDFieldType.TC_DATE)
        }
    
    
  }
  
  
}