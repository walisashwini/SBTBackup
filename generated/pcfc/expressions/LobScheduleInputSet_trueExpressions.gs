package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduleInputSet_trueExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduleInputSet.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduleInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at LobScheduleInputSet.true.pcf: line 51, column 45
    function def_onEnter_5 (def :  pcf.LobScheduledItemsLVInputSet_default) : void {
      def.onEnter(clause, openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on InputSetRef at LobScheduleInputSet.true.pcf: line 51, column 45
    function def_refreshVariables_6 (def :  pcf.LobScheduledItemsLVInputSet_default) : void {
      def.refreshVariables(clause, openForEdit, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.true.pcf: line 30, column 38
    function initialValue_0 () : gw.api.domain.Schedule {
      return clause typeis gw.api.domain.Schedule ? clause : null
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.true.pcf: line 35, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return clause.Pattern.CoverageCategory
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.true.pcf: line 39, column 36
    function initialValue_2 () : AccountContactView[] {
      return clause.PolicyLine.AdditionalInsuredOtherCandidates.asViews()
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.true.pcf: line 44, column 36
    function initialValue_3 () : AccountContactView[] {
      return clause.PolicyLine.ExistingAdditionalInsureds.asViews()
    }
    
    // 'initialValue' attribute on Variable at LobScheduleInputSet.true.pcf: line 48, column 82
    function initialValue_4 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'mode' attribute on InputSetRef at LobScheduleInputSet.true.pcf: line 51, column 45
    function mode_7 () : java.lang.Object {
      return clause.PolicyLine.PatternCode
    }
    
    property get additionalInsuredHelper () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return getRequireValue("additionalInsuredHelper", 0) as gw.lob.common.AbstractAdditionalInsuredHelper
    }
    
    property set additionalInsuredHelper ($arg :  gw.lob.common.AbstractAdditionalInsuredHelper) {
      setRequireValue("additionalInsuredHelper", 0, $arg)
    }
    
    property get category () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("category", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set category ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("category", 0, $arg)
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getRequireValue("coverageHelper", 0) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setRequireValue("coverageHelper", 0, $arg)
    }
    
    property get existingAdditionalInsureds () : AccountContactView[] {
      return getVariableValue("existingAdditionalInsureds", 0) as AccountContactView[]
    }
    
    property set existingAdditionalInsureds ($arg :  AccountContactView[]) {
      setVariableValue("existingAdditionalInsureds", 0, $arg)
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
    
    property get otherContacts () : AccountContactView[] {
      return getVariableValue("otherContacts", 0) as AccountContactView[]
    }
    
    property set otherContacts ($arg :  AccountContactView[]) {
      setVariableValue("otherContacts", 0, $arg)
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getVariableValue("schedule", 0) as gw.api.domain.Schedule
    }
    
    property set schedule ($arg :  gw.api.domain.Schedule) {
      setVariableValue("schedule", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    
  }
  
  
}