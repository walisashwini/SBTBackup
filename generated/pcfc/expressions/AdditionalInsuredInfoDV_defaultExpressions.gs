package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredInfoDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalInsuredInfoDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/AdditionalInsuredInfoDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalInsuredInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AdditionalInsuredInfoDV.default.pcf: line 17, column 106
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyAddlInsuredDetail.AdditionalInsuredType = (__VALUE_TO_SET as typekey.AdditionalInsuredType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AdditionalInsuredInfoDV.default.pcf: line 17, column 106
    function valueRoot_2 () : java.lang.Object {
      return policyAddlInsuredDetail
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AdditionalInsuredInfoDV.default.pcf: line 17, column 106
    function value_0 () : typekey.AdditionalInsuredType {
      return policyAddlInsuredDetail.AdditionalInsuredType
    }
    
    property get policyAddlInsuredDetail () : entity.PolicyAddlInsuredDetail {
      return getRequireValue("policyAddlInsuredDetail", 0) as entity.PolicyAddlInsuredDetail
    }
    
    property set policyAddlInsuredDetail ($arg :  entity.PolicyAddlInsuredDetail) {
      setRequireValue("policyAddlInsuredDetail", 0, $arg)
    }
    
    
  }
  
  
}