package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CoverageCategoryInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coveragePatterns :  gw.api.productmodel.CoveragePattern[], $coverable :  Coverable, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.CoverageCategoryInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$coveragePatterns, $coverable, $openForEdit})
  }
  
  function refreshVariables ($coveragePatterns :  gw.api.productmodel.CoveragePattern[], $coverable :  Coverable, $openForEdit :  boolean) : void {
    __widgetOf(this, pcf.CoverageCategoryInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$coveragePatterns, $coverable, $openForEdit})
  }
  
  
}