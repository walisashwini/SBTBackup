package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobInternalInputSet.dynamicrangeradio.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobInternalInputSet_dynamicrangeradio extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($displayable :  gw.lob.common.displayable.LobDisplayable) : void {
    __widgetOf(this, pcf.LobInternalInputSet_dynamicrangeradio, SECTION_WIDGET_CLASS).setVariables(false, {$displayable})
  }
  
  function refreshVariables ($displayable :  gw.lob.common.displayable.LobDisplayable) : void {
    __widgetOf(this, pcf.LobInternalInputSet_dynamicrangeradio, SECTION_WIDGET_CLASS).setVariables(true, {$displayable})
  }
  
  
}