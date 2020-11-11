package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobIntegerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobIntegerInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobIntegerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobIntegerInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function confirmMessage_2 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.IntegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function editable_0 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function label_3 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobIntegerInputSet.pcf: line 27, column 44
    function onChange_12 () : void {
      displayable.onChange()
    }
    
    // 'required' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function required_4 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function valueRoot_7 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function value_5 () : java.lang.Integer {
      return displayable.IntegerValue
    }
    
    // 'visible' attribute on TextInput (id=LobIntegerInput_Input) at LobIntegerInputSet.pcf: line 17, column 77
    function visible_1 () : java.lang.Boolean {
      return not displayable.NeedsRefresh
    }
    
    // 'visible' attribute on TextInput (id=DynamicLobIntegerInput_Input) at LobIntegerInputSet.pcf: line 25, column 72
    function visible_14 () : java.lang.Boolean {
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