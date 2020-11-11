package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7SublineSelectionScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineSelectionScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7SublineSelectionScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7SublineSelectionScreen.pcf: line 31, column 63
    function def_onEnter_20 (def :  pcf.GL7SublineSelectionDV) : void {
      def.onEnter(policyPeriod, openForEdit)
    }
    
    // 'def' attribute on PanelRef at GL7SublineSelectionScreen.pcf: line 31, column 63
    function def_refreshVariables_21 (def :  pcf.GL7SublineSelectionDV) : void {
      def.refreshVariables(policyPeriod, openForEdit)
    }
    
    // 'editable' attribute on Screen (id=GL7SublineSelectionScreen) at GL7SublineSelectionScreen.pcf: line 7, column 36
    function editable_22 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at GL7SublineSelectionScreen.pcf: line 23, column 36
    function initialValue_0 () : productmodel.GL7Line {
      return policyPeriod.GL7Line
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function mode_1 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7SublineSelectionScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    property get GL7Line () : productmodel.GL7Line {
      return getVariableValue("GL7Line", 0) as productmodel.GL7Line
    }
    
    property set GL7Line ($arg :  productmodel.GL7Line) {
      setVariableValue("GL7Line", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
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
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}