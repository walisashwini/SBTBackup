package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.multi.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductLinesCV_multi extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($product :  APDProduct, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDProductLinesCV_multi, SECTION_WIDGET_CLASS).setVariables(false, {$product, $openForEdit})
  }
  
  function refreshVariables ($product :  APDProduct, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDProductLinesCV_multi, SECTION_WIDGET_CLASS).setVariables(true, {$product, $openForEdit})
  }
  
  
}