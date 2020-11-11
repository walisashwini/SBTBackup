package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLVInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobScheduledItemsLVInputSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clause :  gw.api.domain.Clause, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobScheduledItemsLVInputSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$clause, $openForEdit, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  function refreshVariables ($clause :  gw.api.domain.Clause, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobScheduledItemsLVInputSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$clause, $openForEdit, $jobWizardHelper, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  
}