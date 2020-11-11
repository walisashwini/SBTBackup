package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragesPerSublineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7CoveragesPerSublineDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $getClausesToShow :  block(coverable : Coverable) : List<gw.api.domain.Clause>, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7CoveragesPerSublineDV, SECTION_WIDGET_CLASS).setVariables(false, {$coverablePerSubline, $getClausesToShow, $jobWizardHelper, $openForEdit})
  }
  
  function refreshVariables ($coverablePerSubline :  gw.lob.gl7.presenters.GL7CoverablePerSubline, $getClausesToShow :  block(coverable : Coverable) : List<gw.api.domain.Clause>, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7CoveragesPerSublineDV, SECTION_WIDGET_CLASS).setVariables(true, {$coverablePerSubline, $getClausesToShow, $jobWizardHelper, $openForEdit})
  }
  
  
}