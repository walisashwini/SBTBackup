package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7ScheduleCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7ScheduleCostRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($schedule :  gw.api.domain.Schedule, $quoteDisplayUtil :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) : void {
    __widgetOf(this, pcf.GL7ScheduleCostRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$schedule, $quoteDisplayUtil})
  }
  
  function refreshVariables ($schedule :  gw.api.domain.Schedule, $quoteDisplayUtil :  gw.lob.gl7.financials.GL7QuoteDisplayUtil) : void {
    __widgetOf(this, pcf.GL7ScheduleCostRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$schedule, $quoteDisplayUtil})
  }
  
  
}