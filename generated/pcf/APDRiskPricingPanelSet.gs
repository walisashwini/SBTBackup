package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskPricingPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRiskPricingPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($risk :  APDRiskCoverable, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  Boolean, $costCodeHelper :  gw.apd.model.CostCodeHelper) : void {
    __widgetOf(this, pcf.APDRiskPricingPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$risk, $jobWizardHelper, $openForEdit, $costCodeHelper})
  }
  
  function refreshVariables ($risk :  APDRiskCoverable, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  Boolean, $costCodeHelper :  gw.apd.model.CostCodeHelper) : void {
    __widgetOf(this, pcf.APDRiskPricingPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$risk, $jobWizardHelper, $openForEdit, $costCodeHelper})
  }
  
  
}