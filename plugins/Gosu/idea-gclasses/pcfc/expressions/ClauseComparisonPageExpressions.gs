package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseComparisonPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClauseComparisonPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/ClauseComparisonPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClauseComparisonPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ClauseComparisonPage.pcf: line 40, column 179
    function def_onEnter_3 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(clauseComparisonPresenter.DecisionAndInstructions, clauseComparisonPresenter.Description, clauseComparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at ClauseComparisonPage.pcf: line 44, column 116
    function def_onEnter_5 (def :  pcf.ClauseDetailsComparisonPanelSet) : void {
      def.onEnter(treeRootNode, true, newSBTUpdateEdition, adoptedSBTUpdateEdition)
    }
    
    // 'def' attribute on PanelRef at ClauseComparisonPage.pcf: line 40, column 179
    function def_refreshVariables_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(clauseComparisonPresenter.DecisionAndInstructions, clauseComparisonPresenter.Description, clauseComparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at ClauseComparisonPage.pcf: line 44, column 116
    function def_refreshVariables_6 (def :  pcf.ClauseDetailsComparisonPanelSet) : void {
      def.refreshVariables(treeRootNode, true, newSBTUpdateEdition, adoptedSBTUpdateEdition)
    }
    
    // 'initialValue' attribute on Variable at ClauseComparisonPage.pcf: line 25, column 43
    function initialValue_0 () : gw.api.tree.RowTreeRootNode {
      return clauseComparisonPresenter.getTreeRootNode()
    }
    
    // EditButtons at ClauseComparisonPage.pcf: line 30, column 32
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label at ClauseComparisonPage.pcf: line 36, column 60
    function label_2 () : java.lang.String {
      return clauseComparisonPresenter.Description
    }
    
    // 'parent' attribute on Page (id=ClauseComparisonPage) at ClauseComparisonPage.pcf: line 10, column 98
    static function parent_8 (adoptedSBTUpdateEdition :  String, clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String) : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'visible' attribute on PanelSet at ClauseComparisonPage.pcf: line 42, column 53
    function visible_7 () : java.lang.Boolean {
      return treeRootNode.Children.HasElements
    }
    
    override property get CurrentLocation () : pcf.ClauseComparisonPage {
      return super.CurrentLocation as pcf.ClauseComparisonPage
    }
    
    property get adoptedSBTUpdateEdition () : String {
      return getVariableValue("adoptedSBTUpdateEdition", 0) as String
    }
    
    property set adoptedSBTUpdateEdition ($arg :  String) {
      setVariableValue("adoptedSBTUpdateEdition", 0, $arg)
    }
    
    property get clauseComparisonPresenter () : gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter {
      return getVariableValue("clauseComparisonPresenter", 0) as gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter
    }
    
    property set clauseComparisonPresenter ($arg :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter) {
      setVariableValue("clauseComparisonPresenter", 0, $arg)
    }
    
    property get newSBTUpdateEdition () : String {
      return getVariableValue("newSBTUpdateEdition", 0) as String
    }
    
    property set newSBTUpdateEdition ($arg :  String) {
      setVariableValue("newSBTUpdateEdition", 0, $arg)
    }
    
    property get treeRootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("treeRootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set treeRootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("treeRootNode", 0, $arg)
    }
    
    
  }
  
  
}