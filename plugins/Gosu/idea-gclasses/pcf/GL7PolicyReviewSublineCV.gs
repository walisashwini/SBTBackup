package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewSublineCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7PolicyReviewSublineCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $coverageCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7PolicyReviewSublineCV, SECTION_WIDGET_CLASS).setVariables(false, {$coverablePerSubline, $coverageCategories, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $coverageCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7PolicyReviewSublineCV, SECTION_WIDGET_CLASS).setVariables(true, {$coverablePerSubline, $coverageCategories, $openForEdit, $jobWizardHelper})
  }
  
  
}