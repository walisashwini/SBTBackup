package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobSchedulePopupCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobSchedulePopupCV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clause :  gw.api.domain.Clause, $schedule :  gw.api.domain.Schedule, $selectedScheduledItem :  entity.ScheduledItem, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  boolean, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobSchedulePopupCV, SECTION_WIDGET_CLASS).setVariables(false, {$clause, $schedule, $selectedScheduledItem, $jobWizardHelper, $openForEdit, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  function refreshVariables ($clause :  gw.api.domain.Clause, $schedule :  gw.api.domain.Schedule, $selectedScheduledItem :  entity.ScheduledItem, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  boolean, $coverageHelper :  gw.lob.common.coverage.CoverageHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper) : void {
    __widgetOf(this, pcf.LobSchedulePopupCV, SECTION_WIDGET_CLASS).setVariables(true, {$clause, $schedule, $selectedScheduledItem, $jobWizardHelper, $openForEdit, $coverageHelper, $scheduledItemHelper, $additionalInsuredHelper})
  }
  
  
}