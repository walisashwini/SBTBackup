package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalablebigdecimal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_scalablebigdecimalExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalablebigdecimal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalablebigdecimal.pcf: line 17, column 45
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.ScalableDecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'validationExpression' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalablebigdecimal.pcf: line 17, column 45
    function validationExpression_0 () : java.lang.Object {
      return dataField.MinMaxError
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalablebigdecimal.pcf: line 17, column 45
    function valueRoot_4 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalablebigdecimal.pcf: line 17, column 45
    function value_2 () : java.math.BigDecimal {
      return dataField.ScalableDecimalValue
    }
    
    // 'valueVisible' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalablebigdecimal.pcf: line 17, column 45
    function visible_1 () : java.lang.Boolean {
      return dataField.VisibleInUI
    }
    
    property get dataField () : APDDataField {
      return getRequireValue("dataField", 0) as APDDataField
    }
    
    property set dataField ($arg :  APDDataField) {
      setRequireValue("dataField", 0, $arg)
    }
    
    
  }
  
  
}