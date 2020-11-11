package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7LocationDetailCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $presenter :  gw.lob.gl7.presenters.GL7LocationPresenter, $openForEdit :  boolean, $supportsNonSpecificLocation :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7LocationDetailCV, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $presenter, $openForEdit, $supportsNonSpecificLocation, $jobWizardHelper})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $presenter :  gw.lob.gl7.presenters.GL7LocationPresenter, $openForEdit :  boolean, $supportsNonSpecificLocation :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7LocationDetailCV, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $presenter, $openForEdit, $supportsNonSpecificLocation, $jobWizardHelper})
  }
  
  
}