package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard_PreQualificationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SubmissionWizard_PreQualificationScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($submission :  Submission, $policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.SubmissionWizard_PreQualificationScreen, SECTION_WIDGET_CLASS).setVariables(false, {$submission, $policyPeriod, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($submission :  Submission, $policyPeriod :  PolicyPeriod, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.SubmissionWizard_PreQualificationScreen, SECTION_WIDGET_CLASS).setVariables(true, {$submission, $policyPeriod, $openForEdit, $jobWizardHelper})
  }
  
  
}