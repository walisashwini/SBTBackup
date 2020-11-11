package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewStateSpecificInfoPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewStateSpecificInfoPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewStateSpecificInfoPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewStateSpecificInfoPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 17, column 36
    function initialValue_0 () : productmodel.GL7Line {
      return policyPeriod.GL7Line
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : productmodel.GL7Line {
      return getVariableValue("line", 0) as productmodel.GL7Line
    }
    
    property set line ($arg :  productmodel.GL7Line) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get presenter () : gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter {
      return getVariableValue("presenter", 0) as gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter
    }
    
    property set presenter ($arg :  gw.lob.gl7.presenters.GL7PolicyLineSummaryPresenter) {
      setVariableValue("presenter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewStateSpecificInfoPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 40, column 49
    function value_3 () : typekey.Jurisdiction {
      return jurisdiction
    }
    
    property get jurisdiction () : typekey.Jurisdiction {
      return getIteratedValue(3) as typekey.Jurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewStateSpecificInfoPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends stateSpecificInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 29, column 68
    function initialValue_1 () : gw.util.IOrderedList<typekey.Jurisdiction> {
      return line.JurisdictionsWithSublines.order()
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 40, column 49
    function sortValue_2 (jurisdiction :  typekey.Jurisdiction) : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on RowIterator at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 34, column 72
    function value_5 () : gw.util.IOrderedList<typekey.Jurisdiction> {
      return jurisdictions
    }
    
    property get jurisdictions () : gw.util.IOrderedList<typekey.Jurisdiction> {
      return getVariableValue("jurisdictions", 2) as gw.util.IOrderedList<typekey.Jurisdiction>
    }
    
    property set jurisdictions ($arg :  gw.util.IOrderedList<typekey.Jurisdiction>) {
      setVariableValue("jurisdictions", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewStateSpecificInfoPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class stateSpecificInfoExpressionsImpl extends GL7PolicyReviewStateSpecificInfoPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 45, column 195
    function def_onEnter_6 (def :  pcf.GL7PolicyReviewSublineCV) : void {
      def.onEnter(gw.lob.gl7.presenters.GL7CoverablePerSubline.forSublines(line, selectedJurisdiction), gw.lob.gl7.GL7Category.CategoriesForSublines,true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7PolicyReviewStateSpecificInfoPanelSet.pcf: line 45, column 195
    function def_refreshVariables_7 (def :  pcf.GL7PolicyReviewSublineCV) : void {
      def.refreshVariables(gw.lob.gl7.presenters.GL7CoverablePerSubline.forSublines(line, selectedJurisdiction), gw.lob.gl7.GL7Category.CategoriesForSublines,true, jobWizardHelper)
    }
    
    property get selectedJurisdiction () : Jurisdiction {
      return getCurrentSelection(1) as Jurisdiction
    }
    
    property set selectedJurisdiction ($arg :  Jurisdiction) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}