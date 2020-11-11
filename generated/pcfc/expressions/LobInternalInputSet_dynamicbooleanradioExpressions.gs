package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicbooleanradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_dynamicbooleanradioExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicbooleanradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.dynamicbooleanradio.pcf: line 18, column 36
    function confirmMessage_1 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.dynamicbooleanradio.pcf: line 18, column 36
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'label' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.dynamicbooleanradio.pcf: line 18, column 36
    function label_2 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobInternalInputSet.dynamicbooleanradio.pcf: line 20, column 44
    function onChange_0 () : void {
      displayable.onChange()
    }
    
    // 'required' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.dynamicbooleanradio.pcf: line 18, column 36
    function required_3 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.dynamicbooleanradio.pcf: line 18, column 36
    function valueRoot_6 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.dynamicbooleanradio.pcf: line 18, column 36
    function value_4 () : java.lang.Object {
      return displayable.Value
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}