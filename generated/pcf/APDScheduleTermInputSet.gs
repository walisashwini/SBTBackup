package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDScheduleTermInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($term :  APDTerm) : void {
    __widgetOf(this, pcf.APDScheduleTermInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$term})
  }
  
  function refreshVariables ($term :  APDTerm) : void {
    __widgetOf(this, pcf.APDScheduleTermInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$term})
  }
  
  
}