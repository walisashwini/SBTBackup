package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7CoveragePatternSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7CoveragePatternSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 25, column 24
    function sortValue_0 (clauseSpec :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec) : java.lang.Object {
      return clauseSpec.Pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=sublineType_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 29, column 51
    function sortValue_1 (clauseSpec :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec) : java.lang.Object {
      return clauseSpec.Subline.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 35, column 24
    function sortValue_2 (clauseSpec :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec) : java.lang.Object {
      return clauseSpec.Pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 39, column 50
    function sortValue_3 (clauseSpec :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec) : java.lang.Object {
      return clauseSpec.Pattern.ClauseName
    }
    
    // 'value' attribute on RowIterator at GL7CoveragePatternSearchResultsLV.pcf: line 18, column 81
    function value_16 () : gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[] {
      return clauseSpecs
    }
    
    property get clauseSpecs () : gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[] {
      return getRequireValue("clauseSpecs", 0) as gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[]
    }
    
    property set clauseSpecs ($arg :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[]) {
      setRequireValue("clauseSpecs", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GL7CoveragePatternSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 35, column 24
    function valueRoot_11 () : java.lang.Object {
      return clauseSpec.Pattern.CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 25, column 24
    function valueRoot_5 () : java.lang.Object {
      return clauseSpec.Pattern
    }
    
    // 'value' attribute on TextCell (id=sublineType_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 29, column 51
    function valueRoot_8 () : java.lang.Object {
      return clauseSpec.Subline
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 35, column 24
    function value_10 () : java.lang.String {
      return clauseSpec.Pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 39, column 50
    function value_13 () : java.lang.String {
      return clauseSpec.Pattern.ClauseName
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 25, column 24
    function value_4 () : java.lang.String {
      return clauseSpec.Pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=sublineType_Cell) at GL7CoveragePatternSearchResultsLV.pcf: line 29, column 51
    function value_7 () : java.lang.String {
      return clauseSpec.Subline.DisplayName
    }
    
    property get clauseSpec () : gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec
    }
    
    
  }
  
  
}