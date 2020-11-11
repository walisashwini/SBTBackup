package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.decimal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobInternalInputSet_decimalExpressions {
  @javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.decimal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobInternalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=Input_Input) at LobInternalInputSet.decimal.pcf: line 17, column 74
    function confirmMessage_0 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.decimal.pcf: line 17, column 74
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.DecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'label' attribute on TextInput (id=Input_Input) at LobInternalInputSet.decimal.pcf: line 17, column 74
    function label_1 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'required' attribute on TextInput (id=Input_Input) at LobInternalInputSet.decimal.pcf: line 17, column 74
    function required_2 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.decimal.pcf: line 17, column 74
    function valueRoot_5 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=Input_Input) at LobInternalInputSet.decimal.pcf: line 17, column 74
    function value_3 () : java.math.BigDecimal {
      return displayable.DecimalValue
    }
    
    property get displayable () : gw.lob.common.displayable.LobDisplayable {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.LobDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobDisplayable) {
      setRequireValue("displayable", 0, $arg)
    }
    
    
  }
  
  
}