package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredInfoDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AdditionalInsuredInfoDV_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($policyAddlInsuredDetail :  entity.PolicyAddlInsuredDetail) : void {
    __widgetOf(this, pcf.AdditionalInsuredInfoDV_default, SECTION_WIDGET_CLASS).setVariables(false, {$policyAddlInsuredDetail})
  }
  
  function refreshVariables ($policyAddlInsuredDetail :  entity.PolicyAddlInsuredDetail) : void {
    __widgetOf(this, pcf.AdditionalInsuredInfoDV_default, SECTION_WIDGET_CLASS).setVariables(true, {$policyAddlInsuredDetail})
  }
  
  
}