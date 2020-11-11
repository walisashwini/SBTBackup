package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/modifiers/LOBModifiablePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBModifiablePanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($modifiable :  Modifiable, $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBModifiablePanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$modifiable, $rateFactorRangeGenerator})
  }
  
  function refreshVariables ($modifiable :  Modifiable, $rateFactorRangeGenerator :  gw.lob.common.util.modifiers.RateFactorRangeGenerator) : void {
    __widgetOf(this, pcf.LOBModifiablePanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$modifiable, $rateFactorRangeGenerator})
  }
  
  
}