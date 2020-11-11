package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobInternalInputSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($displayable :  gw.lob.common.displayable.LobDisplayable) : void {
    __widgetOf(this, pcf.LobInternalInputSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$displayable})
  }
  
  function refreshVariables ($displayable :  gw.lob.common.displayable.LobDisplayable) : void {
    __widgetOf(this, pcf.LobInternalInputSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$displayable})
  }
  
  
}