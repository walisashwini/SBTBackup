package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablesModifiersPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBModifiablesModifiersPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($modifiables :  Modifiable[], $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBModifiablesModifiersPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$modifiables, $rateFactorRangeGenerator})
  }
  
  function refreshVariables ($modifiables :  Modifiable[], $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBModifiablesModifiersPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$modifiables, $rateFactorRangeGenerator})
  }
  
  
}