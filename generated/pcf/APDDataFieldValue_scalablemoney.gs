package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalablemoney.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDataFieldValue_scalablemoney extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($dataField :  APDDataField) : void {
    __widgetOf(this, pcf.APDDataFieldValue_scalablemoney, SECTION_WIDGET_CLASS).setVariables(false, {$dataField})
  }
  
  function refreshVariables ($dataField :  APDDataField) : void {
    __widgetOf(this, pcf.APDDataFieldValue_scalablemoney, SECTION_WIDGET_CLASS).setVariables(true, {$dataField})
  }
  
  
}