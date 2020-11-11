package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/PolicyLineSummaryPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLineSummaryPanelSet_GL7LineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/PolicyLineSummaryPanelSet.GL7Line.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLineSummaryPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.GL7Line.pcf: line 36, column 94
    function def_onEnter_4 (def :  pcf.GL7PolicyReviewGeneralLiabilityPanelSet) : void {
      def.onEnter(gl7line, sublines, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.GL7Line.pcf: line 42, column 90
    function def_onEnter_6 (def :  pcf.GL7PolicyReviewStateSpecificInfoPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.GL7Line.pcf: line 48, column 120
    function def_onEnter_8 (def :  pcf.GL7PolicyReviewRisksPanelSet) : void {
      def.onEnter(gl7line.PolicyLine.Branch.GL7Line, false, jobWizardHelper, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.GL7Line.pcf: line 36, column 94
    function def_refreshVariables_5 (def :  pcf.GL7PolicyReviewGeneralLiabilityPanelSet) : void {
      def.refreshVariables(gl7line, sublines, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.GL7Line.pcf: line 42, column 90
    function def_refreshVariables_7 (def :  pcf.GL7PolicyReviewStateSpecificInfoPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyLineSummaryPanelSet.GL7Line.pcf: line 48, column 120
    function def_refreshVariables_9 (def :  pcf.GL7PolicyReviewRisksPanelSet) : void {
      def.refreshVariables(gl7line.PolicyLine.Branch.GL7Line, false, jobWizardHelper, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.GL7Line.pcf: line 17, column 46
    function initialValue_0 () : entity.GL7GeneralLiabilityLine {
      return line as GL7GeneralLiabilityLine
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.GL7Line.pcf: line 22, column 36
    function initialValue_1 () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType> {
      return gw.lob.gl7.presenters.GL7CoverablePerSubline.forSublinesOn(gl7line)
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.GL7Line.pcf: line 26, column 35
    function initialValue_2 () : entity.PolicyPeriod {
      return gl7line.Branch
    }
    
    // 'initialValue' attribute on Variable at PolicyLineSummaryPanelSet.GL7Line.pcf: line 30, column 50
    function initialValue_3 () : Type<gw.lob.gl7.GL7Category> {
      return gw.lob.gl7.GL7Category
    }
    
    property get category () : Type<gw.lob.gl7.GL7Category> {
      return getVariableValue("category", 0) as Type<gw.lob.gl7.GL7Category>
    }
    
    property set category ($arg :  Type<gw.lob.gl7.GL7Category>) {
      setVariableValue("category", 0, $arg)
    }
    
    property get gl7line () : entity.GL7GeneralLiabilityLine {
      return getVariableValue("gl7line", 0) as entity.GL7GeneralLiabilityLine
    }
    
    property set gl7line ($arg :  entity.GL7GeneralLiabilityLine) {
      setVariableValue("gl7line", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getRequireValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get sublines () : gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType> {
      return getVariableValue("sublines", 0) as gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType>
    }
    
    property set sublines ($arg :  gw.lob.gl7.presenters.GL7CoverablePerSubline<entity.GL7SublineType>) {
      setVariableValue("sublines", 0, $arg)
    }
    
    
  }
  
  
}