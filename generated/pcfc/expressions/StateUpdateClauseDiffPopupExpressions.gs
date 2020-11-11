package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateClauseDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateClauseDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateClauseDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateClauseDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=StateUpdateClauseDiffPopup) at StateUpdateClauseDiffPopup.pcf: line 10, column 98
    function afterCancel_16 () : void {
      clauseComparisonPresenter.revertChanges()
    }
    
    // 'def' attribute on PanelRef at StateUpdateClauseDiffPopup.pcf: line 62, column 116
    function def_onEnter_13 (def :  pcf.ClauseDetailsComparisonPanelSet) : void {
      def.onEnter(treeRootNode, true, newSBTUpdateEdition, adoptedSBTUpdateEdition)
    }
    
    // 'def' attribute on PanelRef at StateUpdateClauseDiffPopup.pcf: line 35, column 179
    function def_onEnter_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(clauseComparisonPresenter.DecisionAndInstructions, clauseComparisonPresenter.Description, clauseComparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at StateUpdateClauseDiffPopup.pcf: line 62, column 116
    function def_refreshVariables_14 (def :  pcf.ClauseDetailsComparisonPanelSet) : void {
      def.refreshVariables(treeRootNode, true, newSBTUpdateEdition, adoptedSBTUpdateEdition)
    }
    
    // 'def' attribute on PanelRef at StateUpdateClauseDiffPopup.pcf: line 35, column 179
    function def_refreshVariables_5 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(clauseComparisonPresenter.DecisionAndInstructions, clauseComparisonPresenter.Description, clauseComparisonPresenter.ReadOnly)
    }
    
    // 'initialValue' attribute on Variable at StateUpdateClauseDiffPopup.pcf: line 25, column 43
    function initialValue_0 () : gw.api.tree.RowTreeRootNode {
      return clauseComparisonPresenter.getTreeRootNode()
    }
    
    // EditButtons at StateUpdateClauseDiffPopup.pcf: line 32, column 67
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextInput (id=clauselabel_Input) at StateUpdateClauseDiffPopup.pcf: line 44, column 89
    function valueRoot_7 () : java.lang.Object {
      return clauseComparisonPresenter
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at StateUpdateClauseDiffPopup.pcf: line 56, column 71
    function value_11 () : java.lang.String {
      return newSBTUpdateEdition
    }
    
    // 'value' attribute on TextInput (id=clauselabel_Input) at StateUpdateClauseDiffPopup.pcf: line 44, column 89
    function value_6 () : java.lang.String {
      return clauseComparisonPresenter.Description
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedEffDate_Input) at StateUpdateClauseDiffPopup.pcf: line 50, column 75
    function value_9 () : java.lang.String {
      return adoptedSBTUpdateEdition
    }
    
    // 'cancelVisible' attribute on EditButtons at StateUpdateClauseDiffPopup.pcf: line 32, column 67
    function visible_1 () : java.lang.Boolean {
      return not clauseComparisonPresenter.ReadOnly
    }
    
    // 'visible' attribute on PanelSet at StateUpdateClauseDiffPopup.pcf: line 60, column 53
    function visible_15 () : java.lang.Boolean {
      return treeRootNode.Children.HasElements
    }
    
    override property get CurrentLocation () : pcf.StateUpdateClauseDiffPopup {
      return super.CurrentLocation as pcf.StateUpdateClauseDiffPopup
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