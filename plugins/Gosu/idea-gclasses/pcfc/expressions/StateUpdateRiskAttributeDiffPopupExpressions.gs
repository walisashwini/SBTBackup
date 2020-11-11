package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRiskAttributeDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StateUpdateRiskAttributeDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRiskAttributeDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StateUpdateRiskAttributeDiffPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 117, column 71
    function fontColor_37 () : java.lang.Object {
      return propertyRow.Color
    }
    
    // 'value' attribute on TextCell (id=PropName_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 111, column 71
    function valueRoot_35 () : java.lang.Object {
      return propertyRow
    }
    
    // 'value' attribute on TextCell (id=PropName_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 111, column 71
    function value_34 () : java.lang.String {
      return propertyRow.Description
    }
    
    // 'value' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 117, column 71
    function value_38 () : java.lang.String {
      return propertyRow.CurrentValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 123, column 71
    function value_44 () : java.lang.String {
      return propertyRow.NewValue
    }
    
    // 'value' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 129, column 71
    function value_50 () : java.lang.String {
      return propertyRow.AdoptedValue
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 117, column 71
    function verifyFontColorIsAllowedType_40 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 117, column 71
    function verifyFontColorIsAllowedType_40 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 123, column 71
    function verifyFontColorIsAllowedType_46 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 123, column 71
    function verifyFontColorIsAllowedType_46 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 129, column 71
    function verifyFontColorIsAllowedType_52 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 129, column 71
    function verifyFontColorIsAllowedType_52 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=CurrentValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 117, column 71
    function verifyFontColor_41 () : void {
      var __fontColorArg = propertyRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_40(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=NewValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 123, column 71
    function verifyFontColor_47 () : void {
      var __fontColorArg = propertyRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_46(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=AdoptedValue_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 129, column 71
    function verifyFontColor_53 () : void {
      var __fontColorArg = propertyRow.Color
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_52(__fontColorArg)
    }
    
    property get propertyRow () : gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributePropertyComparisonPresenter {
      return getIteratedValue(1) as gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributePropertyComparisonPresenter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRiskAttributeDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateUpdateRiskAttributeDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (comparisonPresenter :  gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributeComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=StateUpdateRiskAttributeDiffPopup) at StateUpdateRiskAttributeDiffPopup.pcf: line 10, column 95
    function afterCancel_56 () : void {
      comparisonPresenter.revertChanges()
    }
    
    // 'def' attribute on PanelRef at StateUpdateRiskAttributeDiffPopup.pcf: line 31, column 161
    function def_onEnter_3 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(comparisonPresenter.DecisionAndInstructions, comparisonPresenter.Description, comparisonPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at StateUpdateRiskAttributeDiffPopup.pcf: line 31, column 161
    function def_refreshVariables_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(comparisonPresenter.DecisionAndInstructions, comparisonPresenter.Description, comparisonPresenter.ReadOnly)
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      comparisonPresenter.DecisionLabel = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function editable_15 () : java.lang.Boolean {
      return not comparisonPresenter.ReadOnly and (comparisonPresenter.DecisionAndInstructions.Decision == null or comparisonPresenter.DecisionAndInstructions.Decision != gw.sbt.model.UpdateDecision.NOT_REQUIRED)
    }
    
    // EditButtons at StateUpdateRiskAttributeDiffPopup.pcf: line 28, column 61
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'noneSelectedLabel' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function noneSelectedLabel_19 () : java.lang.String {
      return comparisonPresenter.NoDecisionSelectedLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function valueRange_20 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.UserSelectableComparisonDecisionDescriptions
    }
    
    // 'value' attribute on TextInput (id=riskEntity_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 39, column 82
    function valueRoot_6 () : java.lang.Object {
      return comparisonPresenter
    }
    
    // 'value' attribute on TextInput (id=LatestAdoptedEffDate_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 51, column 75
    function value_11 () : java.lang.String {
      return adoptedSBTUpdateEdition
    }
    
    // 'value' attribute on TextInput (id=EffDate_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 57, column 71
    function value_13 () : java.lang.String {
      return newSBTUpdateEdition
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function value_16 () : java.lang.String {
      return comparisonPresenter.DecisionLabel
    }
    
    // 'value' attribute on TextCell (id=CurrentValueHeader_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 89, column 90
    function value_25 () : java.lang.String {
      return comparisonPresenter.CurrentTitle
    }
    
    // 'value' attribute on TextCell (id=NewValueHeader_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 93, column 86
    function value_28 () : java.lang.String {
      return comparisonPresenter.NewTitle
    }
    
    // 'value' attribute on TextCell (id=AdoptedValueHeader_Cell) at StateUpdateRiskAttributeDiffPopup.pcf: line 97, column 90
    function value_31 () : java.lang.String {
      return comparisonPresenter.AdoptedTitle
    }
    
    // 'value' attribute on TextInput (id=riskEntity_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 39, column 82
    function value_5 () : java.lang.String {
      return comparisonPresenter.RiskEntity
    }
    
    // 'value' attribute on RowIterator (id=NodeLV) at StateUpdateRiskAttributeDiffPopup.pcf: line 105, column 140
    function value_55 () : java.util.List<gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributePropertyComparisonPresenter> {
      return comparisonPresenter.PropertyComparisonList
    }
    
    // 'value' attribute on TextInput (id=riskAttribute_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 45, column 83
    function value_8 () : java.lang.String {
      return comparisonPresenter.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at StateUpdateRiskAttributeDiffPopup.pcf: line 69, column 138
    function verifyValueRange_22 () : void {
      var __valueRangeArg = gw.sbt.util.DisplayDescriptionHelper.UserSelectableComparisonDecisionDescriptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'cancelVisible' attribute on EditButtons at StateUpdateRiskAttributeDiffPopup.pcf: line 28, column 61
    function visible_0 () : java.lang.Boolean {
      return not comparisonPresenter.ReadOnly
    }
    
    override property get CurrentLocation () : pcf.StateUpdateRiskAttributeDiffPopup {
      return super.CurrentLocation as pcf.StateUpdateRiskAttributeDiffPopup
    }
    
    property get adoptedSBTUpdateEdition () : String {
      return getVariableValue("adoptedSBTUpdateEdition", 0) as String
    }
    
    property set adoptedSBTUpdateEdition ($arg :  String) {
      setVariableValue("adoptedSBTUpdateEdition", 0, $arg)
    }
    
    property get comparisonPresenter () : gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributeComparisonPresenter {
      return getVariableValue("comparisonPresenter", 0) as gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributeComparisonPresenter
    }
    
    property set comparisonPresenter ($arg :  gw.sbt.pca.view.presenter.compare.StateUpdateRiskAttributeComparisonPresenter) {
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