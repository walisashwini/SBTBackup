package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewGeneralLiabilityPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewGeneralLiabilityPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewGeneralLiabilityPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewGeneralLiabilityPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 20, column 50
    function initialValue_0 () : Type<gw.lob.gl7.GL7Category> {
      return gw.lob.gl7.GL7Category
    }
    
    // 'value' attribute on PanelIterator at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 24, column 43
    function value_6 () : entity.GL7SublineType[] {
      return sublines.SublineSortedCoverables
    }
    
    property get category () : Type<gw.lob.gl7.GL7Category> {
      return getVariableValue("category", 0) as Type<gw.lob.gl7.GL7Category>
    }
    
    property set category ($arg :  Type<gw.lob.gl7.GL7Category>) {
      setVariableValue("category", 0, $arg)
    }
    
    property get gl7line () : GL7GeneralLiabilityLine {
      return getRequireValue("gl7line", 0) as GL7GeneralLiabilityLine
    }
    
    property set gl7line ($arg :  GL7GeneralLiabilityLine) {
      setRequireValue("gl7line", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get sublines () : gw.lob.gl7.presenters.GL7CoverablePerSubline<GL7SublineType> {
      return getRequireValue("sublines", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline<GL7SublineType>
    }
    
    property set sublines ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline<GL7SublineType>) {
      setRequireValue("sublines", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewGeneralLiabilityPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends GL7PolicyReviewGeneralLiabilityPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 33, column 153
    function def_onEnter_2 (def :  pcf.LobEntityFilteredDV) : void {
      def.onEnter(subline, gw.lob.gl7.displayable.GL7SublineTypeDisplayable, jobWizardHelper, false, presenter.filterDisplayable())
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 38, column 96
    function def_onEnter_4 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.onEnter(subline, category.CategoriesForSublineTypes)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 33, column 153
    function def_refreshVariables_3 (def :  pcf.LobEntityFilteredDV) : void {
      def.refreshVariables(subline, gw.lob.gl7.displayable.GL7SublineTypeDisplayable, jobWizardHelper, false, presenter.filterDisplayable())
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 38, column 96
    function def_refreshVariables_5 (def :  pcf.GL7PolicyReviewClausesPanelSet) : void {
      def.refreshVariables(subline, category.CategoriesForSublineTypes)
    }
    
    // 'title' attribute on TitleBar at GL7PolicyReviewGeneralLiabilityPanelSet.pcf: line 30, column 36
    function title_1 () : java.lang.String {
      return subline.Subline
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return getVariableValue("presenter", 1) as gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter) {
      setVariableValue("presenter", 1, $arg)
    }
    
    property get subline () : entity.GL7SublineType {
      return getIteratedValue(1) as entity.GL7SublineType
    }
    
    
  }
  
  
}