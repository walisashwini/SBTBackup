package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7CoveragePatternSearchResultsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($clauseSpecs :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[]) : void {
    __widgetOf(this, pcf.GL7CoveragePatternSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(false, {$clauseSpecs})
  }
  
  function refreshVariables ($clauseSpecs :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[]) : void {
    __widgetOf(this, pcf.GL7CoveragePatternSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(true, {$clauseSpecs})
  }
  
  
}