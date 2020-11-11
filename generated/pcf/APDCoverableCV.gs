package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDCoverableCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDCoverableCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  APDCoverable, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDCoverableCV, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $openForEdit})
  }
  
  function refreshVariables ($coverable :  APDCoverable, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDCoverableCV, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $openForEdit})
  }
  
  
}