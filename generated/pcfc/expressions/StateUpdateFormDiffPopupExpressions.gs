package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateFormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateFormDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateFormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends StateUpdateFormDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PropertyLabel_Cell) at StateUpdateFormDiffPopup.pcf: line 75, column 34
    function valueRoot_28 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=PropertyLabel_Cell) at StateUpdateFormDiffPopup.pcf: line 75, column 34
    function value_27 () : java.lang.String {
      return row.Label
    }
    
    // 'value' attribute on CellIterator at StateUpdateFormDiffPopup.pcf: line 79, column 85
    function value_35 () : java.util.List<java.lang.String> {
      return row.Values
    }
    
    property get row () : gw.sbt.pca.view.presenter.compare.FormComparisonPresenter.DetailsRow {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.compare.FormComparisonPresenter.DetailsRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateFormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=PropertyValue_Cell) at StateUpdateFormDiffPopup.pcf: line 83, column 45
    function fontColor_30 () : java.lang.Object {
      return row.ValueColor
    }
    
    // 'value' attribute on TextCell (id=PropertyValue_Cell) at StateUpdateFormDiffPopup.pcf: line 83, column 45
    function value_31 () : java.lang.String {
      return value
    }
    
    // 'fontColor' attribute on TextCell (id=PropertyValue_Cell) at StateUpdateFormDiffPopup.pcf: line 83, column 45
    function verifyFontColorIsAllowedType_32 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=PropertyValue_Cell) at StateUpdateFormDiffPopup.pcf: line 83, column 45
    function verifyFontColorIsAllowedType_32 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=PropertyValue_Cell) at StateUpdateFormDiffPopup.pcf: line 83, column 45
    function verifyFontColor_33 () : void {
      var __fontColorArg = row.ValueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_32(__fontColorArg)
    }
    
    property get value () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateFormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StateUpdateFormDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=VersionHeader_Cell) at StateUpdateFormDiffPopup.pcf: line 65, column 67
    function value_24 () : java.lang.String {
      return versionHeader
    }
    
    property get versionHeader () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateFormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateFormDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formComparisonPresenter :  gw.sbt.pca.view.presenter.compare.FormComparisonPresenter) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=StateUpdateFormDiffPopup) at StateUpdateFormDiffPopup.pcf: line 10, column 96
    function afterCancel_37 () : void {
      formComparisonPresenter.revertChanges()
    }
    
    // 'def' attribute on PanelRef at StateUpdateFormDiffPopup.pcf: line 24, column 177
    function def_onEnter_3 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(formComparisonPresenter.DecisionAndInstructions, formComparisonPresenter.FullDescription, formComparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at StateUpdateFormDiffPopup.pcf: line 24, column 177
    function def_refreshVariables_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(formComparisonPresenter.DecisionAndInstructions, formComparisonPresenter.FullDescription, formComparisonPresenter.ReadOnly)
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      formComparisonPresenter.Decision = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function editable_14 () : java.lang.Boolean {
      return not formComparisonPresenter.ReadOnly and (formComparisonPresenter.DecisionAndInstructions.Decision == null or formComparisonPresenter.DecisionAndInstructions.Decision != gw.sbt.model.UpdateDecision.NOT_REQUIRED) 
    }
    
    // EditButtons at StateUpdateFormDiffPopup.pcf: line 21, column 65
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'noneSelectedLabel' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function noneSelectedLabel_18 () : java.lang.String {
      return formComparisonPresenter.NoDecisionSelectedLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function valueRange_19 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.UserSelectableComparisonDecisionDescriptions
    }
    
    // 'value' attribute on TextInput (id=Form_Input) at StateUpdateFormDiffPopup.pcf: line 32, column 91
    function valueRoot_6 () : java.lang.Object {
      return formComparisonPresenter
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at StateUpdateFormDiffPopup.pcf: line 44, column 89
    function value_11 () : java.lang.String {
      return formComparisonPresenter.NewSBTEdition
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function value_15 () : java.lang.String {
      return formComparisonPresenter.Decision
    }
    
    // 'value' attribute on CellIterator (id=VersionHeaders) at StateUpdateFormDiffPopup.pcf: line 62, column 118
    function value_26 () : java.util.List<java.lang.String> {
      return formComparisonPresenter.DetailsTableHeaderRow
    }
    
    // 'value' attribute on RowIterator at StateUpdateFormDiffPopup.pcf: line 71, column 163
    function value_36 () : java.util.List<gw.sbt.pca.view.presenter.compare.FormComparisonPresenter.DetailsRow> {
      return formComparisonPresenter.DetailsTableRows
    }
    
    // 'value' attribute on TextInput (id=Form_Input) at StateUpdateFormDiffPopup.pcf: line 32, column 91
    function value_5 () : java.lang.String {
      return formComparisonPresenter.FullDescription
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedEffDate_Input) at StateUpdateFormDiffPopup.pcf: line 38, column 93
    function value_8 () : java.lang.String {
      return formComparisonPresenter.AdoptedSBTEdition
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateFormDiffPopup.pcf: line 52, column 138
    function verifyValueRange_21 () : void {
      var __valueRangeArg = gw.sbt.util.DisplayDescriptionHelper.UserSelectableComparisonDecisionDescriptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'cancelVisible' attribute on EditButtons at StateUpdateFormDiffPopup.pcf: line 21, column 65
    function visible_0 () : java.lang.Boolean {
      return not formComparisonPresenter.ReadOnly
    }
    
    override property get CurrentLocation () : pcf.StateUpdateFormDiffPopup {
      return super.CurrentLocation as pcf.StateUpdateFormDiffPopup
    }
    
    property get formComparisonPresenter () : gw.sbt.pca.view.presenter.compare.FormComparisonPresenter {
      return getVariableValue("formComparisonPresenter", 0) as gw.sbt.pca.view.presenter.compare.FormComparisonPresenter
    }
    
    property set formComparisonPresenter ($arg :  gw.sbt.pca.view.presenter.compare.FormComparisonPresenter) {
      setVariableValue("formComparisonPresenter", 0, $arg)
    }
    
    
  }
  
  
}