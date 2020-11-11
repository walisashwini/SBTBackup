package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7UnmannedAircraftsCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7UnmannedAircraftsCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyPeriod :  PolicyPeriod, $presenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) : void {
    __widgetOf(this, pcf.GL7UnmannedAircraftsCV, SECTION_WIDGET_CLASS).setVariables(false, {$policyPeriod, $presenter, $openForEdit, $jobWizardHelper, $coverageCategories})
  }
  
  function refreshVariables ($policyPeriod :  PolicyPeriod, $presenter :  gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) : void {
    __widgetOf(this, pcf.GL7UnmannedAircraftsCV, SECTION_WIDGET_CLASS).setVariables(true, {$policyPeriod, $presenter, $openForEdit, $jobWizardHelper, $coverageCategories})
  }
  
  
}