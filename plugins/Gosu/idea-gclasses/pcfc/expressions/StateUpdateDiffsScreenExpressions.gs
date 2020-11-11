package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateDiffsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends StateUpdateDiffsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at StateUpdateDiffsScreen.pcf: line 105, column 81
    function def_onEnter_32 (def :  pcf.UpdateTreeViewPanelSet) : void {
      def.onEnter(mainTreeRootNode, sbtUpdatePresenter)
    }
    
    // 'def' attribute on PanelRef at StateUpdateDiffsScreen.pcf: line 105, column 81
    function def_refreshVariables_33 (def :  pcf.UpdateTreeViewPanelSet) : void {
      def.refreshVariables(mainTreeRootNode, sbtUpdatePresenter)
    }
    
    // 'initialValue' attribute on Variable at StateUpdateDiffsScreen.pcf: line 87, column 45
    function initialValue_29 () : gw.api.tree.RowTreeRootNode {
      return sbtUpdatePresenter.TreeRootNode
    }
    
    // 'visible' attribute on Label at StateUpdateDiffsScreen.pcf: line 95, column 58
    function visible_30 () : java.lang.Boolean {
      return mainTreeRootNode.Children.Empty
    }
    
    // 'visible' attribute on Label at StateUpdateDiffsScreen.pcf: line 98, column 64
    function visible_31 () : java.lang.Boolean {
      return mainTreeRootNode.Children.HasElements
    }
    
    // 'visible' attribute on PanelSet at StateUpdateDiffsScreen.pcf: line 103, column 86
    function visible_34 () : java.lang.Boolean {
      return mainTreeRootNode.Children.HasElements or gw.sbt.pca.view.presenter.PresenterUtil.isMaintenanceUpdate(sbtUpdatePresenter.Edition, sbtUpdatePresenter.LatestAdoptedEdition,           sbtUpdatePresenter.CwEdition, sbtUpdatePresenter.LatestAdoptedCwEdition)
    }
    
    property get mainTreeRootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("mainTreeRootNode", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set mainTreeRootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("mainTreeRootNode", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateDiffsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=RCRNStateLink) at StateUpdateDiffsScreen.pcf: line 66, column 35
    function action_23 () : void {
      sbtUpdatePresenter.downloadStateRCRN()
    }
    
    // 'action' attribute on Link (id=RCRNCWLink) at StateUpdateDiffsScreen.pcf: line 75, column 32
    function action_25 () : void {
      sbtUpdatePresenter.downloadCWRCRN()
    }
    
    // 'def' attribute on PanelRef at StateUpdateDiffsScreen.pcf: line 80, column 132
    function def_onEnter_27 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(sbtUpdatePresenter.DecisionAndInstructions, null, sbtUpdatePresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at StateUpdateDiffsScreen.pcf: line 80, column 132
    function def_refreshVariables_28 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(sbtUpdatePresenter.DecisionAndInstructions, null, sbtUpdatePresenter.ReadOnly)
    }
    
    // 'value' attribute on DateInput (id=AdoptionDate_Input) at StateUpdateDiffsScreen.pcf: line 52, column 53
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      sbtUpdatePresenter.AdoptionDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'onChange' attribute on PostOnChange at StateUpdateDiffsScreen.pcf: line 53, column 113
    function onChange_15 () : void {
      sbtUpdatePresenter.refreshByAdoptionDate(sbtUpdatePresenter.AdoptionDate)
    }
    
    // 'requestValidationExpression' attribute on DateInput (id=AdoptionDate_Input) at StateUpdateDiffsScreen.pcf: line 52, column 53
    function requestValidationExpression_17 (VALUE :  java.util.Date) : java.lang.Object {
      return sbtUpdatePresenter.validateAdoptionDataUI(VALUE)
    }
    
    // 'title' attribute on TitleBar at StateUpdateDiffsScreen.pcf: line 13, column 249
    function title_0 () : java.lang.String {
      return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.UpdatesDiffScreenTitle", typekey.Jurisdiction.get(sbtUpdatePresenter.NewSBTUpdate.MetaData.Jurisdiction).DisplayName, sbtUpdatePresenter.NewSBTUpdate.MetaData.Line.Name)
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedEffDate_Input) at StateUpdateDiffsScreen.pcf: line 30, column 91
    function valueRoot_4 () : java.lang.Object {
      return sbtUpdatePresenter
    }
    
    // 'value' attribute on TextInput (id=CwEdition_Input) at StateUpdateDiffsScreen.pcf: line 45, column 80
    function value_12 () : java.lang.String {
      return sbtUpdatePresenter.CwEdition
    }
    
    // 'value' attribute on DateInput (id=AdoptionDate_Input) at StateUpdateDiffsScreen.pcf: line 52, column 53
    function value_18 () : java.util.Date {
      return sbtUpdatePresenter.AdoptionDate
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedEffDate_Input) at StateUpdateDiffsScreen.pcf: line 30, column 91
    function value_3 () : java.lang.String {
      return sbtUpdatePresenter.LatestAdoptedEdition
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedCwEdition_Input) at StateUpdateDiffsScreen.pcf: line 35, column 93
    function value_6 () : java.lang.String {
      return sbtUpdatePresenter.LatestAdoptedCwEdition
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at StateUpdateDiffsScreen.pcf: line 40, column 78
    function value_9 () : java.lang.String {
      return sbtUpdatePresenter.Edition
    }
    
    // 'cancelVisible' attribute on EditButtons at StateUpdateDiffsScreen.pcf: line 19, column 58
    function visible_1 () : java.lang.Boolean {
      return not sbtUpdatePresenter.ReadOnly
    }
    
    // 'visible' attribute on ContentInput at StateUpdateDiffsScreen.pcf: line 61, column 57
    function visible_24 () : java.lang.Boolean {
      return sbtUpdatePresenter.hasStateRCRN()
    }
    
    // 'visible' attribute on ContentInput at StateUpdateDiffsScreen.pcf: line 70, column 54
    function visible_26 () : java.lang.Boolean {
      return sbtUpdatePresenter.hasCWRCRN()
    }
    
    property get sbtUpdatePresenter () : gw.sbt.pca.view.presenter.compare.StateUpdatePresenter {
      return getRequireValue("sbtUpdatePresenter", 0) as gw.sbt.pca.view.presenter.compare.StateUpdatePresenter
    }
    
    property set sbtUpdatePresenter ($arg :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter) {
      setRequireValue("sbtUpdatePresenter", 0, $arg)
    }
    
    
  }
  
  
}