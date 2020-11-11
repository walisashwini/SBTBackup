package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7AdditionalCoveragesPerSublinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7AdditionalCoveragesPerSublinePanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $coverageCategories :  String[], $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $label :  String, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7AdditionalCoveragesPerSublinePanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$coverablePerSubline, $coverageCategories, $jobWizardHelper, $label, $openForEdit})
  }
  
  function refreshVariables ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $coverageCategories :  String[], $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $label :  String, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7AdditionalCoveragesPerSublinePanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$coverablePerSubline, $coverageCategories, $jobWizardHelper, $label, $openForEdit})
  }
  
  
}