package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternsSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormClausePatternsSelectionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternsSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormClausePatternsSelectionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (formPattern :  FormPattern, clausePatternCodes :  String[]) : int {
      return 0
    }
    
    // 'afterCommit' attribute on Popup (id=FormClausePatternsSelectionPopup) at FormClausePatternsSelectionPopup.pcf: line 12, column 82
    function afterCommit_31 (TopLocation :  pcf.api.Location) : void {
      formPattern.clearDependentClausePatternSelections()
    }
    
    // 'initialValue' attribute on Variable at FormClausePatternsSelectionPopup.pcf: line 21, column 41
    function initialValue_0 () : CoveragePatternSearchType {
      return CoveragePatternSearchType.TC_COVERAGE
    }
    
    override property get CurrentLocation () : pcf.FormClausePatternsSelectionPopup {
      return super.CurrentLocation as pcf.FormClausePatternsSelectionPopup
    }
    
    property get clausePatternCodes () : String[] {
      return getVariableValue("clausePatternCodes", 0) as String[]
    }
    
    property set clausePatternCodes ($arg :  String[]) {
      setVariableValue("clausePatternCodes", 0, $arg)
    }
    
    property get formPattern () : FormPattern {
      return getVariableValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setVariableValue("formPattern", 0, $arg)
    }
    
    property get searchType () : CoveragePatternSearchType {
      return getVariableValue("searchType", 0) as CoveragePatternSearchType
    }
    
    property set searchType ($arg :  CoveragePatternSearchType) {
      setVariableValue("searchType", 0, $arg)
    }
    
    function getAvailableClauseTypes() : CoveragePatternSearchType[]{
      return new CoveragePatternSearchType[]{CoveragePatternSearchType.TC_COVERAGE, 
        CoveragePatternSearchType.TC_CONDITION, CoveragePatternSearchType.TC_EXCLUSION}
    }
    
    function createSearchCriteria() : gw.productmodel.ClausePatternSearchCriteria {
      var criteria = new gw.productmodel.ClausePatternSearchCriteria()
      criteria.SearchType = searchType
      criteria.PolicyLinePatternCode = formPattern.PolicyLinePatternCode
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternsSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at FormClausePatternsSelectionPopup.pcf: line 81, column 77
    function valueRoot_20 () : java.lang.Object {
      return pattern
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at FormClausePatternsSelectionPopup.pcf: line 85, column 94
    function valueRoot_23 () : java.lang.Object {
      return pattern.CoverageCategory
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at FormClausePatternsSelectionPopup.pcf: line 81, column 77
    function value_19 () : java.lang.String {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at FormClausePatternsSelectionPopup.pcf: line 85, column 94
    function value_22 () : java.lang.String {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at FormClausePatternsSelectionPopup.pcf: line 89, column 76
    function value_25 () : java.lang.String {
      return pattern.ClauseName
    }
    
    property get pattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(2) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormClausePatternsSelectionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends FormClausePatternsSelectionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=SearchInputSet) at FormClausePatternsSelectionPopup.pcf: line 57, column 36
    function def_onEnter_12 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef (id=SearchInputSet) at FormClausePatternsSelectionPopup.pcf: line 57, column 36
    function def_refreshVariables_13 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchType = (__VALUE_TO_SET as typekey.CoveragePatternSearchType)
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at FormClausePatternsSelectionPopup.pcf: line 52, column 76
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Keyword = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on CheckedValuesToolbarButton (id=AddSelectedButton) at FormClausePatternsSelectionPopup.pcf: line 67, column 42
    function label_14 () : java.lang.Object {
      return searchCriteria.SearchType == CoveragePatternSearchType.TC_COVERAGE ? DisplayKey.get("Web.Coverage.SearchPage.AddSelectedCoverages") : DisplayKey.get("Web.Coverage.SearchPage.AddSelectedExclusionsAndConditions")
    }
    
    // 'pickValue' attribute on CheckedValuesToolbarButton (id=AddSelectedButton) at FormClausePatternsSelectionPopup.pcf: line 67, column 42
    function pickValue_15 (CheckedValues :  gw.api.productmodel.ClausePattern[]) : gw.api.productmodel.ClausePattern[] {
      return CheckedValues
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=SearchPanel) at FormClausePatternsSelectionPopup.pcf: line 35, column 130
    function searchCriteria_30 () : gw.productmodel.ClausePatternSearchCriteria {
      return createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel (id=SearchPanel) at FormClausePatternsSelectionPopup.pcf: line 35, column 130
    function search_29 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at FormClausePatternsSelectionPopup.pcf: line 81, column 77
    function sortValue_16 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at FormClausePatternsSelectionPopup.pcf: line 85, column 94
    function sortValue_17 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.CoverageCategory.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ClauseType_Cell) at FormClausePatternsSelectionPopup.pcf: line 89, column 76
    function sortValue_18 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.ClauseName
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function valueRange_4 () : java.lang.Object {
      return getAvailableClauseTypes()
    }
    
    // 'value' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function value_1 () : typekey.CoveragePatternSearchType {
      return searchCriteria.SearchType
    }
    
    // 'value' attribute on RowIterator (id=clausePatternsIterator) at FormClausePatternsSelectionPopup.pcf: line 76, column 166
    function value_28 () : gw.api.productmodel.ClausePattern[] {
      return clausePatterns?.where( \ clause -> not clausePatternCodes?.contains(clause.CodeIdentifier))
    }
    
    // 'value' attribute on TextInput (id=Keyword_Input) at FormClausePatternsSelectionPopup.pcf: line 52, column 76
    function value_8 () : java.lang.String {
      return searchCriteria.Keyword
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function verifyValueRangeIsAllowedType_5 ($$arg :  typekey.CoveragePatternSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=searchType_Input) at FormClausePatternsSelectionPopup.pcf: line 47, column 77
    function verifyValueRange_6 () : void {
      var __valueRangeArg = getAvailableClauseTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get clausePatterns () : gw.api.productmodel.ClausePattern[] {
      return getResultsValue(1) as gw.api.productmodel.ClausePattern[]
    }
    
    property get searchCriteria () : gw.productmodel.ClausePatternSearchCriteria {
      return getCriteriaValue(1) as gw.productmodel.ClausePatternSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.productmodel.ClausePatternSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}