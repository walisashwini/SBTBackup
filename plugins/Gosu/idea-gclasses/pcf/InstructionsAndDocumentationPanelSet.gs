package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/InstructionsAndDocumentationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class InstructionsAndDocumentationPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($decisionAndInstructions :  gw.sbt.model.DecisionAndInstructions, $description :  String, $readOnly :  boolean) : void {
    __widgetOf(this, pcf.InstructionsAndDocumentationPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$decisionAndInstructions, $description, $readOnly})
  }
  
  function refreshVariables ($decisionAndInstructions :  gw.sbt.model.DecisionAndInstructions, $description :  String, $readOnly :  boolean) : void {
    __widgetOf(this, pcf.InstructionsAndDocumentationPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$decisionAndInstructions, $description, $readOnly})
  }
  
  
}