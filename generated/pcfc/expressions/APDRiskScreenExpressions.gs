package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 28, column 60
    function def_onEnter_20 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(apdLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 30, column 101
    function def_onEnter_22 (def :  pcf.APDRiskCoverablePanelSet) : void {
      def.onEnter(apdLine, openForEdit, jobWizardHelper, coverDefinitionHelper)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 28, column 60
    function def_refreshVariables_21 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(apdLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 30, column 101
    function def_refreshVariables_23 (def :  pcf.APDRiskCoverablePanelSet) : void {
      def.refreshVariables(apdLine, openForEdit, jobWizardHelper, coverDefinitionHelper)
    }
    
    // 'editable' attribute on Screen (id=APDRiskScreen) at APDRiskScreen.pcf: line 7, column 24
    function editable_24 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at APDRiskScreen.pcf: line 20, column 50
    function initialValue_0 () : gw.apd.model.CoverDefinitionHelper {
      return new gw.apd.model.CoverDefinitionHelper()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function mode_1 () : java.lang.Object {
      return apdLine.Branch.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 25, column 108
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    property get apdLine () : APDRiskPolicyLine {
      return getRequireValue("apdLine", 0) as APDRiskPolicyLine
    }
    
    property set apdLine ($arg :  APDRiskPolicyLine) {
      setRequireValue("apdLine", 0, $arg)
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getVariableValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setVariableValue("coverDefinitionHelper", 0, $arg)
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
  
  
}