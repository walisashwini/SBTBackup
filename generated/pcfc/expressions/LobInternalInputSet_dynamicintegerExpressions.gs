package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicinteger.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_dynamicintegerExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicinteger.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=Input_Input) at LobInternalInputSet.dynamicinteger.pcf: line 17, column 70
    function confirmMessage_1 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.dynamicinteger.pcf: line 17, column 70
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.IntegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'label' attribute on TextInput (id=Input_Input) at LobInternalInputSet.dynamicinteger.pcf: line 17, column 70
    function label_2 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobInternalInputSet.dynamicinteger.pcf: line 19, column 44
    function onChange_0 () : void {
      displayable.onChange()
    }
    
    // 'required' attribute on TextInput (id=Input_Input) at LobInternalInputSet.dynamicinteger.pcf: line 17, column 70
    function required_3 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.dynamicinteger.pcf: line 17, column 70
    function valueRoot_6 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.dynamicinteger.pcf: line 17, column 70
    function value_4 () : java.lang.Integer {
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