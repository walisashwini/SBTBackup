package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7LocationsScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.GL7LocationsScreen, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $openForEdit, $jobWizardHelper, $supportsNonSpecificLocation})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $supportsNonSpecificLocation :  boolean) : void {
    __widgetOf(this, pcf.GL7LocationsScreen, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $openForEdit, $jobWizardHelper, $supportsNonSpecificLocation})
  }
  
  
}