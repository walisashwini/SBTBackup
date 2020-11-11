package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_MulitpleSysTableValuesSelectionFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableSysTableRef = (__VALUE_TO_SET as gw.lang.reflect.IPropertyInfo)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=SelectedValues_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 44, column 97
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableSysTableValuesRef = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'value' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableTypeRef = (__VALUE_TO_SET as gw.admin.EntityTypeRef)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SelectionExistence_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 50, column 60
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CovSysTableValueExistsOnAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 15, column 40
    function initialValue_0 () : gw.admin.EntityTypeRef[] {
      return formPattern.CoverableTypeRangeWithoutScheduledItems
    }
    
    // 'optionLabel' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function optionLabel_12 (VALUE :  gw.lang.reflect.IPropertyInfo) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function optionLabel_4 (VALUE :  gw.admin.EntityTypeRef) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function valueRange_13 () : java.lang.Object {
      return formPattern.CoverableSysTableRange
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=SelectedValues_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 44, column 97
    function valueRange_20 () : java.lang.Object {
      return formPattern.CoverableSysTableValuesRange
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function valueRange_5 () : java.lang.Object {
      return coverableTypeRange
    }
    
    // 'value' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function valueRoot_3 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function value_1 () : gw.admin.EntityTypeRef {
      return formPattern.CoverableTypeRef
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=SelectedValues_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 44, column 97
    function value_17 () : java.lang.String[] {
      return formPattern.CoverableSysTableValuesRef
    }
    
    // 'value' attribute on BooleanRadioInput (id=SelectionExistence_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 50, column 60
    function value_24 () : java.lang.Boolean {
      return formPattern.CovSysTableValueExistsOnAll
    }
    
    // 'value' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function value_9 () : gw.lang.reflect.IPropertyInfo {
      return formPattern.CoverableSysTableRef
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.lang.reflect.IPropertyInfo[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=SelectedValues_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 44, column 97
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=SelectedValues_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 44, column 97
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.admin.EntityTypeRef[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 35, column 101
    function verifyValueRange_15 () : void {
      var __valueRangeArg = formPattern.CoverableSysTableRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=SelectedValues_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 44, column 97
    function verifyValueRange_22 () : void {
      var __valueRangeArg = formPattern.CoverableSysTableValuesRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.MulitpleSysTableValuesSelectionForm.pcf: line 25, column 78
    function verifyValueRange_7 () : void {
      var __valueRangeArg = coverableTypeRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get coverableTypeRange () : gw.admin.EntityTypeRef[] {
      return getVariableValue("coverableTypeRange", 0) as gw.admin.EntityTypeRef[]
    }
    
    property set coverableTypeRange ($arg :  gw.admin.EntityTypeRef[]) {
      setVariableValue("coverableTypeRange", 0, $arg)
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}