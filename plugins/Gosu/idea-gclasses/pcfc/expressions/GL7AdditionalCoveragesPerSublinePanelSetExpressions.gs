package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7AdditionalCoveragesPerSublinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7AdditionalCoveragesPerSublinePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7AdditionalCoveragesPerSublinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7AdditionalCoveragesPerSublinePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Add) at GL7AdditionalCoveragesPerSublinePanelSet.pcf: line 29, column 82
    function action_0 () : void {
      GL7CoveragePatternSearchPopup.push(new gw.lob.gl7.presenters.GL7SyncCoverageSearchPresenter (coverablePerSubline, coverageCategories, TC_COVERAGE, label))
    }
    
    // 'action' attribute on ToolbarButton (id=Add) at GL7AdditionalCoveragesPerSublinePanelSet.pcf: line 29, column 82
    function action_dest_1 () : pcf.api.Destination {
      return pcf.GL7CoveragePatternSearchPopup.createDestination(new gw.lob.gl7.presenters.GL7SyncCoverageSearchPresenter (coverablePerSubline, coverageCategories, TC_COVERAGE, label))
    }
    
    // 'def' attribute on PanelRef at GL7AdditionalCoveragesPerSublinePanelSet.pcf: line 23, column 170
    function def_onEnter_2 (def :  pcf.GL7CoveragesPerSublineDV) : void {
      def.onEnter(coverablePerSubline, gw.lob.gl7.presenters.GL7PresenterUtil.coveragesProviderFor(coverageCategories), jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7AdditionalCoveragesPerSublinePanelSet.pcf: line 23, column 170
    function def_refreshVariables_3 (def :  pcf.GL7CoveragesPerSublineDV) : void {
      def.refreshVariables(coverablePerSubline, gw.lob.gl7.presenters.GL7PresenterUtil.coveragesProviderFor(coverageCategories), jobWizardHelper, openForEdit)
    }
    
    property get coverablePerSubline () : gw.lob.gl7.presenters.GL7CoverablePerSubline {
      return getRequireValue("coverablePerSubline", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline
    }
    
    property set coverablePerSubline ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline) {
      setRequireValue("coverablePerSubline", 0, $arg)
    }
    
    property get coverageCategories () : String[] {
      return getRequireValue("coverageCategories", 0) as String[]
    }
    
    property set coverageCategories ($arg :  String[]) {
      setRequireValue("coverageCategories", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get label () : String {
      return getRequireValue("label", 0) as String
    }
    
    property set label ($arg :  String) {
      setRequireValue("label", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}