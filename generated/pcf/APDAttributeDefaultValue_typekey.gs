package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDAttributeDefaultValue.typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDAttributeDefaultValue_typekey extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($attribute :  APDAttribute, $ruleType :  APDRuleType, $dataField :  APDDataField, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDAttributeDefaultValue_typekey, SECTION_WIDGET_CLASS).setVariables(false, {$attribute, $ruleType, $dataField, $openForEdit})
  }
  
  function refreshVariables ($attribute :  APDAttribute, $ruleType :  APDRuleType, $dataField :  APDDataField, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.APDAttributeDefaultValue_typekey, SECTION_WIDGET_CLASS).setVariables(true, {$attribute, $ruleType, $dataField, $openForEdit})
  }
  
  
}