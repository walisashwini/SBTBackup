package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.range.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_rangeExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.range.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function confirmMessage_0 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'label' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function label_1 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'required' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function required_2 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function valueRange_6 () : java.lang.Object {
      return displayable.ValueRange
    }
    
    // 'value' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function valueRoot_5 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function value_3 () : java.lang.Object {
      return displayable.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.range.pcf: line 21, column 44
    function verifyValueRange_8 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}