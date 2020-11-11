package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.apd.model.APDClauseSearchCriteria
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDClauseSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDClauseSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (riskCoverable :  APDRiskCoverable, searchType :  CoveragePatternSearchType, coverageCategories :  APDClauseCategory[], userPreferences :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at APDClauseSearchPopup.pcf: line 19, column 28
    function initialValue_0 () : APDCoverable {
      return riskCoverable.Coverable
    }
    
    // 'initialValue' attribute on Variable at APDClauseSearchPopup.pcf: line 32, column 23
    function initialValue_1 () : Boolean {
      return userPreferences.canDesign()
    }
    
    // 'title' attribute on Popup (id=APDClauseSearchPopup) at APDClauseSearchPopup.pcf: line 10, column 248
    static function title_17 (coverageCategories :  APDClauseCategory[], riskCoverable :  APDRiskCoverable, searchType :  CoveragePatternSearchType, userPreferences :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.Title", riskCoverable.DisplayName) : DisplayKey.get("Web.Search.ExclusionAndCondition.Title", riskCoverable.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.APDClauseSearchPopup {
      return super.CurrentLocation as pcf.APDClauseSearchPopup
    }
    
    property get canDesign () : Boolean {
      return getVariableValue("canDesign", 0) as Boolean
    }
    
    property set canDesign ($arg :  Boolean) {
      setVariableValue("canDesign", 0, $arg)
    }
    
    property get coverable () : APDCoverable {
      return getVariableValue("coverable", 0) as APDCoverable
    }
    
    property set coverable ($arg :  APDCoverable) {
      setVariableValue("coverable", 0, $arg)
    }
    
    property get coverageCategories () : APDClauseCategory[] {
      return getVariableValue("coverageCategories", 0) as APDClauseCategory[]
    }
    
    property set coverageCategories ($arg :  APDClauseCategory[]) {
      setVariableValue("coverageCategories", 0, $arg)
    }
    
    property get riskCoverable () : APDRiskCoverable {
      return getVariableValue("riskCoverable", 0) as APDRiskCoverable
    }
    
    property set riskCoverable ($arg :  APDRiskCoverable) {
      setVariableValue("riskCoverable", 0, $arg)
    }
    
    property get searchType () : CoveragePatternSearchType {
      return getVariableValue("searchType", 0) as CoveragePatternSearchType
    }
    
    property set searchType ($arg :  CoveragePatternSearchType) {
      setVariableValue("searchType", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
        function filteredSearchResults(searchCriteria : APDClauseSearchCriteria) : ArrayList<APDClause> {
    
          var results = searchCriteria.doSearch()
    
      /* We should NOT allow duplicate clauses to be added, so we need to filter out those clauses that have already been
         added to the coverable as library clauses. This may render the later removals redundant.*/
          var allExistingRiskClauses = riskCoverable.RiskClauses*.Clause
          var matchingClauses = results.where(\c -> allExistingRiskClauses.hasMatch(\ec -> ec == c)).toList()
          results.removeAll(matchingClauses)
          results.removeAll(results.where(\c -> not coverageCategories.hasMatch(\cc -> cc == c.ClauseCategory)))
          results.removeAll(results.where(\c -> riskCoverable.availability(c) == APDDataExistenceType.TC_UNAVAILABLE))
    
          return results
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDClauseSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends APDClauseSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at APDClauseSearchPopup.pcf: line 53, column 240
    function allCheckedRowsAction_5 (CheckedValues :  APDClause[], CheckedValuesErrors :  java.util.Map) : void {
      CurrentLocation.pickValueAndCommit(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 47, column 87
    function def_onEnter_12 (def :  pcf.APDClauseSearchResultsLV) : void {
      def.onEnter(coveragePatterns, coverable, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 45, column 83
    function def_onEnter_2 (def :  pcf.APDClauseSearchDV) : void {
      def.onEnter(searchCriteria, coverable, coverageCategories)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 47, column 87
    function def_refreshVariables_13 (def :  pcf.APDClauseSearchResultsLV) : void {
      def.refreshVariables(coveragePatterns, coverable, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at APDClauseSearchPopup.pcf: line 45, column 83
    function def_refreshVariables_3 (def :  pcf.APDClauseSearchDV) : void {
      def.refreshVariables(searchCriteria, coverable, coverageCategories)
    }
    
    // 'label' attribute on CheckedValuesToolbarButton (id=AddCoverageButton) at APDClauseSearchPopup.pcf: line 53, column 240
    function label_4 () : java.lang.Object {
      return searchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.AddSelectedCoverages") : DisplayKey.get("Web.Coverage.SearchPage.AddSelectedExclusionsAndConditions")
    }
    
    // 'searchCriteria' attribute on SearchPanel at APDClauseSearchPopup.pcf: line 43, column 56
    function searchCriteria_15 () : gw.apd.model.APDClauseSearchCriteria {
      return new gw.apd.model.APDClauseSearchCriteria() { :SearchType = searchType, :Coverable = coverable }
    }
    
    // 'search' attribute on SearchPanel at APDClauseSearchPopup.pcf: line 43, column 56
    function search_14 () : java.lang.Object {
      return filteredSearchResults(searchCriteria)
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddConditionDefinition) at APDClauseSearchPopup.pcf: line 70, column 92
    function toCreateAndAdd_10 (CheckedValues :  Object[]) : java.lang.Object {
      return coverable.addExclusion(null)
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AddExclusionDefinition) at APDClauseSearchPopup.pcf: line 64, column 92
    function toCreateAndAdd_8 (CheckedValues :  Object[]) : java.lang.Object {
      return coverable.addCondition(null)
    }
    
    // 'visible' attribute on RemoveButton (id=RemoveClauseButton) at APDClauseSearchPopup.pcf: line 75, column 36
    function visible_11 () : java.lang.Boolean {
      return canDesign
    }
    
    // 'visible' attribute on AddButton (id=AddCoverageDefinition) at APDClauseSearchPopup.pcf: line 58, column 92
    function visible_6 () : java.lang.Boolean {
      return canDesign and searchType == CoveragePatternSearchType.TC_COVERAGE
    }
    
    // 'visible' attribute on AddButton (id=AddExclusionDefinition) at APDClauseSearchPopup.pcf: line 64, column 92
    function visible_7 () : java.lang.Boolean {
      return canDesign and searchType != CoveragePatternSearchType.TC_COVERAGE
    }
    
    property get coveragePatterns () : ArrayList<APDClause> {
      return getResultsValue(1) as ArrayList<APDClause>
    }
    
    property get searchCriteria () : gw.apd.model.APDClauseSearchCriteria {
      return getCriteriaValue(1) as gw.apd.model.APDClauseSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.apd.model.APDClauseSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}