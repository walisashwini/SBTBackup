package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBCommonLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBCommonLocationsPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationsPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $openForEdit, $supportsNonSpecificLocation})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationsPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $openForEdit, $supportsNonSpecificLocation})
  }
  
  
}