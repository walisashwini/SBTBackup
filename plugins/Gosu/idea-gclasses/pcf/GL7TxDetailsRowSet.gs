package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TxDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7TxDetailsRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($title :  String, $location :  String, $trxs :  List<GL7Transaction>, $subline :  String, $txDisplayUtil :  gw.lob.gl7.financials.GL7TxDisplayUtil, $scheduledItems :  List<ScheduledItem>) : void {
    __widgetOf(this, pcf.GL7TxDetailsRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$title, $location, $trxs, $subline, $txDisplayUtil, $scheduledItems})
  }
  
  function refreshVariables ($title :  String, $location :  String, $trxs :  List<GL7Transaction>, $subline :  String, $txDisplayUtil :  gw.lob.gl7.financials.GL7TxDisplayUtil, $scheduledItems :  List<ScheduledItem>) : void {
    __widgetOf(this, pcf.GL7TxDetailsRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$title, $location, $trxs, $subline, $txDisplayUtil, $scheduledItems})
  }
  
  
}