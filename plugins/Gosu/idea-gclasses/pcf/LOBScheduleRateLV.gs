package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBScheduleRateLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($credit :  Modifier, $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBScheduleRateLV, SECTION_WIDGET_CLASS).setVariables(false, {$credit, $rateFactorRangeGenerator})
  }
  
  function refreshVariables ($credit :  Modifier, $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBScheduleRateLV, SECTION_WIDGET_CLASS).setVariables(true, {$credit, $rateFactorRangeGenerator})
  }
  
  
}