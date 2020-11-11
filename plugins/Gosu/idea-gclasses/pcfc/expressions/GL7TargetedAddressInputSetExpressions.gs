package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TargetedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7TargetedAddressInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TargetedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7TargetedAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at GL7TargetedAddressInputSet.pcf: line 21, column 33
    function def_onEnter_0 (def :  pcf.GL7GlobalAddressInputSet) : void {
      def.onEnter(addressOwner, presenter)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at GL7TargetedAddressInputSet.pcf: line 21, column 33
    function def_refreshVariables_1 (def :  pcf.GL7GlobalAddressInputSet) : void {
      def.refreshVariables(addressOwner, presenter)
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at GL7TargetedAddressInputSet.pcf: line 21, column 33
    function mode_2 () : java.lang.Object {
      return addressOwner.SelectedMode
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7LocationPresenter {
      return getRequireValue("presenter", 0) as gw.lob.gl7.presenters.GL7LocationPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7LocationPresenter) {
      setRequireValue("presenter", 0, $arg)
    }
    
    
  }
  
  
}