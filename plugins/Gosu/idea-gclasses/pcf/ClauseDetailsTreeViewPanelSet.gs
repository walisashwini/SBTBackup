package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClauseDetailsTreeViewPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($treeNode :  gw.api.tree.RowTreeRootNode, $showNoChangeFilter :  boolean, $readOnly :  boolean) : void {
    __widgetOf(this, pcf.ClauseDetailsTreeViewPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$treeNode, $showNoChangeFilter, $readOnly})
  }
  
  function refreshVariables ($treeNode :  gw.api.tree.RowTreeRootNode, $showNoChangeFilter :  boolean, $readOnly :  boolean) : void {
    __widgetOf(this, pcf.ClauseDetailsTreeViewPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$treeNode, $showNoChangeFilter, $readOnly})
  }
  
  
}