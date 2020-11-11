package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7LocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7LocationDetailInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($presenter :  gw.lob.gl7.presenters.GL7LocationPresenter, $supportsNonSpecificLocation :  boolean, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7LocationDetailInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$presenter, $supportsNonSpecificLocation, $openForEdit})
  }
  
  function refreshVariables ($presenter :  gw.lob.gl7.presenters.GL7LocationPresenter, $supportsNonSpecificLocation :  boolean, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.GL7LocationDetailInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$presenter, $supportsNonSpecificLocation, $openForEdit})
  }
  
  
}