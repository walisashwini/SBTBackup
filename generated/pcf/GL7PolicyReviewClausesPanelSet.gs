package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewClausesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7PolicyReviewClausesPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($coverable :  Coverable, $coverableCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) : void {
    __widgetOf(this, pcf.GL7PolicyReviewClausesPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$coverable, $coverableCategories})
  }
  
  function refreshVariables ($coverable :  Coverable, $coverableCategories :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) : void {
    __widgetOf(this, pcf.GL7PolicyReviewClausesPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$coverable, $coverableCategories})
  }
  
  
}