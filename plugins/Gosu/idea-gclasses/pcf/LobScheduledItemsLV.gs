package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobScheduledItemsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clause :  gw.api.domain.Clause, $schedule :  gw.api.domain.Schedule, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : void {
    __widgetOf(this, pcf.LobScheduledItemsLV, SECTION_WIDGET_CLASS).setVariables(false, {$clause, $schedule, $openForEdit, $jobWizardHelper, $scheduledItemHelper, $scheduledItemColumnHelper})
  }
  
  function refreshVariables ($clause :  gw.api.domain.Clause, $schedule :  gw.api.domain.Schedule, $openForEdit :  boolean, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, $scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : void {
    __widgetOf(this, pcf.LobScheduledItemsLV, SECTION_WIDGET_CLASS).setVariables(true, {$clause, $schedule, $openForEdit, $jobWizardHelper, $scheduledItemHelper, $scheduledItemColumnHelper})
  }
  
  
}