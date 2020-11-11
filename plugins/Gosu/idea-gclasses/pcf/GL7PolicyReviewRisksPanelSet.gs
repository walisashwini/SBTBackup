package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewRisksPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7PolicyReviewRisksPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($line :  productmodel.GL7Line, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $policyPeriod :  entity.PolicyPeriod) : void {
    __widgetOf(this, pcf.GL7PolicyReviewRisksPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$line, $openForEdit, $jobWizardHelper, $policyPeriod})
  }
  
  function refreshVariables ($line :  productmodel.GL7Line, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $policyPeriod :  entity.PolicyPeriod) : void {
    __widgetOf(this, pcf.GL7PolicyReviewRisksPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$line, $openForEdit, $jobWizardHelper, $policyPeriod})
  }
  
  
}