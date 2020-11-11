package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDExposureFieldInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($field :  APDExposureField) : void {
    __widgetOf(this, pcf.APDExposureFieldInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$field})
  }
  
  function refreshVariables ($field :  APDExposureField) : void {
    __widgetOf(this, pcf.APDExposureFieldInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$field})
  }
  
  
}