package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBScheduleRateDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($modifiers :  Modifier[], $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBScheduleRateDV, SECTION_WIDGET_CLASS).setVariables(false, {$modifiers, $rateFactorRangeGenerator})
  }
  
  function refreshVariables ($modifiers :  Modifier[], $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBScheduleRateDV, SECTION_WIDGET_CLASS).setVariables(true, {$modifiers, $rateFactorRangeGenerator})
  }
  
  
}