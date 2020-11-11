package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_integerExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=Input_Input) at LobInternalInputSet.integer.pcf: line 17, column 71
    function confirmMessage_0 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.integer.pcf: line 17, column 71
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.IntegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'label' attribute on TextInput (id=Input_Input) at LobInternalInputSet.integer.pcf: line 17, column 71
    function label_1 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'required' attribute on TextInput (id=Input_Input) at LobInternalInputSet.integer.pcf: line 17, column 71
    function required_2 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.integer.pcf: line 17, column 71
    function valueRoot_5 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.integer.pcf: line 17, column 71
    function value_3 () : java.lang.Integer {
      return displayable.IntegerValue
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}