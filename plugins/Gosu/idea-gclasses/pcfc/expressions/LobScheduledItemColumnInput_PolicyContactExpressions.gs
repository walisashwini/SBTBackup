package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemColumnInput.PolicyContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduledItemColumnInput_PolicyContactExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemColumnInput.PolicyContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduledItemColumnInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyContact_Cell) at LobScheduledItemColumnInput.PolicyContact.pcf: line 39, column 37
    function action_2 () : void {
      EditPolicyContactRolePopup.push(scheduledItemColumnHelper.getScheduleItemPolicyContactRole(scheduledItem), openForEdit)
    }
    
    // 'action' attribute on TextCell (id=PolicyContact_Cell) at LobScheduledItemColumnInput.PolicyContact.pcf: line 39, column 37
    function action_dest_3 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(scheduledItemColumnHelper.getScheduleItemPolicyContactRole(scheduledItem), openForEdit)
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemColumnInput.PolicyContact.pcf: line 32, column 53
    function initialValue_0 () : gw.lob.common.displayable.Displayable {
      return scheduledItemColumnHelper.intitializeContactDisplayable(displayableFactory, clause, scheduledItem, schedulePropertyInfo)
    }
    
    // 'onChange' attribute on PostOnChange at LobScheduledItemColumnInput.PolicyContact.pcf: line 41, column 59
    function onChange_1 () : void {
      displayable.onChange(jobWizardHelper)
    }
    
    // 'required' attribute on TextCell (id=PolicyContact_Cell) at LobScheduledItemColumnInput.PolicyContact.pcf: line 39, column 37
    function required_4 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextCell (id=PolicyContact_Cell) at LobScheduledItemColumnInput.PolicyContact.pcf: line 39, column 37
    function value_5 () : PolicyContactRole {
      return scheduledItemColumnHelper.getContactDisplayableValue(displayable)
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable {
      return getVariableValue("displayable", 0) as gw.lob.common.displayable.Displayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable) {
      setVariableValue("displayable", 0, $arg)
    }
    
    property get displayableFactory () : gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2 {
      return getRequireValue("displayableFactory", 0) as gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2
    }
    
    property set displayableFactory ($arg :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2) {
      setRequireValue("displayableFactory", 0, $arg)
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
    
    property get schedulePropertyInfo () : gw.api.productmodel.SchedulePropertyInfo {
      return getRequireValue("schedulePropertyInfo", 0) as gw.api.productmodel.SchedulePropertyInfo
    }
    
    property set schedulePropertyInfo ($arg :  gw.api.productmodel.SchedulePropertyInfo) {
      setRequireValue("schedulePropertyInfo", 0, $arg)
    }
    
    property get scheduledItem () : ScheduledItem {
      return getRequireValue("scheduledItem", 0) as ScheduledItem
    }
    
    property set scheduledItem ($arg :  ScheduledItem) {
      setRequireValue("scheduledItem", 0, $arg)
    }
    
    property get scheduledItemColumnHelper () : gw.lob.common.schedules.ScheduledItemColumnHelper {
      return getRequireValue("scheduledItemColumnHelper", 0) as gw.lob.common.schedules.ScheduledItemColumnHelper
    }
    
    property set scheduledItemColumnHelper ($arg :  gw.lob.common.schedules.ScheduledItemColumnHelper) {
      setRequireValue("scheduledItemColumnHelper", 0, $arg)
    }
    
    
  }
  
  
}