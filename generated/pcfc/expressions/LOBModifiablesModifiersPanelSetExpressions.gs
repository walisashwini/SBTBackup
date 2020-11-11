package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablesModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBModifiablesModifiersPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablesModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBModifiablesModifiersPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at LOBModifiablesModifiersPanelSet.pcf: line 19, column 24
    function sortBy_0 (modifiable :  entity.Modifiable) : java.lang.Object {
      return modifiable.DisplayName
    }
    
    // 'value' attribute on PanelIterator at LOBModifiablesModifiersPanelSet.pcf: line 16, column 39
    function value_3 () : entity.Modifiable[] {
      return modifiables
    }
    
    property get modifiables () : Modifiable[] {
      return getRequireValue("modifiables", 0) as Modifiable[]
    }
    
    property set modifiables ($arg :  Modifiable[]) {
      setRequireValue("modifiables", 0, $arg)
    }
    
    property get rateFactorRangeGenerator () : gw.lob.common.util.modifiers.RateFactorRangeGenerator {
      return getRequireValue("rateFactorRangeGenerator", 0) as gw.lob.common.util.modifiers.RateFactorRangeGenerator
    }
    
    property set rateFactorRangeGenerator ($arg :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) {
      setRequireValue("rateFactorRangeGenerator", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablesModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends LOBModifiablesModifiersPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at LOBModifiablesModifiersPanelSet.pcf: line 21, column 76
    function def_onEnter_1 (def :  pcf.LOBModifiablePanelSet) : void {
      def.onEnter(modifiable, rateFactorRangeGenerator)
    }
    
    // 'def' attribute on PanelRef at LOBModifiablesModifiersPanelSet.pcf: line 21, column 76
    function def_refreshVariables_2 (def :  pcf.LOBModifiablePanelSet) : void {
      def.refreshVariables(modifiable, rateFactorRangeGenerator)
    }
    
    property get modifiable () : entity.Modifiable {
      return getIteratedValue(1) as entity.Modifiable
    }
    
    
  }
  
  
}