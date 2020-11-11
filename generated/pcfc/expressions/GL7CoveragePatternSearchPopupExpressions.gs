package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7CoveragePatternSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7CoveragePatternSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (presenter :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter) : int {
      return 0
    }
    
    // 'title' attribute on Popup (id=GL7CoveragePatternSearchPopup) at GL7CoveragePatternSearchPopup.pcf: line 9, column 29
    static function title_8 (presenter :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter) : java.lang.Object {
      return presenter.Title
    }
    
    override property get CurrentLocation () : pcf.GL7CoveragePatternSearchPopup {
      return super.CurrentLocation as pcf.GL7CoveragePatternSearchPopup
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7CoverageSearchPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7CoverageSearchPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends GL7CoveragePatternSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at GL7CoveragePatternSearchPopup.pcf: line 35, column 52
    function allCheckedRowsAction_3 (CheckedValues :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[], CheckedValuesErrors :  java.util.Map) : void {
      presenter.addCoverages(CheckedValues); CurrentLocation.commit()
    }
    
    // 'def' attribute on PanelRef at GL7CoveragePatternSearchPopup.pcf: line 27, column 133
    function def_onEnter_0 (def :  pcf.CoveragePatternSearchDV) : void {
      def.onEnter(presenter.SearchCriteria, presenter.PolicyLinePattern, presenter.CoverageCategories, true)
    }
    
    // 'def' attribute on PanelRef at GL7CoveragePatternSearchPopup.pcf: line 29, column 64
    function def_onEnter_4 (def :  pcf.GL7CoveragePatternSearchResultsLV) : void {
      def.onEnter(clauseSpecs)
    }
    
    // 'def' attribute on PanelRef at GL7CoveragePatternSearchPopup.pcf: line 27, column 133
    function def_refreshVariables_1 (def :  pcf.CoveragePatternSearchDV) : void {
      def.refreshVariables(presenter.SearchCriteria, presenter.PolicyLinePattern, presenter.CoverageCategories, true)
    }
    
    // 'def' attribute on PanelRef at GL7CoveragePatternSearchPopup.pcf: line 29, column 64
    function def_refreshVariables_5 (def :  pcf.GL7CoveragePatternSearchResultsLV) : void {
      def.refreshVariables(clauseSpecs)
    }
    
    // 'label' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at GL7CoveragePatternSearchPopup.pcf: line 35, column 52
    function label_2 () : java.lang.Object {
      return presenter.SearchActionLabel
    }
    
    // 'searchCriteria' attribute on SearchPanel at GL7CoveragePatternSearchPopup.pcf: line 25, column 91
    function searchCriteria_7 () : gw.productmodel.ClausePatternSearchCriteria {
      return presenter.initializeSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at GL7CoveragePatternSearchPopup.pcf: line 25, column 91
    function search_6 () : java.lang.Object {
      return presenter.searchResults()
    }
    
    property get clauseSpecs () : gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[] {
      return getResultsValue(1) as gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[]
    }
    
    property get searchCriteria () : gw.productmodel.ClausePatternSearchCriteria {
      return getCriteriaValue(1) as gw.productmodel.ClausePatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.productmodel.ClausePatternSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}