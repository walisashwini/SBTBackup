package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBldgSuggestedCovDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBldgSuggestedCovDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBldgSuggestedCovDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBldgSuggestedCovDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CPBldgSuggestedCovDV.pcf: line 14, column 52
    function initialValue_0 () : gw.api.productmodel.CoverageCategory {
      return building.PolicyLine.Pattern.getCoverageCategoryByPublicId("CPBldgCovCategory")
    }
    
    // 'initialValue' attribute on Variable at CPBldgSuggestedCovDV.pcf: line 21, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return building.PolicyLine.Pattern.getCoverageCategoryByPublicId( "CPBusIncCovCategory" )
    }
    
    // 'initialValue' attribute on Variable at CPBldgSuggestedCovDV.pcf: line 26, column 53
    function initialValue_2 () : gw.api.productmodel.CoveragePattern[] {
      return building == null ? null : buildingPropCategory.coveragePatternsForEntity(CPBuilding).whereSelectedOrAvailable(building, openForEdit)
    }
    
    // 'initialValue' attribute on Variable at CPBldgSuggestedCovDV.pcf: line 31, column 53
    function initialValue_3 () : gw.api.productmodel.CoveragePattern[] {
      return building == null ? null : incomeExpenseCategory.coveragePatternsForEntity(CPBuilding).whereSelectedOrAvailable(building, openForEdit)
    }
    
    // 'sortBy' attribute on IteratorSort at CPBldgSuggestedCovDV.pcf: line 41, column 26
    function sortBy_4 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=bldgAndPropIterator) at CPBldgSuggestedCovDV.pcf: line 38, column 59
    function value_36 () : gw.api.productmodel.CoveragePattern[] {
      return buildingPropCategoryCoveragePatterns
    }
    
    // 'value' attribute on InputIterator (id=IncomeAndExpenseIterator) at CPBldgSuggestedCovDV.pcf: line 51, column 59
    function value_69 () : gw.api.productmodel.CoveragePattern[] {
      return incomeExpenseCategoryCoveragePatterns
    }
    
    property get building () : CPBuilding {
      return getRequireValue("building", 0) as CPBuilding
    }
    
    property set building ($arg :  CPBuilding) {
      setRequireValue("building", 0, $arg)
    }
    
    property get buildingPropCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("buildingPropCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set buildingPropCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("buildingPropCategory", 0, $arg)
    }
    
    property get buildingPropCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("buildingPropCategoryCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set buildingPropCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("buildingPropCategoryCoveragePatterns", 0, $arg)
    }
    
    property get incomeExpenseCategory () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("incomeExpenseCategory", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set incomeExpenseCategory ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("incomeExpenseCategory", 0, $arg)
    }
    
    property get incomeExpenseCategoryCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("incomeExpenseCategoryCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set incomeExpenseCategoryCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("incomeExpenseCategoryCoveragePatterns", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    function getCovPatterns(category: String): gw.api.productmodel.CoveragePattern[] {
                        var patterns = building.PolicyLine.Pattern.getCoverageCategoryByPublicId(category).coveragePatternsForEntity(CPBuilding).toList()
                        return patterns.toTypedArray()
                    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBldgSuggestedCovDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CPBldgSuggestedCovDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_38 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_40 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_42 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_44 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_46 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_48 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_50 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_52 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_54 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_56 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_58 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_60 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_62 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_64 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_onEnter_66 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_39 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_41 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_43 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_45 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_47 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_49 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_51 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_53 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_55 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_57 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_59 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_61 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_63 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_65 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function def_refreshVariables_67 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'mode' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 57, column 44
    function mode_68 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBldgSuggestedCovDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBldgSuggestedCovDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_11 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_15 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_17 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_25 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_27 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_29 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_31 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_33 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_34 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, building, openForEdit)
    }
    
    // 'mode' attribute on InputSetRef at CPBldgSuggestedCovDV.pcf: line 44, column 44
    function mode_35 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}