package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobCovTermWithPostOnChangeInputSet.Direct.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobCovTermWithPostOnChangeInputSet_Direct extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($term :  gw.api.domain.covterm.CovTerm, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.LobCovTermWithPostOnChangeInputSet_Direct, SECTION_WIDGET_CLASS).setVariables(false, {$term, $openForEdit, $jobWizardHelper})
  }
  
  function refreshVariables ($term :  gw.api.domain.covterm.CovTerm, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.LobCovTermWithPostOnChangeInputSet_Direct, SECTION_WIDGET_CLASS).setVariables(true, {$term, $openForEdit, $jobWizardHelper})
  }
  
  
}