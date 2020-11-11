package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateBureauCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateBureauCodesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateBureauCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends StateUpdateBureauCodesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=NodeLV) at StateUpdateBureauCodesPopup.pcf: line 126, column 131
    function checkBoxVisible_67 () : java.lang.Boolean {
      return bureauCodeRow.IsDecisionRequired and not bureauCodeRow.ReadOnly
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function fontColor_42 () : java.lang.Object {
      return bureauCodeRow.Color
    }
    
    // 'icon' attribute on BooleanRadioCell (id=DiffIconType_Cell) at StateUpdateBureauCodesPopup.pcf: line 182, column 42
    function icon_63 () : java.lang.String {
      return bureauCodeRow.DiffIconType
    }
    
    // 'value' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function valueRoot_44 () : java.lang.Object {
      return bureauCodeRow
    }
    
    // 'value' attribute on CellIterator (id=ValueIterator) at StateUpdateBureauCodesPopup.pcf: line 146, column 62
    function value_41 () : java.util.List<String> {
      return bureauCodeRow.KeyColumnValues
    }
    
    // 'value' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function value_43 () : java.lang.String {
      return bureauCodeRow.CurrentValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 168, column 51
    function value_50 () : java.lang.String {
      return bureauCodeRow.NewValue
    }
    
    // 'value' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 176, column 51
    function value_57 () : java.lang.String {
      return bureauCodeRow.AdoptedValue
    }
    
    // 'value' attribute on TextCell (id=Decision_Cell) at StateUpdateBureauCodesPopup.pcf: line 189, column 51
    function value_64 () : java.lang.String {
      return bureauCodeRow.DecisionLabel
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function verifyFontColorIsAllowedType_45 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function verifyFontColorIsAllowedType_45 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 168, column 51
    function verifyFontColorIsAllowedType_52 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 168, column 51
    function verifyFontColorIsAllowedType_52 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 176, column 51
    function verifyFontColorIsAllowedType_59 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 176, column 51
    function verifyFontColorIsAllowedType_59 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function verifyFontColor_46 () : void {
      var __fontColorArg = bureauCodeRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_45(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 168, column 51
    function verifyFontColor_53 () : void {
      var __fontColorArg = bureauCodeRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_52(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 176, column 51
    function verifyFontColor_60 () : void {
      var __fontColorArg = bureauCodeRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_59(__fontColorArg)
    }
    
    // 'visible' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateBureauCodesPopup.pcf: line 160, column 51
    function visible_47 () : java.lang.Boolean {
      return bureauCodeRow.HasValueColumn
    }
    
    property get bureauCodeRow () : gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateBureauCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ValueCell_Cell) at StateUpdateBureauCodesPopup.pcf: line 151, column 38
    function value_39 () : java.lang.String {
      return value
    }
    
    property get value () : String {
      return getIteratedValue(2) as String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateBureauCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StateUpdateBureauCodesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=keyColumnNameCell_Cell) at StateUpdateBureauCodesPopup.pcf: line 85, column 51
    function value_14 () : java.lang.String {
      return keyColumnNames
    }
    
    property get keyColumnNames () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateBureauCodesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateBureauCodesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (comparisonPresenter :  gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=StateUpdateBureauCodesPopup) at StateUpdateBureauCodesPopup.pcf: line 10, column 45
    function afterCancel_69 () : void {
      comparisonPresenter.revertChanges()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Accept) at StateUpdateBureauCodesPopup.pcf: line 67, column 140
    function allCheckedRowsAction_11 (CheckedValues :  gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.ACCEPT })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Reject) at StateUpdateBureauCodesPopup.pcf: line 71, column 140
    function allCheckedRowsAction_13 (CheckedValues :  gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.REJECT })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=ClearDecision) at StateUpdateBureauCodesPopup.pcf: line 63, column 107
    function allCheckedRowsAction_9 (CheckedValues :  gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = null })
    }
    
    // 'cacheKey' attribute on ToolbarFilter at StateUpdateBureauCodesPopup.pcf: line 130, column 31
    function cacheKey_38 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.filterCacheKey()
    }
    
    // 'def' attribute on PanelRef at StateUpdateBureauCodesPopup.pcf: line 31, column 161
    function def_onEnter_3 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(comparisonPresenter.DecisionAndInstructions, comparisonPresenter.Description, comparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at StateUpdateBureauCodesPopup.pcf: line 31, column 161
    function def_refreshVariables_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(comparisonPresenter.DecisionAndInstructions, comparisonPresenter.Description, comparisonPresenter.ReadOnly)
    }
    
    // 'filter' attribute on ToolbarFilterOption at StateUpdateBureauCodesPopup.pcf: line 133, column 37
    function filter_35 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.All
    }
    
    // 'filter' attribute on ToolbarFilterOption at StateUpdateBureauCodesPopup.pcf: line 137, column 37
    function filter_36 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.forDetailsPage().DecisionRequired
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at StateUpdateBureauCodesPopup.pcf: line 139, column 112
    function filters_37 () : gw.api.filters.IFilter[] {
      return gw.sbt.pca.view.filter.ComparisonFilters.forDetailsPage().DifferenceFilterGroup
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Accept) at StateUpdateBureauCodesPopup.pcf: line 67, column 140
    function label_10 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(gw.sbt.model.UpdateDecision.ACCEPT)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Reject) at StateUpdateBureauCodesPopup.pcf: line 71, column 140
    function label_12 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(gw.sbt.model.UpdateDecision.REJECT)
    }
    
    // EditButtons at StateUpdateBureauCodesPopup.pcf: line 28, column 61
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'title' attribute on Popup (id=StateUpdateBureauCodesPopup) at StateUpdateBureauCodesPopup.pcf: line 10, column 45
    static function title_71 (adoptedSBTUpdateEdition :  String, comparisonPresenter :  gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesComparisonPresenter, newSBTUpdateEdition :  String) : java.lang.Object {
      return comparisonPresenter.Description
    }
    
    // 'value' attribute on TextCell (id=CurrentValueHeader_Cell) at StateUpdateBureauCodesPopup.pcf: line 92, column 49
    function valueRoot_18 () : java.lang.Object {
      return comparisonPresenter
    }
    
    // 'value' attribute on CellIterator (id=keyColumnNamesIterator) at StateUpdateBureauCodesPopup.pcf: line 81, column 70
    function value_16 () : java.util.List<java.lang.String> {
      return comparisonPresenter.KeyColumnNames
    }
    
    // 'value' attribute on TextCell (id=CurrentValueHeader_Cell) at StateUpdateBureauCodesPopup.pcf: line 92, column 49
    function value_17 () : java.lang.String {
      return comparisonPresenter.CurrentTitle
    }
    
    // 'value' attribute on TextCell (id=NewValueHeader_Cell) at StateUpdateBureauCodesPopup.pcf: line 98, column 49
    function value_21 () : java.lang.String {
      return comparisonPresenter.NewTitle
    }
    
    // 'value' attribute on TextCell (id=AdoptedValueHeader_Cell) at StateUpdateBureauCodesPopup.pcf: line 104, column 49
    function value_25 () : java.lang.String {
      return comparisonPresenter.AdoptedTitle
    }
    
    // 'value' attribute on TextCell (id=DiffValueHeader1_Cell) at StateUpdateBureauCodesPopup.pcf: line 109, column 49
    function value_29 () : java.lang.String {
      return comparisonPresenter.DiffTitle
    }
    
    // 'value' attribute on TextCell (id=DecisionHeader_Cell) at StateUpdateBureauCodesPopup.pcf: line 115, column 49
    function value_32 () : java.lang.String {
      return comparisonPresenter.DecisionTitle
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedEffDate_Input) at StateUpdateBureauCodesPopup.pcf: line 39, column 75
    function value_5 () : java.lang.String {
      return adoptedSBTUpdateEdition
    }
    
    // 'value' attribute on RowIterator (id=NodeLV) at StateUpdateBureauCodesPopup.pcf: line 126, column 131
    function value_68 () : java.util.List<gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodeRowComparisonPresenter> {
      return comparisonPresenter.Children
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at StateUpdateBureauCodesPopup.pcf: line 45, column 71
    function value_7 () : java.lang.String {
      return newSBTUpdateEdition
    }
    
    // 'cancelVisible' attribute on EditButtons at StateUpdateBureauCodesPopup.pcf: line 28, column 61
    function visible_0 () : java.lang.Boolean {
      return not comparisonPresenter.ReadOnly
    }
    
    // 'visible' attribute on TextCell (id=CurrentValueHeader_Cell) at StateUpdateBureauCodesPopup.pcf: line 92, column 49
    function visible_19 () : java.lang.Boolean {
      return comparisonPresenter.HasValueColumn
    }
    
    override property get CurrentLocation () : pcf.StateUpdateBureauCodesPopup {
      return super.CurrentLocation as pcf.StateUpdateBureauCodesPopup
    }
    
    property get adoptedSBTUpdateEdition () : String {
      return getVariableValue("adoptedSBTUpdateEdition", 0) as String
    }
    
    property set adoptedSBTUpdateEdition ($arg :  String) {
      setVariableValue("adoptedSBTUpdateEdition", 0, $arg)
    }
    
    property get comparisonPresenter () : gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesComparisonPresenter {
      return getVariableValue("comparisonPresenter", 0) as gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesComparisonPresenter
    }
    
    property set comparisonPresenter ($arg :  gw.sbt.pca.view.presenter.compare.StateUpdateBureauCodesComparisonPresenter) {
      setVariableValue("comparisonPresenter", 0, $arg)
    }
    
    property get newSBTUpdateEdition () : String {
      return getVariableValue("newSBTUpdateEdition", 0) as String
    }
    
    property set newSBTUpdateEdition ($arg :  String) {
      setVariableValue("newSBTUpdateEdition", 0, $arg)
    }
    
    
  }
  
  
}