package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBCommonLocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBCommonLocationDetailCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($polLocation :  PolicyLocation, $openForEdit :  boolean, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationDetailCV, SECTION_WIDGET_CLASS).setVariables(false, {$polLocation, $openForEdit, $supportsNonSpecificLocation})
  }
  
  function refreshVariables ($polLocation :  PolicyLocation, $openForEdit :  boolean, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationDetailCV, SECTION_WIDGET_CLASS).setVariables(true, {$polLocation, $openForEdit, $supportsNonSpecificLocation})
  }
  
  
}