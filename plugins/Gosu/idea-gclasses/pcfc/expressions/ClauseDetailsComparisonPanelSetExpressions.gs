package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsComparisonPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClauseDetailsComparisonPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsComparisonPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClauseDetailsComparisonPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=ClearDecision) at ClauseDetailsComparisonPanelSet.pcf: line 32, column 101
    function allCheckedRowsAction_0 (CheckedValues :  gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = null })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Accept) at ClauseDetailsComparisonPanelSet.pcf: line 36, column 134
    function allCheckedRowsAction_2 (CheckedValues :  gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.ACCEPT })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Reject) at ClauseDetailsComparisonPanelSet.pcf: line 40, column 134
    function allCheckedRowsAction_4 (CheckedValues :  gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.REJECT })
    }
    
    // 'cacheKey' attribute on ToolbarFilter at ClauseDetailsComparisonPanelSet.pcf: line 56, column 25
    function cacheKey_9 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.filterCacheKey()
    }
    
    // RowTree at ClauseDetailsComparisonPanelSet.pcf: line 52, column 28
    function containerLabel_36 (rowPresenter :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'filter' attribute on ToolbarFilterOption at ClauseDetailsComparisonPanelSet.pcf: line 59, column 51
    function filter_5 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.All
    }
    
    // 'filter' attribute on ToolbarFilterOption at ClauseDetailsComparisonPanelSet.pcf: line 63, column 51
    function filter_7 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.forDetailsPage().DecisionRequired
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Accept) at ClauseDetailsComparisonPanelSet.pcf: line 36, column 134
    function label_1 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(gw.sbt.model.UpdateDecision.ACCEPT)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Reject) at ClauseDetailsComparisonPanelSet.pcf: line 40, column 134
    function label_3 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(gw.sbt.model.UpdateDecision.REJECT)
    }
    
    // 'value' attribute on RowTree at ClauseDetailsComparisonPanelSet.pcf: line 52, column 28
    function value_35 () : java.lang.Object {
      return treeNode
    }
    
    // 'visible' attribute on ToolbarFilterOption at ClauseDetailsComparisonPanelSet.pcf: line 59, column 51
    function visible_6 () : java.lang.Boolean {
      return showDecisionRequiredOnly
    }
    
    property get adoptedSBTUpdateEdition () : String {
      return getRequireValue("adoptedSBTUpdateEdition", 0) as String
    }
    
    property set adoptedSBTUpdateEdition ($arg :  String) {
      setRequireValue("adoptedSBTUpdateEdition", 0, $arg)
    }
    
    property get newSBTUpdateEdition () : String {
      return getRequireValue("newSBTUpdateEdition", 0) as String
    }
    
    property set newSBTUpdateEdition ($arg :  String) {
      setRequireValue("newSBTUpdateEdition", 0, $arg)
    }
    
    property get showDecisionRequiredOnly () : boolean {
      return getRequireValue("showDecisionRequiredOnly", 0) as java.lang.Boolean
    }
    
    property set showDecisionRequiredOnly ($arg :  boolean) {
      setRequireValue("showDecisionRequiredOnly", 0, $arg)
    }
    
    property get treeNode () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("treeNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set treeNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("treeNode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDetailsComparisonPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends ClauseDetailsComparisonPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowTree at ClauseDetailsComparisonPanelSet.pcf: line 52, column 28
    function checkBoxVisible_34 () : java.lang.Boolean {
      return rowPresenter.Selectable and not rowPresenter.ReadOnly
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 81, column 80
    function fontColor_13 () : java.lang.Object {
      return rowPresenter.AvailabilityColor
    }
    
    // 'value' attribute on TextCell (id=Item_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 73, column 57
    function valueRoot_11 () : java.lang.Object {
      return rowPresenter
    }
    
    // 'value' attribute on TextCell (id=Item_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 73, column 57
    function value_10 () : java.lang.String {
      return rowPresenter.Description
    }
    
    // 'value' attribute on TextCell (id=CurrentValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 81, column 80
    function value_14 () : java.lang.String {
      return rowPresenter.CurrentValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 89, column 75
    function value_20 () : java.lang.String {
      return rowPresenter.NewValue
    }
    
    // 'value' attribute on TextCell (id=AdoptedValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 97, column 79
    function value_26 () : java.lang.String {
      return rowPresenter.AdoptedValue
    }
    
    // 'value' attribute on TextCell (id=Decision_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 104, column 80
    function value_31 () : java.lang.String {
      return rowPresenter.DecisionLabel
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 81, column 80
    function verifyFontColorIsAllowedType_16 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 81, column 80
    function verifyFontColorIsAllowedType_16 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 89, column 75
    function verifyFontColorIsAllowedType_22 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 89, column 75
    function verifyFontColorIsAllowedType_22 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 97, column 79
    function verifyFontColorIsAllowedType_28 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 97, column 79
    function verifyFontColorIsAllowedType_28 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 81, column 80
    function verifyFontColor_17 () : void {
      var __fontColorArg = rowPresenter.AvailabilityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_16(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 89, column 75
    function verifyFontColor_23 () : void {
      var __fontColorArg = rowPresenter.AvailabilityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_22(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at ClauseDetailsComparisonPanelSet.pcf: line 97, column 79
    function verifyFontColor_29 () : void {
      var __fontColorArg = rowPresenter.AvailabilityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_28(__fontColorArg)
    }
    
    property get rowPresenter () : gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter
    }
    
    
  }
  
  
}