package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicrangeradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_dynamicrangeradioExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicrangeradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function confirmMessage_1 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'label' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function label_2 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobInternalInputSet.dynamicrangeradio.pcf: line 22, column 44
    function onChange_0 () : void {
      displayable.onChange()
    }
    
    // 'required' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function required_3 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function valueRange_7 () : java.lang.Object {
      return displayable.ValueRange
    }
    
    // 'value' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function valueRoot_6 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function value_4 () : java.lang.Object {
      return displayable.Value
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Input_Input) at LobInternalInputSet.dynamicrangeradio.pcf: line 20, column 43
    function verifyValueRange_9 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}