package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.MultipleTypeKeysSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GenericInferenceClassPanelSet_MultipleTypeKeysSelectionForm extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($formPattern :  FormPattern) : void {
    __widgetOf(this, pcf.GenericInferenceClassPanelSet_MultipleTypeKeysSelectionForm, SECTION_WIDGET_CLASS).setVariables(false, {$formPattern})
  }
  
  function refreshVariables ($formPattern :  FormPattern) : void {
    __widgetOf(this, pcf.GenericInferenceClassPanelSet_MultipleTypeKeysSelectionForm, SECTION_WIDGET_CLASS).setVariables(true, {$formPattern})
  }
  
  
}