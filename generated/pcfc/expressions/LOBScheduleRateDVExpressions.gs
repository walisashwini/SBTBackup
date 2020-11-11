package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LOBScheduleRateDVExpressions {
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LOBScheduleRateDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ListViewInput at LOBScheduleRateDV.pcf: line 37, column 73
    function available_4 () : java.lang.Boolean {
      return scheduleRates != null and scheduleRates.HasElements
    }
    
    // 'def' attribute on ListViewInput at LOBScheduleRateDV.pcf: line 37, column 73
    function def_onEnter_6 (def :  pcf.LOBScheduleRateLV) : void {
      def.onEnter(scheduleRate, rateFactorRangeGenerator)
    }
    
    // 'def' attribute on ListViewInput at LOBScheduleRateDV.pcf: line 37, column 73
    function def_refreshVariables_7 (def :  pcf.LOBScheduleRateLV) : void {
      def.refreshVariables(scheduleRate, rateFactorRangeGenerator)
    }
    
    // 'label' attribute on Label (id=ratingInputName) at LOBScheduleRateDV.pcf: line 31, column 27
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.ModifiersScreen.Modifier") + ": " + scheduleRate.DisplayName
    }
    
    property get scheduleRate () : entity.Modifier {
      return getIteratedValue(1) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LOBScheduleRateDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LOBScheduleRateDV.pcf: line 16, column 26
    function initialValue_0 () : Modifier[] {
      return modifiers.where(\ m -> m.ScheduleRate )
    }
    
    // 'sortBy' attribute on IteratorSort at LOBScheduleRateDV.pcf: line 27, column 26
    function sortBy_2 (scheduleRate :  entity.Modifier) : java.lang.Object {
      return scheduleRate.Pattern.Priority
    }
    
    // 'value' attribute on InputIterator at LOBScheduleRateDV.pcf: line 24, column 39
    function value_8 () : entity.Modifier[] {
      return scheduleRates
    }
    
    // 'visible' attribute on Label at LOBScheduleRateDV.pcf: line 20, column 72
    function visible_1 () : java.lang.Boolean {
      return scheduleRates == null or !scheduleRates.HasElements
    }
    
    property get modifiers () : Modifier[] {
      return getRequireValue("modifiers", 0) as Modifier[]
    }
    
    property set modifiers ($arg :  Modifier[]) {
      setRequireValue("modifiers", 0, $arg)
    }
    
    property get rateFactorRangeGenerator () : gw.lob.common.util.modifiers.RateFactorRangeGenerator {
      return getRequireValue("rateFactorRangeGenerator", 0) as gw.lob.common.util.modifiers.RateFactorRangeGenerator
    }
    
    property set rateFactorRangeGenerator ($arg :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) {
      setRequireValue("rateFactorRangeGenerator", 0, $arg)
    }
    
    property get scheduleRates () : Modifier[] {
      return getVariableValue("scheduleRates", 0) as Modifier[]
    }
    
    property set scheduleRates ($arg :  Modifier[]) {
      setVariableValue("scheduleRates", 0, $arg)
    }
    
    
  }
  
  
}