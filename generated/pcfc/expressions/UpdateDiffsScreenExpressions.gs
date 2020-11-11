package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpdateDiffsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends UpdateDiffsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UpdateDiffsScreen.pcf: line 94, column 78
    function def_onEnter_25 (def :  pcf.UpdateTreeViewPanelSet) : void {
      def.onEnter(mainTreeRootNode, updatePresenter)
    }
    
    // 'def' attribute on PanelRef at UpdateDiffsScreen.pcf: line 94, column 78
    function def_refreshVariables_26 (def :  pcf.UpdateTreeViewPanelSet) : void {
      def.refreshVariables(mainTreeRootNode, updatePresenter)
    }
    
    // 'initialValue' attribute on Variable at UpdateDiffsScreen.pcf: line 77, column 45
    function initialValue_22 () : gw.api.tree.RowTreeRootNode {
      return updatePresenter.TreeRootNode
    }
    
    // 'visible' attribute on Label at UpdateDiffsScreen.pcf: line 85, column 58
    function visible_23 () : java.lang.Boolean {
      return mainTreeRootNode.Children.Empty
    }
    
    // 'visible' attribute on Label at UpdateDiffsScreen.pcf: line 88, column 64
    function visible_24 () : java.lang.Boolean {
      return mainTreeRootNode.Children.HasElements
    }
    
    property get mainTreeRootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("mainTreeRootNode", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set mainTreeRootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("mainTreeRootNode", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpdateDiffsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=RCRNStateLink) at UpdateDiffsScreen.pcf: line 56, column 35
    function action_16 () : void {
      updatePresenter.downloadStateRCRN()
    }
    
    // 'action' attribute on Link (id=RCRNCWLink) at UpdateDiffsScreen.pcf: line 65, column 32
    function action_18 () : void {
      updatePresenter.downloadCWRCRN()
    }
    
    // 'def' attribute on PanelRef at UpdateDiffsScreen.pcf: line 70, column 126
    function def_onEnter_20 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(updatePresenter.DecisionAndInstructions, null, updatePresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at UpdateDiffsScreen.pcf: line 70, column 126
    function def_refreshVariables_21 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(updatePresenter.DecisionAndInstructions, null, updatePresenter.ReadOnly)
    }
    
    // 'value' attribute on DateInput (id=AdoptionDate_Input) at UpdateDiffsScreen.pcf: line 42, column 50
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      updatePresenter.AdoptionDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'requestValidationExpression' attribute on DateInput (id=AdoptionDate_Input) at UpdateDiffsScreen.pcf: line 42, column 50
    function requestValidationExpression_10 (VALUE :  java.util.Date) : java.lang.Object {
      return updatePresenter.validateAdoptionDataUI(VALUE)
    }
    
    // 'title' attribute on TitleBar at UpdateDiffsScreen.pcf: line 13, column 237
    function title_0 () : java.lang.String {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdatesDiffScreenTitle", typekey.Jurisdiction.get(updatePresenter.SBTUpdate.MetaData.Jurisdiction).DisplayName, updatePresenter.SBTUpdate.MetaData.Line.Name)
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at UpdateDiffsScreen.pcf: line 30, column 75
    function valueRoot_4 () : java.lang.Object {
      return updatePresenter
    }
    
    // 'value' attribute on DateInput (id=AdoptionDate_Input) at UpdateDiffsScreen.pcf: line 42, column 50
    function value_11 () : java.util.Date {
      return updatePresenter.AdoptionDate
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at UpdateDiffsScreen.pcf: line 30, column 75
    function value_3 () : java.lang.String {
      return updatePresenter.Edition
    }
    
    // 'value' attribute on TextInput (id=CwEdition_Input) at UpdateDiffsScreen.pcf: line 35, column 77
    function value_6 () : java.lang.String {
      return updatePresenter.CwEdition
    }
    
    // 'cancelVisible' attribute on EditButtons at UpdateDiffsScreen.pcf: line 19, column 55
    function visible_1 () : java.lang.Boolean {
      return not updatePresenter.ReadOnly
    }
    
    // 'visible' attribute on ContentInput at UpdateDiffsScreen.pcf: line 51, column 54
    function visible_17 () : java.lang.Boolean {
      return updatePresenter.hasStateRCRN()
    }
    
    // 'visible' attribute on ContentInput at UpdateDiffsScreen.pcf: line 60, column 51
    function visible_19 () : java.lang.Boolean {
      return updatePresenter.hasCWRCRN()
    }
    
    property get updatePresenter () : gw.sbt.pca.view.presenter.UpdatePresenter {
      return getRequireValue("updatePresenter", 0) as gw.sbt.pca.view.presenter.UpdatePresenter
    }
    
    property set updatePresenter ($arg :  gw.sbt.pca.view.presenter.UpdatePresenter) {
      setRequireValue("updatePresenter", 0, $arg)
    }
    
    
  }
  
  
}