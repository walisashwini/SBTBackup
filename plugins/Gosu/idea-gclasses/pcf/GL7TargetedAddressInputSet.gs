package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7TargetedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7TargetedAddressInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($addressOwner :  gw.api.address.AddressOwner, $presenter :  gw.lob.gl7.presenters.GL7LocationPresenter) : void {
    __widgetOf(this, pcf.GL7TargetedAddressInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$addressOwner, $presenter})
  }
  
  function refreshVariables ($addressOwner :  gw.api.address.AddressOwner, $presenter :  gw.lob.gl7.presenters.GL7LocationPresenter) : void {
    __widgetOf(this, pcf.GL7TargetedAddressInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$addressOwner, $presenter})
  }
  
  
}