package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/RangeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RangeInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/RangeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RangeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function confirmMessage_3 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'editable' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function editable_1 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function label_4 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at RangeInputSet.pcf: line 29, column 50
    function onChange_0 () : void {
      displayable.onChange(wizard)
    }
    
    // 'onChange' attribute on PostOnChange at RangeInputSet.pcf: line 44, column 50
    function onChange_18 () : void {
      displayable.onChange(wizard)
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function optionGroupLabel_10 (VALUE :  java.lang.Object) : java.lang.String {
      return displayable.getOptionGroupLabel(VALUE)
    }
    
    // 'required' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function required_6 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'showConfirmMessage' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function showConfirmMessage_5 () : java.lang.Boolean {
      return displayable.ShowConfirmMessage
    }
    
    // 'valueRange' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function valueRange_11 () : java.lang.Object {
      return displayable.ValueRange
    }
    
    // 'value' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function valueRoot_9 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function value_7 () : java.lang.Object {
      return displayable.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FieldDependencyDisplayable_Input) at RangeInputSet.pcf: line 42, column 62
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FieldDependencyDisplayable_Input) at RangeInputSet.pcf: line 42, column 62
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function verifyValueRange_13 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=FieldDependencyDisplayable_Input) at RangeInputSet.pcf: line 42, column 62
    function verifyValueRange_31 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Displayable_Input) at RangeInputSet.pcf: line 27, column 66
    function visible_2 () : java.lang.Boolean {
      return not fieldDependencyInput and displayable.Visible
    }
    
    // 'visible' attribute on RangeInput (id=FieldDependencyDisplayable_Input) at RangeInputSet.pcf: line 42, column 62
    function visible_20 () : java.lang.Boolean {
      return fieldDependencyInput and displayable.Visible
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.Displayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    property get fieldDependencyInput () : boolean {
      return getRequireValue("fieldDependencyInput", 0) as java.lang.Boolean
    }
    
    property set fieldDependencyInput ($arg :  boolean) {
      setRequireValue("fieldDependencyInput", 0, $arg)
    }
    
    property get wizard () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("wizard", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set wizard ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}