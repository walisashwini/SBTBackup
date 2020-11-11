package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobRangeInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobRangeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function confirmMessage_2 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'editable' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function editable_0 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function label_3 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobRangeInputSet.pcf: line 35, column 67
    function onChange_15 () : void {
      displayable.onChangeWithoutInfosAndWarnings()
    }
    
    // 'required' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function required_4 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function valueRange_8 () : java.lang.Object {
      return displayable.ValueRange
    }
    
    // 'value' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function valueRoot_7 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function value_5 () : java.lang.Object {
      return displayable.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=DynamicLobRangeInput_Input) at LobRangeInputSet.pcf: line 33, column 42
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DynamicLobRangeInput_Input) at LobRangeInputSet.pcf: line 33, column 42
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function verifyValueRange_10 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DynamicLobRangeInput_Input) at LobRangeInputSet.pcf: line 33, column 42
    function verifyValueRange_26 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=LobRangeInput_Input) at LobRangeInputSet.pcf: line 21, column 47
    function visible_1 () : java.lang.Boolean {
      return not displayable.NeedsRefresh
    }
    
    // 'visible' attribute on RangeInput (id=DynamicLobRangeInput_Input) at LobRangeInputSet.pcf: line 33, column 42
    function visible_17 () : java.lang.Boolean {
      return displayable.NeedsRefresh
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}