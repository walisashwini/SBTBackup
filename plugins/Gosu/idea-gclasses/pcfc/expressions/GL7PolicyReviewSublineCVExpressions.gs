package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewSublineCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewSublineCVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewSublineCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewSublineCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PanelIterator at GL7PolicyReviewSublineCV.pcf: line 26, column 74
    function value_10 () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry[] {
      return coverablePerSubline.Entries
    }
    
    property get coverablePerSubline () : gw.lob.gl7.presenters.GL7CoverablePerSubline {
      return getRequireValue("coverablePerSubline", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline
    }
    
    property set coverablePerSubline ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline) {
      setRequireValue("coverablePerSubline", 0, $arg)
    }
    
    property get coverageCategories () : gw.lob.gl7.GL7Category.CoverableCoverageCategories {
      return getRequireValue("coverageCategories", 0) as gw.lob.gl7.GL7Category.CoverableCoverageCategories
    }
    
    property set coverageCategories ($arg :  gw.lob.gl7.GL7Category.CoverableCoverageCategories) {
      setRequireValue("coverageCategories", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewSublineCV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends GL7PolicyReviewSublineCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewSublineCV.pcf: line 43, column 116
    function def_onEnter_5 (def :  pcf.LobEntityDV) : void {
      def.onEnter(coverable, gw.lob.common.displayable.LobDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewSublineCV.pcf: line 49, column 110
    function def_onEnter_7 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.onEnter(coverable, gw.lob.gl7.GL7Category.CategoriesForSublines)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewSublineCV.pcf: line 43, column 116
    function def_refreshVariables_6 (def :  pcf.LobEntityDV) : void {
      def.refreshVariables(coverable, gw.lob.common.displayable.LobDisplayable, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewSublineCV.pcf: line 49, column 110
    function def_refreshVariables_8 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.refreshVariables(coverable, gw.lob.gl7.GL7Category.CategoriesForSublines)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewSublineCV.pcf: line 31, column 40
    function initialValue_0 () : entity.Coverable {
      return coverableSublineEntry.Coverable
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewSublineCV.pcf: line 36, column 71
    function initialValue_1 () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return new gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter(coverable, coverageCategories)
    }
    
    // PanelIterator at GL7PolicyReviewSublineCV.pcf: line 26, column 74
    function initializeVariables_9 () : void {
        coverable = coverableSublineEntry.Coverable;
  presenter = new gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter(coverable, coverageCategories);

    }
    
    // 'title' attribute on TitleBar at GL7PolicyReviewSublineCV.pcf: line 40, column 89
    function title_3 () : java.lang.String {
      return coverableSublineEntry.SublineType.Subline
    }
    
    // 'visible' attribute on TitleBar at GL7PolicyReviewSublineCV.pcf: line 40, column 89
    function visible_2 () : java.lang.Boolean {
      return presenter.displayTitle(gw.lob.common.displayable.LobDisplayable)
    }
    
    // 'visible' attribute on Verbatim at GL7PolicyReviewSublineCV.pcf: line 46, column 101
    function visible_4 () : java.lang.Boolean {
      return presenter.dataModelFieldsExist(gw.lob.common.displayable.LobDisplayable)
    }
    
    property get coverable () : entity.Coverable {
      return getVariableValue("coverable", 1) as entity.Coverable
    }
    
    property set coverable ($arg :  entity.Coverable) {
      setVariableValue("coverable", 1, $arg)
    }
    
    property get coverableSublineEntry () : gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry {
      return getIteratedValue(1) as gw.lob.gl7.presenters.GL7CoverablePerSubline.Entry
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return getVariableValue("presenter", 1) as gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter) {
      setVariableValue("presenter", 1, $arg)
    }
    
    
  }
  
  
}