package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemPropertyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ScheduledItemPropertyInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $scheduledItem :  ScheduledItem, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $displayableFactory :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactory) : void {
    __widgetOf(this, pcf.ScheduledItemPropertyInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$schedulePropertyInfo, $scheduledItem, $jobWizardHelper, $displayableFactory})
  }
  
  function refreshVariables ($schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $scheduledItem :  ScheduledItem, $jobWizardHelper :  gw.api.web.job.JobWizardHelper, $displayableFactory :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactory) : void {
    __widgetOf(this, pcf.ScheduledItemPropertyInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$schedulePropertyInfo, $scheduledItem, $jobWizardHelper, $displayableFactory})
  }
  
  
}