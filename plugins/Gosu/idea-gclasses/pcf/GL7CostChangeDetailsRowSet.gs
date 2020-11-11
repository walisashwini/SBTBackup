package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CostChangeDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7CostChangeDetailsRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($line :  GL7Line, $txDisplayUtil :  gw.lob.gl7.financials.GL7TxDisplayUtil) : void {
    __widgetOf(this, pcf.GL7CostChangeDetailsRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$line, $txDisplayUtil})
  }
  
  function refreshVariables ($line :  GL7Line, $txDisplayUtil :  gw.lob.gl7.financials.GL7TxDisplayUtil) : void {
    __widgetOf(this, pcf.GL7CostChangeDetailsRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$line, $txDisplayUtil})
  }
  
  
}