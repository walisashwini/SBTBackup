package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsComparisonPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClauseDetailsComparisonPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($treeNode :  gw.api.tree.RowTreeRootNode, $showDecisionRequiredOnly :  boolean, $newSBTUpdateEdition :  String, $adoptedSBTUpdateEdition :  String) : void {
    __widgetOf(this, pcf.ClauseDetailsComparisonPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$treeNode, $showDecisionRequiredOnly, $newSBTUpdateEdition, $adoptedSBTUpdateEdition})
  }
  
  function refreshVariables ($treeNode :  gw.api.tree.RowTreeRootNode, $showDecisionRequiredOnly :  boolean, $newSBTUpdateEdition :  String, $adoptedSBTUpdateEdition :  String) : void {
    __widgetOf(this, pcf.ClauseDetailsComparisonPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$treeNode, $showDecisionRequiredOnly, $newSBTUpdateEdition, $adoptedSBTUpdateEdition})
  }
  
  
}