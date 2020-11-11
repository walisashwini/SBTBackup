package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemColumnInput.PolicyContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobScheduledItemColumnInput_PolicyContact extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clause :  gw.api.domain.Clause, $schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $scheduledItem :  ScheduledItem, $displayableFactory :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  boolean, $scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : void {
    __widgetOf(this, pcf.LobScheduledItemColumnInput_PolicyContact, SECTION_WIDGET_CLASS).setVariables(false, {$clause, $schedulePropertyInfo, $scheduledItem, $displayableFactory, $jobWizardHelper, $openForEdit, $scheduledItemColumnHelper})
  }
  
  function refreshVariables ($clause :  gw.api.domain.Clause, $schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $scheduledItem :  ScheduledItem, $displayableFactory :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $openForEdit :  boolean, $scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : void {
    __widgetOf(this, pcf.LobScheduledItemColumnInput_PolicyContact, SECTION_WIDGET_CLASS).setVariables(true, {$clause, $schedulePropertyInfo, $scheduledItem, $displayableFactory, $jobWizardHelper, $openForEdit, $scheduledItemColumnHelper})
  }
  
  
}