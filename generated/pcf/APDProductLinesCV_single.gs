package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDProductLinesCV.single.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDProductLinesCV_single extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($product :  APDProduct, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDProductLinesCV_single, SECTION_WIDGET_CLASS).setVariables(false, {$product, $openForEdit})
  }
  
  function refreshVariables ($product :  APDProduct, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDProductLinesCV_single, SECTION_WIDGET_CLASS).setVariables(true, {$product, $openForEdit})
  }
  
  
}