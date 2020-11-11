package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBCommonLocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBCommonLocationDetailInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($polLocation :  PolicyLocation, $supportsNonSpecificLocation :  boolean, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationDetailInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$polLocation, $supportsNonSpecificLocation, $openForEdit})
  }
  
  function refreshVariables ($polLocation :  PolicyLocation, $supportsNonSpecificLocation :  boolean, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationDetailInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$polLocation, $supportsNonSpecificLocation, $openForEdit})
  }
  
  
}