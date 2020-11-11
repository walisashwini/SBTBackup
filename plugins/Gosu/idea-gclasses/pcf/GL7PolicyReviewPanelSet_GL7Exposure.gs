package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.GL7Exposure.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7PolicyReviewPanelSet_GL7Exposure extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($rowEntity :  Object, $policyPeriod :  PolicyPeriod, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7PolicyReviewPanelSet_GL7Exposure, SECTION_WIDGET_CLASS).setVariables(false, {$rowEntity, $policyPeriod, $jobWizardHelper})
  }
  
  function refreshVariables ($rowEntity :  Object, $policyPeriod :  PolicyPeriod, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7PolicyReviewPanelSet_GL7Exposure, SECTION_WIDGET_CLASS).setVariables(true, {$rowEntity, $policyPeriod, $jobWizardHelper})
  }
  
  
}