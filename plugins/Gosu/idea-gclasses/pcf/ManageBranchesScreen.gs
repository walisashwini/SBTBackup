package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ManageBranchesScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($jobWizardHelper :  gw.api.web.job.JobWizardHelper, $policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.ManageBranchesScreen, SECTION_WIDGET_CLASS).setVariables(false, {$jobWizardHelper, $policyPeriod})
  }
  
  function refreshVariables ($jobWizardHelper :  gw.api.web.job.JobWizardHelper, $policyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.ManageBranchesScreen, SECTION_WIDGET_CLASS).setVariables(true, {$jobWizardHelper, $policyPeriod})
  }
  
  
}