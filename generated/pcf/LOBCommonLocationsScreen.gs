package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBCommonLocationsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBCommonLocationsScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationsScreen, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $openForEdit, $jobWizardHelper, $supportsNonSpecificLocation})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.LOBCommonLocationsScreen, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $openForEdit, $jobWizardHelper, $supportsNonSpecificLocation})
  }
  
  
}