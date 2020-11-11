package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7RatingDetailsRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7RatingDetailsRowSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($line :  GL7Line, $quoteDisplayUtil :  gw.lob.gl7.financials.GL7QuoteDisplayUtil, $prorated :  boolean) : void {
    __widgetOf(this, pcf.GL7RatingDetailsRowSet, SECTION_WIDGET_CLASS).setVariables(false, {$line, $quoteDisplayUtil, $prorated})
  }
  
  function refreshVariables ($line :  GL7Line, $quoteDisplayUtil :  gw.lob.gl7.financials.GL7QuoteDisplayUtil, $prorated :  boolean) : void {
    __widgetOf(this, pcf.GL7RatingDetailsRowSet, SECTION_WIDGET_CLASS).setVariables(true, {$line, $quoteDisplayUtil, $prorated})
  }
  
  
}