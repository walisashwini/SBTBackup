package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.booleanradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_booleanradioExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.booleanradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.booleanradio.pcf: line 18, column 37
    function confirmMessage_0 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.booleanradio.pcf: line 18, column 37
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'label' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.booleanradio.pcf: line 18, column 37
    function label_1 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'required' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.booleanradio.pcf: line 18, column 37
    function required_2 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.booleanradio.pcf: line 18, column 37
    function valueRoot_5 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on BooleanRadioInput (id=Input_Input) at LobInternalInputSet.booleanradio.pcf: line 18, column 37
    function value_3 () : java.lang.Object {
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