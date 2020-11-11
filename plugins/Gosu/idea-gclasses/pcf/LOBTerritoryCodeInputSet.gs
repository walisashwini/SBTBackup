package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/LOBTerritoryCodeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LOBTerritoryCodeInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($polLocation :  PolicyLocation) : void {
    __widgetOf(this, pcf.LOBTerritoryCodeInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$polLocation})
  }
  
  function refreshVariables ($polLocation :  PolicyLocation) : void {
    __widgetOf(this, pcf.LOBTerritoryCodeInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$polLocation})
  }
  
  
}