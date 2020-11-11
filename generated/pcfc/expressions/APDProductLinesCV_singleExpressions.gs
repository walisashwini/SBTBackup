package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.single.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDProductLinesCV_singleExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.single.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDProductLinesCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at APDProductLinesCV.single.pcf: line 23, column 57
    function def_onEnter_1 (def :  pcf.APDCoverableCV) : void {
      def.onEnter(productLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at APDProductLinesCV.single.pcf: line 23, column 57
    function def_refreshVariables_2 (def :  pcf.APDCoverableCV) : void {
      def.refreshVariables(productLine, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at APDProductLinesCV.single.pcf: line 18, column 30
    function initialValue_0 () : APDProductLine {
      return product.ProductLines.first().ProductLine
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get product () : APDProduct {
      return getRequireValue("product", 0) as APDProduct
    }
    
    property set product ($arg :  APDProduct) {
      setRequireValue("product", 0, $arg)
    }
    
    property get productLine () : APDProductLine {
      return getVariableValue("productLine", 0) as APDProductLine
    }
    
    property set productLine ($arg :  APDProductLine) {
      setVariableValue("productLine", 0, $arg)
    }
    
    
  }
  
  
}