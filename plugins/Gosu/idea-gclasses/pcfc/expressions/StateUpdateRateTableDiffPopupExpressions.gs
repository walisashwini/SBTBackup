package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateRateTableDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends StateUpdateRateTableDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=NodeLV) at StateUpdateRateTableDiffPopup.pcf: line 129, column 191
    function checkBoxVisible_71 () : java.lang.Boolean {
      return factorRow.IsDecisionRequired and not factorRow.ReadOnly
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 161, column 71
    function fontColor_44 () : java.lang.Object {
      return factorRow.Color
    }
    
    // 'value' attribute on TextCell (id=CurrentRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 161, column 71
    function valueRoot_46 () : java.lang.Object {
      return factorRow
    }
    
    // 'value' attribute on CellIterator (id=ParameterIterator) at StateUpdateRateTableDiffPopup.pcf: line 149, column 68
    function value_43 () : gw.util.IOrderedList<String> {
      return factorRow.ParameterValues
    }
    
    // 'value' attribute on TextCell (id=CurrentRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 161, column 71
    function value_45 () : java.lang.String {
      return factorRow.CurrentValue
    }
    
    // 'value' attribute on TextCell (id=NewRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 167, column 71
    function value_51 () : java.lang.String {
      return factorRow.NewValue
    }
    
    // 'value' attribute on TextCell (id=AdoptedRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 173, column 71
    function value_57 () : java.lang.String {
      return factorRow.AdoptedValue
    }
    
    // 'value' attribute on TextCell (id=DiffRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 179, column 63
    function value_63 () : java.lang.String {
      return factorRow.DiffValue
    }
    
    // 'value' attribute on TextCell (id=Decision_Cell) at StateUpdateRateTableDiffPopup.pcf: line 185, column 71
    function value_68 () : java.lang.String {
      return factorRow.DecisionLabel
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 161, column 71
    function verifyFontColorIsAllowedType_47 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 161, column 71
    function verifyFontColorIsAllowedType_47 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 167, column 71
    function verifyFontColorIsAllowedType_53 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 167, column 71
    function verifyFontColorIsAllowedType_53 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 173, column 71
    function verifyFontColorIsAllowedType_59 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 173, column 71
    function verifyFontColorIsAllowedType_59 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=DiffRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 179, column 63
    function verifyFontColorIsAllowedType_65 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=DiffRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 179, column 63
    function verifyFontColorIsAllowedType_65 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 161, column 71
    function verifyFontColor_48 () : void {
      var __fontColorArg = factorRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_47(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=NewRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 167, column 71
    function verifyFontColor_54 () : void {
      var __fontColorArg = factorRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_53(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 173, column 71
    function verifyFontColor_60 () : void {
      var __fontColorArg = factorRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_59(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=DiffRate_Cell) at StateUpdateRateTableDiffPopup.pcf: line 179, column 63
    function verifyFontColor_66 () : void {
      var __fontColorArg = factorRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_65(__fontColorArg)
    }
    
    property get factorRow () : gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ParameterValue_Cell) at StateUpdateRateTableDiffPopup.pcf: line 154, column 38
    function value_41 () : java.lang.String {
      return param
    }
    
    property get param () : String {
      return getIteratedValue(2) as String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StateUpdateRateTableDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RateParameterHeader_Cell) at StateUpdateRateTableDiffPopup.pcf: line 97, column 71
    function value_22 () : java.lang.String {
      return paramHeader
    }
    
    property get paramHeader () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateRateTableDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (comparisonPresenter :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=StateUpdateRateTableDiffPopup) at StateUpdateRateTableDiffPopup.pcf: line 10, column 99
    function afterCancel_73 () : void {
      comparisonPresenter.revertChanges()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=ClearDecision) at StateUpdateRateTableDiffPopup.pcf: line 77, column 107
    function allCheckedRowsAction_17 (CheckedValues :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = null })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Accept) at StateUpdateRateTableDiffPopup.pcf: line 81, column 140
    function allCheckedRowsAction_19 (CheckedValues :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.ACCEPT })
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Reject) at StateUpdateRateTableDiffPopup.pcf: line 85, column 140
    function allCheckedRowsAction_21 (CheckedValues :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each( \ cv -> { cv.Decision = gw.sbt.model.UpdateDecision.REJECT })
    }
    
    // 'cacheKey' attribute on ToolbarFilter at StateUpdateRateTableDiffPopup.pcf: line 133, column 31
    function cacheKey_40 () : java.lang.String {
      return gw.sbt.pca.view.presenter.PresenterUtil.filterCacheKey()
    }
    
    // 'def' attribute on PanelRef at StateUpdateRateTableDiffPopup.pcf: line 31, column 161
    function def_onEnter_3 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(comparisonPresenter.DecisionAndInstructions, comparisonPresenter.Description, comparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at StateUpdateRateTableDiffPopup.pcf: line 31, column 161
    function def_refreshVariables_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(comparisonPresenter.DecisionAndInstructions, comparisonPresenter.Description, comparisonPresenter.ReadOnly)
    }
    
    // 'filter' attribute on ToolbarFilterOption at StateUpdateRateTableDiffPopup.pcf: line 136, column 37
    function filter_37 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.All
    }
    
    // 'filter' attribute on ToolbarFilterOption at StateUpdateRateTableDiffPopup.pcf: line 140, column 37
    function filter_38 () : gw.api.filters.IFilter {
      return gw.sbt.pca.view.filter.ComparisonFilters.forDetailsPage().DecisionRequired
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at StateUpdateRateTableDiffPopup.pcf: line 142, column 112
    function filters_39 () : gw.api.filters.IFilter[] {
      return gw.sbt.pca.view.filter.ComparisonFilters.forDetailsPage().DifferenceFilterGroup
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Accept) at StateUpdateRateTableDiffPopup.pcf: line 81, column 140
    function label_18 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(gw.sbt.model.UpdateDecision.ACCEPT)
    }
    
    // EditButtons at StateUpdateRateTableDiffPopup.pcf: line 28, column 61
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=Reject) at StateUpdateRateTableDiffPopup.pcf: line 85, column 140
    function label_20 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(gw.sbt.model.UpdateDecision.REJECT)
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at StateUpdateRateTableDiffPopup.pcf: line 41, column 84
    function valueRoot_6 () : java.lang.Object {
      return comparisonPresenter
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at StateUpdateRateTableDiffPopup.pcf: line 53, column 81
    function value_11 () : java.lang.String {
      return comparisonPresenter.NewConfig
    }
    
    // 'value' attribute on TextInput (id=CurrentConfig_Input) at StateUpdateRateTableDiffPopup.pcf: line 59, column 85
    function value_14 () : java.lang.String {
      return comparisonPresenter.CurrentConfig
    }
    
    // 'value' attribute on CellIterator (id=RateParameterHeadingIterator) at StateUpdateRateTableDiffPopup.pcf: line 94, column 113
    function value_24 () : java.util.List<java.lang.String> {
      return comparisonPresenter.ParameterNames
    }
    
    // 'value' attribute on TextCell (id=CurrentValueHeader_Cell) at StateUpdateRateTableDiffPopup.pcf: line 102, column 90
    function value_25 () : java.lang.String {
      return comparisonPresenter.CurrentTitle
    }
    
    // 'value' attribute on TextCell (id=NewValueHeader_Cell) at StateUpdateRateTableDiffPopup.pcf: line 106, column 86
    function value_28 () : java.lang.String {
      return comparisonPresenter.NewTitle
    }
    
    // 'value' attribute on TextCell (id=AdoptedValueHeader_Cell) at StateUpdateRateTableDiffPopup.pcf: line 110, column 90
    function value_31 () : java.lang.String {
      return comparisonPresenter.AdoptedTitle
    }
    
    // 'value' attribute on TextCell (id=DiffValueHeader1_Cell) at StateUpdateRateTableDiffPopup.pcf: line 114, column 87
    function value_34 () : java.lang.String {
      return comparisonPresenter.DiffTitle
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at StateUpdateRateTableDiffPopup.pcf: line 41, column 84
    function value_5 () : java.lang.String {
      return comparisonPresenter.Jurisdiction
    }
    
    // 'value' attribute on RowIterator (id=NodeLV) at StateUpdateRateTableDiffPopup.pcf: line 129, column 191
    function value_72 () : java.util.List<gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableFactorRowComparisonPresenter> {
      return comparisonPresenter.Children
    }
    
    // 'value' attribute on TextInput (id=Line_Input) at StateUpdateRateTableDiffPopup.pcf: line 47, column 83
    function value_8 () : java.lang.String {
      return comparisonPresenter.Description
    }
    
    // 'cancelVisible' attribute on EditButtons at StateUpdateRateTableDiffPopup.pcf: line 28, column 61
    function visible_0 () : java.lang.Boolean {
      return not comparisonPresenter.ReadOnly
    }
    
    override property get CurrentLocation () : pcf.StateUpdateRateTableDiffPopup {
      return super.CurrentLocation as pcf.StateUpdateRateTableDiffPopup
    }
    
    property get adoptedSBTUpdateEdition () : String {
      return getVariableValue("adoptedSBTUpdateEdition", 0) as String
    }
    
    property set adoptedSBTUpdateEdition ($arg :  String) {
      setVariableValue("adoptedSBTUpdateEdition", 0, $arg)
    }
    
    property get comparisonPresenter () : gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableComparisonPresenter {
      return getVariableValue("comparisonPresenter", 0) as gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableComparisonPresenter
    }
    
    property set comparisonPresenter ($arg :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableComparisonPresenter) {
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