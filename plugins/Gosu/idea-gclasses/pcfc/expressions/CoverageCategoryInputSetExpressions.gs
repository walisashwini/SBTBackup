package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageCategoryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageCategoryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at CoverageCategoryInputSet.pcf: line 24, column 24
    function sortBy_0 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=coveragePatternIterator) at CoverageCategoryInputSet.pcf: line 21, column 57
    function value_32 () : gw.api.productmodel.CoveragePattern[] {
      return coveragePatterns
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getRequireValue("coveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set coveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setRequireValue("coveragePatterns", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CoverageCategoryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CoverageCategoryInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_1 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_11 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_15 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_17 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_23 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_25 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_27 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_29 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_3 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_onEnter_9 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_2 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_4 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, coverable, openForEdit)
    }
    
    // 'mode' attribute on InputSetRef at CoverageCategoryInputSet.pcf: line 27, column 48
    function mode_31 () : java.lang.Object {
      return coveragePattern.CodeIdentifier
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  
}