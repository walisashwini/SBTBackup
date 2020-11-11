package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewClausesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewClausesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewClausesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewClausesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 61, column 54
    function def_onEnter_12 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(presenter.Conditions, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=AdditionalInsuredSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 70, column 62
    function def_onEnter_15 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(presenter.AdditionalInsureds, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=CoverageSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 34, column 53
    function def_onEnter_3 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(presenter.Coverages, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=AdditionalCoverageSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 43, column 63
    function def_onEnter_6 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(presenter.AdditionalCoverages, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 52, column 54
    function def_onEnter_9 (def :  pcf.CoverageSummaryLV) : void {
      def.onEnter(presenter.Exclusions, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=ExclusionSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 52, column 54
    function def_refreshVariables_10 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(presenter.Exclusions, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=ConditionSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 61, column 54
    function def_refreshVariables_13 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(presenter.Conditions, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=AdditionalInsuredSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 70, column 62
    function def_refreshVariables_16 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(presenter.AdditionalInsureds, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=CoverageSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 34, column 53
    function def_refreshVariables_4 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(presenter.Coverages, coverable)
    }
    
    // 'def' attribute on ListViewInput (id=AdditionalCoverageSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 43, column 63
    function def_refreshVariables_7 (def :  pcf.CoverageSummaryLV) : void {
      def.refreshVariables(presenter.AdditionalCoverages, coverable)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewClausesPanelSet.pcf: line 18, column 36
    function initialValue_0 () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return new gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter(coverable, coverableCategories)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewClausesPanelSet.pcf: line 23, column 36
    function initialValue_1 () : java.lang.String {
      return java.lang.System.getProperty("line.separator")
    }
    
    // 'label' attribute on Label (id=spacer) at GL7PolicyReviewClausesPanelSet.pcf: line 75, column 50
    function label_17 () : java.lang.String {
      return lineSeparator + lineSeparator
    }
    
    // 'visible' attribute on ListViewInput (id=ConditionSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 61, column 54
    function visible_11 () : java.lang.Boolean {
      return presenter.Conditions.HasElements
    }
    
    // 'visible' attribute on ListViewInput (id=AdditionalInsuredSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 70, column 62
    function visible_14 () : java.lang.Boolean {
      return presenter.AdditionalInsureds.HasElements
    }
    
    // 'visible' attribute on ListViewInput (id=CoverageSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 34, column 53
    function visible_2 () : java.lang.Boolean {
      return presenter.Coverages.HasElements
    }
    
    // 'visible' attribute on ListViewInput (id=AdditionalCoverageSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 43, column 63
    function visible_5 () : java.lang.Boolean {
      return presenter.AdditionalCoverages.HasElements
    }
    
    // 'visible' attribute on ListViewInput (id=ExclusionSummaryLV) at GL7PolicyReviewClausesPanelSet.pcf: line 52, column 54
    function visible_8 () : java.lang.Boolean {
      return presenter.Exclusions.HasElements
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coverableCategories () : gw.lob.gl7.GL7Category.CoverableCoverageCategories {
      return getRequireValue("coverableCategories", 0) as gw.lob.gl7.GL7Category.CoverableCoverageCategories
    }
    
    property set coverableCategories ($arg :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) {
      setRequireValue("coverableCategories", 0, $arg)
    }
    
    property get lineSeparator () : java.lang.String {
      return getVariableValue("lineSeparator", 0) as java.lang.String
    }
    
    property set lineSeparator ($arg :  java.lang.String) {
      setVariableValue("lineSeparator", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  
}