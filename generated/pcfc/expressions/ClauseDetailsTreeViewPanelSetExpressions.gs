package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClauseDetailsTreeViewPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClauseDetailsTreeViewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=ClearDecision) at ClauseDetailsTreeViewPanelSet.pcf: line 30, column 101
    function allCheckedRowsAction_0 (CheckedValues :  gw.sbt.pca.view.presenter.RowPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = null })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Accept) at ClauseDetailsTreeViewPanelSet.pcf: line 34, column 124
    function allCheckedRowsAction_2 (CheckedValues :  gw.sbt.pca.view.presenter.RowPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.ACCEPT })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Reject) at ClauseDetailsTreeViewPanelSet.pcf: line 38, column 124
    function allCheckedRowsAction_4 (CheckedValues :  gw.sbt.pca.view.presenter.RowPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.REJECT })
    }
    
    // RowTree at ClauseDetailsTreeViewPanelSet.pcf: line 50, column 28
    function containerLabel_21 (diff :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'filter' attribute on ToolbarFilterOption at ClauseDetailsTreeViewPanelSet.pcf: line 56, column 45
    function filter_6 () : gw.api.filters.IFilter {
      return new gw.sbt.pca.view.filter.DefaultClauseDetailsFilter()
    }
    
    // 'filter' attribute on ToolbarFilterOption at ClauseDetailsTreeViewPanelSet.pcf: line 60, column 45
    function filter_8 () : gw.api.filters.IFilter {
      return new gw.sbt.pca.view.filter.NoChangeClauseDetailsFilter()
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Accept) at ClauseDetailsTreeViewPanelSet.pcf: line 34, column 124
    function label_1 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getUpdateDecisionDescription(gw.sbt.model.UpdateDecision.ACCEPT)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Reject) at ClauseDetailsTreeViewPanelSet.pcf: line 38, column 124
    function label_3 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getUpdateDecisionDescription(gw.sbt.model.UpdateDecision.REJECT)
    }
    
    // 'value' attribute on RowTree at ClauseDetailsTreeViewPanelSet.pcf: line 50, column 28
    function value_20 () : java.lang.Object {
      return treeNode
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=Decision) at ClauseDetailsTreeViewPanelSet.pcf: line 26, column 34
    function visible_5 () : java.lang.Boolean {
      return not readOnly
    }
    
    // 'visible' attribute on ToolbarFilterOption at ClauseDetailsTreeViewPanelSet.pcf: line 56, column 45
    function visible_7 () : java.lang.Boolean {
      return showNoChangeFilter
    }
    
    property get readOnly () : boolean {
      return getRequireValue("readOnly", 0) as java.lang.Boolean
    }
    
    property set readOnly ($arg :  boolean) {
      setRequireValue("readOnly", 0, $arg)
    }
    
    property get showNoChangeFilter () : boolean {
      return getRequireValue("showNoChangeFilter", 0) as java.lang.Boolean
    }
    
    property set showNoChangeFilter ($arg :  boolean) {
      setRequireValue("showNoChangeFilter", 0, $arg)
    }
    
    property get treeNode () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("treeNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set treeNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("treeNode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsTreeViewPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends ClauseDetailsTreeViewPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on BooleanRadioCell (id=ChangeType_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 82, column 49
    function actionAvailable_14 () : java.lang.Boolean {
      return diff.detailsAvailableToShow()
    }
    
    // 'action' attribute on BooleanRadioCell (id=ChangeType_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 82, column 49
    function action_13 () : void {
      diff.showDetails()
    }
    
    // 'checkBoxVisible' attribute on RowTree at ClauseDetailsTreeViewPanelSet.pcf: line 50, column 28
    function checkBoxVisible_19 () : java.lang.Boolean {
      return diff.Selectable and not diff.ReadOnly
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=ChangeType_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 82, column 49
    function iconLabel_15 () : java.lang.String {
      return diff.DiffType.Description
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ChangeType_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 82, column 49
    function icon_16 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.getDifferenceIconName(diff.DiffType, diff.detailsAvailableToShow())
    }
    
    // 'value' attribute on TextCell (id=Item_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 70, column 57
    function valueRoot_11 () : java.lang.Object {
      return diff
    }
    
    // 'value' attribute on TextCell (id=Item_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 70, column 57
    function value_10 () : java.lang.String {
      return diff.Description
    }
    
    // 'value' attribute on TextCell (id=Decision_Cell) at ClauseDetailsTreeViewPanelSet.pcf: line 89, column 134
    function value_17 () : java.lang.String {
      return gw.sbt.util.DisplayDescriptionHelper.getUpdateDecisionDescription(diff.Decision)
    }
    
    property get diff () : gw.sbt.pca.view.presenter.RowPresenter {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.RowPresenter
    }
    
    
  }
  
  
}