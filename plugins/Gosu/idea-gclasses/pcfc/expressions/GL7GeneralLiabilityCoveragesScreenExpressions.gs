package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7GeneralLiabilityCoveragesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7GeneralLiabilityCoveragesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7GeneralLiabilityCoveragesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7GeneralLiabilityCoveragesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 34, column 60
    function def_onEnter_21 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 36, column 120
    function def_onEnter_23 (def :  pcf.GL7SublinesCV) : void {
      def.onEnter(sublines, openForEdit, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForSublineTypes)
    }
    
    // 'def' attribute on PanelRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 34, column 60
    function def_refreshVariables_22 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 36, column 120
    function def_refreshVariables_24 (def :  pcf.GL7SublinesCV) : void {
      def.refreshVariables(sublines, openForEdit, jobWizardHelper, gw.lob.gl7.GL7Category.CategoriesForSublineTypes)
    }
    
    // 'editable' attribute on Screen (id=GL7GeneralLiabilityCoveragesScreen) at GL7GeneralLiabilityCoveragesScreen.pcf: line 7, column 45
    function editable_25 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at GL7GeneralLiabilityCoveragesScreen.pcf: line 20, column 36
    function initialValue_0 () : productmodel.GL7Line {
      return policyPeriod.GL7Line
    }
    
    // 'initialValue' attribute on Variable at GL7GeneralLiabilityCoveragesScreen.pcf: line 25, column 36
    function initialValue_1 () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType> {
      return gw.lob.gl7.presenters.GL7CoverablePerSubline.forSublinesOn(line)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GL7GeneralLiabilityCoveragesScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
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
    
    property get sublines () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType> {
      return getVariableValue("sublines", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType>
    }
    
    property set sublines ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType>) {
      setVariableValue("sublines", 0, $arg)
    }
    
    
  }
  
  
}