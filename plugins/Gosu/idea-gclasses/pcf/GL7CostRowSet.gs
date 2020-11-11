package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7CostRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($costs :  List<GL7Cost>, $subline :  String, $quoteDisplayUtil :  gw.lob.gl7.financials.GL7QuoteDisplayUtil, $schedules :  java.util.List<gw.api.domain.Schedule>, $showSubtotals :  boolean) : void {
    __widgetOf(this, pcf.GL7CostRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$costs, $subline, $quoteDisplayUtil, $schedules, $showSubtotals})
  }
  
  function refreshVariables ($costs :  List<GL7Cost>, $subline :  String, $quoteDisplayUtil :  gw.lob.gl7.financials.GL7QuoteDisplayUtil, $schedules :  java.util.List<gw.api.domain.Schedule>, $showSubtotals :  boolean) : void {
    __widgetOf(this, pcf.GL7CostRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$costs, $subline, $quoteDisplayUtil, $schedules, $showSubtotals})
  }
  
  
}