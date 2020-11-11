package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBModifiablePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBModifiablePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at LOBModifiablePanelSet.pcf: line 14, column 79
    function def_onEnter_1 (def :  pcf.LOBScheduleRateDV) : void {
      def.onEnter(modifiable.Modifiers, rateFactorRangeGenerator)
    }
    
    // 'def' attribute on PanelRef at LOBModifiablePanelSet.pcf: line 14, column 79
    function def_refreshVariables_2 (def :  pcf.LOBScheduleRateDV) : void {
      def.refreshVariables(modifiable.Modifiers, rateFactorRangeGenerator)
    }
    
    // 'title' attribute on TitleBar at LOBModifiablePanelSet.pcf: line 16, column 41
    function title_0 () : java.lang.String {
      return modifiable.DisplayName
    }
    
    property get modifiable () : Modifiable {
      return getRequireValue("modifiable", 0) as Modifiable
    }
    
    property set modifiable ($arg :  Modifiable) {
      setRequireValue("modifiable", 0, $arg)
    }
    
    property get rateFactorRangeGenerator () : gw.lob.common.util.modifiers.RateFactorRangeGenerator {
      return getRequireValue("rateFactorRangeGenerator", 0) as gw.lob.common.util.modifiers.RateFactorRangeGenerator
    }
    
    property set rateFactorRangeGenerator ($arg :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) {
      setRequireValue("rateFactorRangeGenerator", 0, $arg)
    }
    
    
  }
  
  
}