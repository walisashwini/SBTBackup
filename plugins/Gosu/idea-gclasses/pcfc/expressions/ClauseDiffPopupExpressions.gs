package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClauseDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClauseDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clauseDetailsPresenter :  gw.sbt.pca.view.presenter.ClauseDetailsPresenter) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=ClauseDiffPopup) at ClauseDiffPopup.pcf: line 10, column 98
    function afterCancel_10 () : void {
      clauseDetailsPresenter.revertChanges()
    }
    
    // 'def' attribute on PanelRef at ClauseDiffPopup.pcf: line 35, column 170
    function def_onEnter_5 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(clauseDetailsPresenter.DecisionAndInstructions, clauseDetailsPresenter.Description, clauseDetailsPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at ClauseDiffPopup.pcf: line 39, column 101
    function def_onEnter_7 (def :  pcf.ClauseDetailsTreeViewPanelSet) : void {
      def.onEnter(treeRootNode, true, clauseDetailsPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at ClauseDiffPopup.pcf: line 35, column 170
    function def_refreshVariables_6 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(clauseDetailsPresenter.DecisionAndInstructions, clauseDetailsPresenter.Description, clauseDetailsPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at ClauseDiffPopup.pcf: line 39, column 101
    function def_refreshVariables_8 (def :  pcf.ClauseDetailsTreeViewPanelSet) : void {
      def.refreshVariables(treeRootNode, true, clauseDetailsPresenter.ReadOnly)
    }
    
    // 'initialValue' attribute on Variable at ClauseDiffPopup.pcf: line 19, column 43
    function initialValue_0 () : gw.api.tree.RowTreeRootNode {
      return clauseDetailsPresenter.getTreeRootNode()
    }
    
    // EditButtons at ClauseDiffPopup.pcf: line 25, column 64
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label at ClauseDiffPopup.pcf: line 31, column 57
    function label_4 () : java.lang.String {
      return clauseDetailsPresenter.Description
    }
    
    // 'cancelVisible' attribute on EditButtons at ClauseDiffPopup.pcf: line 25, column 64
    function visible_1 () : java.lang.Boolean {
      return not clauseDetailsPresenter.ReadOnly
    }
    
    // 'visible' attribute on PanelSet at ClauseDiffPopup.pcf: line 37, column 53
    function visible_9 () : java.lang.Boolean {
      return treeRootNode.Children.HasElements
    }
    
    override property get CurrentLocation () : pcf.ClauseDiffPopup {
      return super.CurrentLocation as pcf.ClauseDiffPopup
    }
    
    property get clauseDetailsPresenter () : gw.sbt.pca.view.presenter.ClauseDetailsPresenter {
      return getVariableValue("clauseDetailsPresenter", 0) as gw.sbt.pca.view.presenter.ClauseDetailsPresenter
    }
    
    property set clauseDetailsPresenter ($arg :  gw.sbt.pca.view.presenter.ClauseDetailsPresenter) {
      setVariableValue("clauseDetailsPresenter", 0, $arg)
    }
    
    property get treeRootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("treeRootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set treeRootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("treeRootNode", 0, $arg)
    }
    
    
  }
  
  
}