package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UpdateTreeViewPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($treeNode :  gw.api.tree.RowTreeRootNode, $sbtUpdateLoaderAction :  gw.sbt.pca.view.presenter.SBTUpdateLoadAction) : void {
    __widgetOf(this, pcf.UpdateTreeViewPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$treeNode, $sbtUpdateLoaderAction})
  }
  
  function refreshVariables ($treeNode :  gw.api.tree.RowTreeRootNode, $sbtUpdateLoaderAction :  gw.sbt.pca.view.presenter.SBTUpdateLoadAction) : void {
    __widgetOf(this, pcf.UpdateTreeViewPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$treeNode, $sbtUpdateLoaderAction})
  }
  
  
}