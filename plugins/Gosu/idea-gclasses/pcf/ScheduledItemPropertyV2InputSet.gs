package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemPropertyV2InputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ScheduledItemPropertyV2InputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clause :  gw.api.domain.Clause, $schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $scheduledItem :  ScheduledItem, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $displayableFactory :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2) : void {
    __widgetOf(this, pcf.ScheduledItemPropertyV2InputSet, SECTION_WIDGET_CLASS).setVariables(false, {$clause, $schedulePropertyInfo, $scheduledItem, $jobWizardHelper, $displayableFactory})
  }
  
  function refreshVariables ($clause :  gw.api.domain.Clause, $schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $scheduledItem :  ScheduledItem, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $displayableFactory :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2) : void {
    __widgetOf(this, pcf.ScheduledItemPropertyV2InputSet, SECTION_WIDGET_CLASS).setVariables(true, {$clause, $schedulePropertyInfo, $scheduledItem, $jobWizardHelper, $displayableFactory})
  }
  
  
}