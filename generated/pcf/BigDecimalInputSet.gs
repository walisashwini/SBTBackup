package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/BigDecimalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class BigDecimalInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($displayable :  gw.lob.common.displayable.Displayable<java.math.BigDecimal>, $scheduledItem :  ScheduledItem, $schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $fieldDependencyInput :  boolean, $wizard :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.BigDecimalInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$displayable, $scheduledItem, $schedulePropertyInfo, $fieldDependencyInput, $wizard})
  }
  
  function refreshVariables ($displayable :  gw.lob.common.displayable.Displayable<java.math.BigDecimal>, $scheduledItem :  ScheduledItem, $schedulePropertyInfo :  gw.api.productmodel.SchedulePropertyInfo, $fieldDependencyInput :  boolean, $wizard :  gw.api.web.job.JobWizardHelper) : void {
    __widgetOf(this, pcf.BigDecimalInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$displayable, $scheduledItem, $schedulePropertyInfo, $fieldDependencyInput, $wizard})
  }
  
  
}