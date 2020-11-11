package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.searchablerange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_searchablerangeExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.searchablerange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function action_1 () : void {
      LobRangeSearchPopup.push(displayable)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function action_dest_2 () : pcf.api.Destination {
      return pcf.LobRangeSearchPopup.createDestination(displayable)
    }
    
    // 'confirmMessage' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function confirmMessage_4 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'label' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function label_5 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobInternalInputSet.searchablerange.pcf: line 23, column 67
    function onChange_0 () : void {
      displayable.onChangeWithoutInfosAndWarnings()
    }
    
    // 'onPick' attribute on PickerMenuItem (id=Search) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function onPick_3 (PickedValue :  gw.lob.common.search.LobQueryResultRow) : void {
      displayable.Value = PickedValue.Value
    }
    
    // 'required' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function required_6 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function valueRange_10 () : java.lang.Object {
      return displayable.ValueRange
    }
    
    // 'value' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function valueRoot_9 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function value_7 () : java.lang.Object {
      return displayable.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Input_Input) at LobInternalInputSet.searchablerange.pcf: line 21, column 36
    function verifyValueRange_12 () : void {
      var __valueRangeArg = displayable.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}