package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.PolicyLocation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewPanelSet_PolicyLocationExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.PolicyLocation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends GL7PolicyReviewPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 50, column 97
    function def_onEnter_4 (def :  pcf.GL7LocationDetailInputSet) : void {
      def.onEnter(presenter, supportsNonSpecificLocation, false)
    }
    
    // 'def' attribute on InputSetRef at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 50, column 97
    function def_refreshVariables_5 (def :  pcf.GL7LocationDetailInputSet) : void {
      def.refreshVariables(presenter, supportsNonSpecificLocation, false)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 39, column 88
    function initialValue_3 () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location> {
      return gw.lob.gl7.presenters.GL7CoverablePerSubline.forLocation(policyPeriod.GL7Line, location)
    }
    
    // 'value' attribute on PanelIterator at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 57, column 76
    function value_14 () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry[] {
      return coverablePerSubline.Entries
    }
    
    property get coverablePerSubline () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location> {
      return getVariableValue("coverablePerSubline", 1) as gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location>
    }
    
    property set coverablePerSubline ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7Location>) {
      setVariableValue("coverablePerSubline", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.PolicyLocation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 22, column 30
    function initialValue_0 () : PolicyLocation {
      return rowEntity typeis PolicyLocation ? rowEntity : null
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 27, column 58
    function initialValue_1 () : gw.lob.gl7.presenters.GL7LocationPresenter {
      return new gw.lob.gl7.presenters.GL7LocationPresenter(policyPeriod.GL7Line, location)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 32, column 23
    function initialValue_2 () : boolean {
      return policyPeriod.GL7Line.SupportsNonSpecificLocations
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get location () : PolicyLocation {
      return getVariableValue("location", 0) as PolicyLocation
    }
    
    property set location ($arg :  PolicyLocation) {
      setVariableValue("location", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7LocationPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7LocationPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7LocationPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    property get rowEntity () : Object {
      return getRequireValue("rowEntity", 0) as Object
    }
    
    property set rowEntity ($arg :  Object) {
      setRequireValue("rowEntity", 0, $arg)
    }
    
    property get supportsNonSpecificLocation () : boolean {
      return getVariableValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setVariableValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.PolicyLocation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 72, column 118
    function def_onEnter_11 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.onEnter(entry.Coverable, gw.lob.gl7.GL7Category.CategoriesForLocation)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 70, column 124
    function def_onEnter_9 (def :  pcf.LobEntityDV) : void {
      def.onEnter(entry.Coverable, gw.lob.gl7.displayable.GL7LocationDisplayable, jobWizardHelper, false)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 70, column 124
    function def_refreshVariables_10 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(entry.Coverable, gw.lob.gl7.displayable.GL7LocationDisplayable, jobWizardHelper, false)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 72, column 118
    function def_refreshVariables_12 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.refreshVariables(entry.Coverable, gw.lob.gl7.GL7Category.CategoriesForLocation)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 62, column 42
    function initialValue_6 () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return new gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter(entry.Coverable, gw.lob.gl7.GL7Category.CategoriesForLocation)
    }
    
    // PanelIterator at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 57, column 76
    function initializeVariables_13 () : void {
        summaryPresenter = new gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter(entry.Coverable, gw.lob.gl7.GL7Category.CategoriesForLocation);

    }
    
    // 'title' attribute on TitleBar (id=subline) at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 67, column 103
    function title_8 () : java.lang.String {
      return entry.SublineType.DisplayName
    }
    
    // 'visible' attribute on TitleBar (id=subline) at GL7PolicyReviewPanelSet.PolicyLocation.pcf: line 67, column 103
    function visible_7 () : java.lang.Boolean {
      return summaryPresenter.displayTitle(gw.lob.gl7.displayable.GL7LocationDisplayable)
    }
    
    property get entry () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry {
      return getIteratedValue(2) as gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry
    }
    
    property get summaryPresenter () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return getVariableValue("summaryPresenter", 2) as gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter
    }
    
    property set summaryPresenter ($arg :  gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter) {
      setVariableValue("summaryPresenter", 2, $arg)
    }
    
    
  }
  
  
}