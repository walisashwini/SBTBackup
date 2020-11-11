package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeSearchScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobRangeSearchScreen_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($diaplayable :  gw.lob.common.displayable.LobDisplayable) : void {
    __widgetOf(this, pcf.LobRangeSearchScreen_default, SECTION_WIDGET_CLASS).setVariables(false, {$diaplayable})
  }
  
  function refreshVariables ($diaplayable :  gw.lob.common.displayable.LobDisplayable) : void {
    __widgetOf(this, pcf.LobRangeSearchScreen_default, SECTION_WIDGET_CLASS).setVariables(true, {$diaplayable})
  }
  
  
}