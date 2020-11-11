package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDRuleDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($rule :  APDRule) : void {
    __widgetOf(this, pcf.APDRuleDV, SECTION_WIDGET_CLASS).setVariables(false, {$rule})
  }
  
  function refreshVariables ($rule :  APDRule) : void {
    __widgetOf(this, pcf.APDRuleDV, SECTION_WIDGET_CLASS).setVariables(true, {$rule})
  }
  
  
}