package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewGeneralLiabilityPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7PolicyReviewGeneralLiabilityPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($gl7line :  GL7GeneralLiabilityLine, $sublines :  gw.lob.gl7.presenters.GL7CoverablePerSubline<GL7SublineType>, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7PolicyReviewGeneralLiabilityPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$gl7line, $sublines, $jobWizardHelper})
  }
  
  function refreshVariables ($gl7line :  GL7GeneralLiabilityLine, $sublines :  gw.lob.gl7.presenters.GL7CoverablePerSubline<GL7SublineType>, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.GL7PolicyReviewGeneralLiabilityPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$gl7line, $sublines, $jobWizardHelper})
  }
  
  
}