package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpdateTreeViewPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends UpdateTreeViewPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on BooleanRadioCell (id=ChangeType_Cell) at UpdateTreeViewPanelSet.pcf: line 91, column 49
    function actionAvailable_20 () : java.lang.Boolean {
      return diff.detailsAvailableToShow()
    }
    
    // 'actionAvailable' attribute on BooleanRadioCell (id=Instructions_Cell) at UpdateTreeViewPanelSet.pcf: line 108, column 49
    function actionAvailable_27 () : java.lang.Boolean {
      return gw.sbt.pca.view.presenter.PresenterUtil.canAssignInstructions(diff.DecisionAndInstructions)
    }
    
    // 'action' attribute on BooleanRadioCell (id=ChangeType_Cell) at UpdateTreeViewPanelSet.pcf: line 91, column 49
    function action_19 () : void {
      diff.showDetails()
    }
    
    // 'action' attribute on BooleanRadioCell (id=Instructions_Cell) at UpdateTreeViewPanelSet.pcf: line 108, column 49
    function action_25 () : void {
      InstructionsPopup.push(diff.DecisionAndInstructions, diff.Description, diff.ReadOnly)
    }
    
    // 'action' attribute on BooleanRadioCell (id=Instructions_Cell) at UpdateTreeViewPanelSet.pcf: line 108, column 49
    function action_dest_26 () : pcf.api.Destination {
      return pcf.InstructionsPopup.createDestination(diff.DecisionAndInstructions, diff.Description, diff.ReadOnly)
    }
    
    // 'checkBoxVisible' attribute on RowTree (id=DiffsTree) at UpdateTreeViewPanelSet.pcf: line 71, column 28
    function checkBoxVisible_30 () : java.lang.Boolean {
      return diff.Selectable and not sbtUpdateLoaderAction.ReadOnly
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=ChangeType_Cell) at UpdateTreeViewPanelSet.pcf: line 91, column 49
    function iconLabel_21 () : java.lang.String {
      return diff.DiffType.Description
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=Instructions_Cell) at UpdateTreeViewPanelSet.pcf: line 108, column 49
    function iconLabel_28 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getInstructionsTooltips(diff.DecisionAndInstructions)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ChangeType_Cell) at UpdateTreeViewPanelSet.pcf: line 91, column 49
    function icon_22 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getDifferenceIconName(diff.DiffType, diff.detailsAvailableToShow())
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Instructions_Cell) at UpdateTreeViewPanelSet.pcf: line 108, column 49
    function icon_29 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getInstructionsIconName(diff.DecisionAndInstructions)
    }
    
    // 'value' attribute on TextCell (id=Item_Cell) at UpdateTreeViewPanelSet.pcf: line 80, column 57
    function valueRoot_17 () : java.lang.Object {
      return diff
    }
    
    // 'value' attribute on TextCell (id=Item_Cell) at UpdateTreeViewPanelSet.pcf: line 80, column 57
    function value_16 () : java.lang.String {
      return diff.Description
    }
    
    // 'value' attribute on TextCell (id=Decision_Cell) at UpdateTreeViewPanelSet.pcf: line 97, column 102
    function value_23 () : java.lang.String {
      return diff.getUpdateDecisionDescription()
    }
    
    property get diff () : gw.sbt.pca.view.presenter.RowPresenter {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.RowPresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/UpdateTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpdateTreeViewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AnalysisComplete) at UpdateTreeViewPanelSet.pcf: line 53, column 87
    function action_10 () : void {
      sbtUpdateLoaderAction.loadUpdate()
    }
    
    // 'action' attribute on ToolbarButton (id=RevertMerge) at UpdateTreeViewPanelSet.pcf: line 59, column 63
    function action_14 () : void {
      sbtUpdateLoaderAction.revertMerge()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=ClearDecision) at UpdateTreeViewPanelSet.pcf: line 37, column 101
    function allCheckedRowsAction_3 (CheckedValues :  gw.sbt.pca.view.presenter.RowPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = null })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Accept) at UpdateTreeViewPanelSet.pcf: line 41, column 103
    function allCheckedRowsAction_5 (CheckedValues :  gw.sbt.pca.view.presenter.RowPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.ACCEPT })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Reject) at UpdateTreeViewPanelSet.pcf: line 45, column 103
    function allCheckedRowsAction_7 (CheckedValues :  gw.sbt.pca.view.presenter.RowPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.REJECT })
    }
    
    // 'available' attribute on ToolbarButton (id=AnalysisComplete) at UpdateTreeViewPanelSet.pcf: line 53, column 87
    function available_9 () : java.lang.Boolean {
      return sbtUpdateLoaderAction.HasAnalysisCompletePriv and not sbtUpdateLoaderAction.ReadOnly
    }
    
    // 'cacheKey' attribute on ToolbarFilter at UpdateTreeViewPanelSet.pcf: line 20, column 35
    function cacheKey_2 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.filterCacheKey()
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=AnalysisComplete) at UpdateTreeViewPanelSet.pcf: line 53, column 87
    function confirmMessage_11 () : java.lang.String {
      return sbtUpdateLoaderAction.confirmAnalysisComplete()
    }
    
    // 'confirmMessage' attribute on ToolbarButton (id=RevertMerge) at UpdateTreeViewPanelSet.pcf: line 59, column 63
    function confirmMessage_15 () : java.lang.String {
      return sbtUpdateLoaderAction.confirmRevertMerge()
    }
    
    // RowTree (id=DiffsTree) at UpdateTreeViewPanelSet.pcf: line 71, column 28
    function containerLabel_32 (diff :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'filter' attribute on ToolbarFilterOption at UpdateTreeViewPanelSet.pcf: line 23, column 35
    function filter_0 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.All
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at UpdateTreeViewPanelSet.pcf: line 25, column 106
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.sbt.pca.view.filter.ComparisonFilters.forListOfUpdates().DifferenceFilterGroup
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Accept) at UpdateTreeViewPanelSet.pcf: line 41, column 103
    function label_4 () : java.lang.Object {
      return sbtUpdateLoaderAction.descriptionForDecision(gw.sbt.model.UpdateDecision.ACCEPT)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Reject) at UpdateTreeViewPanelSet.pcf: line 45, column 103
    function label_6 () : java.lang.Object {
      return sbtUpdateLoaderAction.descriptionForDecision(gw.sbt.model.UpdateDecision.REJECT)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=AnalysisComplete) at UpdateTreeViewPanelSet.pcf: line 53, column 87
    function tooltip_12 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.AnalysisCompleteTooltips
    }
    
    // 'value' attribute on RowTree (id=DiffsTree) at UpdateTreeViewPanelSet.pcf: line 71, column 28
    function value_31 () : java.lang.Object {
      return treeNode
    }
    
    // 'visible' attribute on ToolbarButton (id=RevertMerge) at UpdateTreeViewPanelSet.pcf: line 59, column 63
    function visible_13 () : java.lang.Boolean {
      return sbtUpdateLoaderAction.HasMergeRevertPriv
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=Decision) at UpdateTreeViewPanelSet.pcf: line 33, column 56
    function visible_8 () : java.lang.Boolean {
      return not sbtUpdateLoaderAction.ReadOnly
    }
    
    property get sbtUpdateLoaderAction () : gw.sbt.pca.view.presenter.SBTUpdateLoadAction {
      return getRequireValue("sbtUpdateLoaderAction", 0) as gw.sbt.pca.view.presenter.SBTUpdateLoadAction
    }
    
    property set sbtUpdateLoaderAction ($arg :  gw.sbt.pca.view.presenter.SBTUpdateLoadAction) {
      setRequireValue("sbtUpdateLoaderAction", 0, $arg)
    }
    
    property get treeNode () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("treeNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set treeNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("treeNode", 0, $arg)
    }
    
    
  }
  
  
}