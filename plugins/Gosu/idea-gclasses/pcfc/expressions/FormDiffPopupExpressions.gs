package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/FormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormDiffPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/pca/FormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormDiffPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formDetailsPresenter :  gw.sbt.pca.view.presenter.FormDetailsPresenter) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=FormDiffPopup) at FormDiffPopup.pcf: line 10, column 96
    function afterCancel_39 () : void {
      formDetailsPresenter.revertChanges()
    }
    
    // 'def' attribute on PanelRef at FormDiffPopup.pcf: line 24, column 164
    function def_onEnter_3 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.onEnter(formDetailsPresenter.DecisionAndInstructions, formDetailsPresenter.Description, formDetailsPresenter.ReadOnly)
    }
    
    // 'def' attribute on PanelRef at FormDiffPopup.pcf: line 24, column 164
    function def_refreshVariables_4 (def :  pcf.InstructionsAndDocumentationPanelSet) : void {
      def.refreshVariables(formDetailsPresenter.DecisionAndInstructions, formDetailsPresenter.Description, formDetailsPresenter.ReadOnly)
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      formDetailsPresenter.DecisionLabel = (__VALUE_TO_SET as String)
    }
    
    // EditButtons at FormDiffPopup.pcf: line 21, column 62
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'noneSelectedLabel' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function noneSelectedLabel_9 () : java.lang.String {
      return formDetailsPresenter.DecisionAndInstructions.Decision != null ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClearDecision") : ""
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function valueRange_10 () : java.lang.Object {
      return gw.sbt.util.DisplayDescriptionHelper.UserSelectableDecisionDescriptions
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function valueRoot_8 () : java.lang.Object {
      return formDetailsPresenter
    }
    
    // 'value' attribute on TextInput (id=Form_Input) at FormDiffPopup.pcf: line 42, column 84
    function value_15 () : java.lang.String {
      return formDetailsPresenter.Description
    }
    
    // 'value' attribute on TextInput (id=GroupCode_Input) at FormDiffPopup.pcf: line 49, column 103
    function value_19 () : java.lang.String {
      return formDetailsPresenter.InternalGroupCode
    }
    
    // 'value' attribute on TextInput (id=CWFormVersion_Input) at FormDiffPopup.pcf: line 56, column 112
    function value_24 () : java.lang.String {
      return formDetailsPresenter.cwFormNumberAndDescription
    }
    
    // 'value' attribute on TextInput (id=InferenceMethod_Input) at FormDiffPopup.pcf: line 62, column 88
    function value_28 () : java.lang.String {
      return formDetailsPresenter.InferenceMethod
    }
    
    // 'value' attribute on TextInput (id=InferenceDetails_Input) at FormDiffPopup.pcf: line 68, column 99
    function value_32 () : java.lang.String {
      return formDetailsPresenter.InferenceDetails
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at FormDiffPopup.pcf: line 74, column 87
    function value_36 () : typekey.UpdateDiffType {
      return formDetailsPresenter.DiffType
    }
    
    // 'value' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function value_6 () : String {
      return formDetailsPresenter.DecisionLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function verifyValueRangeIsAllowedType_11 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Decision_Input) at FormDiffPopup.pcf: line 36, column 33
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.sbt.util.DisplayDescriptionHelper.UserSelectableDecisionDescriptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'cancelVisible' attribute on EditButtons at FormDiffPopup.pcf: line 21, column 62
    function visible_0 () : java.lang.Boolean {
      return not formDetailsPresenter.ReadOnly
    }
    
    // 'visible' attribute on TextInput (id=GroupCode_Input) at FormDiffPopup.pcf: line 49, column 103
    function visible_18 () : java.lang.Boolean {
      return formDetailsPresenter.InternalGroupCode.HasContent
    }
    
    // 'visible' attribute on TextInput (id=CWFormVersion_Input) at FormDiffPopup.pcf: line 56, column 112
    function visible_23 () : java.lang.Boolean {
      return formDetailsPresenter.cwFormNumberAndDescription.HasContent
    }
    
    // 'visible' attribute on TextInput (id=InferenceDetails_Input) at FormDiffPopup.pcf: line 68, column 99
    function visible_31 () : java.lang.Boolean {
      return formDetailsPresenter.InferenceDetails != null
    }
    
    override property get CurrentLocation () : pcf.FormDiffPopup {
      return super.CurrentLocation as pcf.FormDiffPopup
    }
    
    property get formDetailsPresenter () : gw.sbt.pca.view.presenter.FormDetailsPresenter {
      return getVariableValue("formDetailsPresenter", 0) as gw.sbt.pca.view.presenter.FormDetailsPresenter
    }
    
    property set formDetailsPresenter ($arg :  gw.sbt.pca.view.presenter.FormDetailsPresenter) {
      setVariableValue("formDetailsPresenter", 0, $arg)
    }
    
    
  }
  
  
}