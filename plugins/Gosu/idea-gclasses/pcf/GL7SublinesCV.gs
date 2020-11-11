package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublinesCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7SublinesCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) : void {
    __widgetOf(this, pcf.GL7SublinesCV, SECTION_WIDGET_CLASS).setVariables(false, {$coverablePerSubline, $openForEdit, $jobWizardHelper, $coverageCategories})
  }
  
  function refreshVariables ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) : void {
    __widgetOf(this, pcf.GL7SublinesCV, SECTION_WIDGET_CLASS).setVariables(true, {$coverablePerSubline, $openForEdit, $jobWizardHelper, $coverageCategories})
  }
  
  
}