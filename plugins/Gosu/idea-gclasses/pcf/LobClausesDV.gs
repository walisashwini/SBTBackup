package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobClausesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobClausesDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  Coverable, $clausePatterns :  gw.api.productmodel.ClausePattern[], $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobClausesDV, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $clausePatterns, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  function refreshVariables ($coverable :  Coverable, $clausePatterns :  gw.api.productmodel.ClausePattern[], $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobClausesDV, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $clausePatterns, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  
}