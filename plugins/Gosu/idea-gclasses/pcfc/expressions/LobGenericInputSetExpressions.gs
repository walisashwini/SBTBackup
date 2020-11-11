package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobGenericInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobGenericInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobGenericInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobGenericInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function confirmMessage_2 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = __VALUE_TO_SET
    }
    
    // 'editable' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function editable_0 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function label_3 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at LobGenericInputSet.pcf: line 29, column 44
    function onChange_12 () : void {
      displayable.onChange()
    }
    
    // 'required' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function required_4 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function valueRoot_7 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function value_5 () : java.lang.Object {
      return displayable.Value
    }
    
    // 'visible' attribute on TextInput (id=LobGenericInput_Input) at LobGenericInputSet.pcf: line 18, column 47
    function visible_1 () : java.lang.Boolean {
      return not displayable.NeedsRefresh
    }
    
    // 'visible' attribute on TextInput (id=DynamicLobGenericInput_Input) at LobGenericInputSet.pcf: line 27, column 42
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