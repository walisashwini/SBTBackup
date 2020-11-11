package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLVInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduledItemsLVInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLVInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LobScheduledItemsLVInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ExistingAdditionalInsured) at LobScheduledItemsLVInputSet.default.pcf: line 104, column 170
    function label_14 () : java.lang.Object {
      return additionalInsured
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=ExistingAdditionalInsured) at LobScheduledItemsLVInputSet.default.pcf: line 104, column 170
    function toCreateAndAdd_15 (CheckedValues :  Object[]) : java.lang.Object {
      return schedule.addScheduledItem(additionalInsuredHelper?.getPolicyAdditionalInsuredDetail(additionalInsured.AccountContact.Contact, clause))
    }
    
    property get additionalInsured () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLVInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends LobScheduledItemsLVInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=OtherContact) at LobScheduledItemsLVInputSet.default.pcf: line 124, column 165
    function label_19 () : java.lang.Object {
      return otherContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=OtherContact) at LobScheduledItemsLVInputSet.default.pcf: line 124, column 165
    function toCreateAndAdd_20 (CheckedValues :  Object[]) : java.lang.Object {
      return schedule.addScheduledItem(additionalInsuredHelper?.getPolicyAdditionalInsuredDetail(otherContact.AccountContact.Contact, clause))
    }
    
    property get otherContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLVInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobScheduledItemsLVInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=ContactType) at LobScheduledItemsLVInputSet.default.pcf: line 79, column 94
    function conversionExpression_8 (PickedValue :  PolicyAddlInsuredDetail) : ScheduledItem {
      return schedule.modifyAndAddScheduledItem(PickedValue, clause, additionalInsuredHelper)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at LobScheduledItemsLVInputSet.default.pcf: line 79, column 94
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at LobScheduledItemsLVInputSet.default.pcf: line 79, column 94
    function pickLocation_9 () : void {
      NewAdditionalInsuredPopup.push(clause.PolicyLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLVInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduledItemsLVInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at LobScheduledItemsLVInputSet.default.pcf: line 136, column 52
    function action_26 () : void {
      LobScheduledItemPopup.push(clause, schedule, category, openForEdit, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper, scheduledItemColumnHelper)
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at LobScheduledItemsLVInputSet.default.pcf: line 136, column 52
    function action_dest_27 () : pcf.api.Destination {
      return pcf.LobScheduledItemPopup.createDestination(clause, schedule, category, openForEdit, true, jobWizardHelper, coverageHelper, scheduledItemHelper, additionalInsuredHelper, scheduledItemColumnHelper)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at LobScheduledItemsLVInputSet.default.pcf: line 86, column 75
    function conversionExpression_11 (PickedValue :  Contact) : ScheduledItem {
      return schedule.addScheduledItem(additionalInsuredHelper?.getPolicyAdditionalInsuredDetail(PickedValue, clause))
    }
    
    // 'def' attribute on ListViewInput at LobScheduledItemsLVInputSet.default.pcf: line 58, column 25
    function def_onEnter_29 (def :  pcf.LobScheduledItemsLV) : void {
      def.onEnter(clause, schedule, openForEdit, jobWizardHelper, scheduledItemHelper, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ListViewInput at LobScheduledItemsLVInputSet.default.pcf: line 58, column 25
    function def_refreshVariables_30 (def :  pcf.LobScheduledItemsLV) : void {
      def.refreshVariables(clause, schedule, openForEdit, jobWizardHelper, scheduledItemHelper, scheduledItemColumnHelper)
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLVInputSet.default.pcf: line 30, column 38
    function initialValue_0 () : gw.api.domain.Schedule {
      return clause typeis gw.api.domain.Schedule ? clause : null
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLVInputSet.default.pcf: line 35, column 52
    function initialValue_1 () : gw.api.productmodel.CoverageCategory {
      return clause.Pattern.CoverageCategory
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLVInputSet.default.pcf: line 39, column 36
    function initialValue_2 () : AccountContactView[] {
      return clause.PolicyLine.AdditionalInsuredOtherCandidates.asViews()
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLVInputSet.default.pcf: line 44, column 36
    function initialValue_3 () : AccountContactView[] {
      return clause.PolicyLine.ExistingAdditionalInsureds.asViews()
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLVInputSet.default.pcf: line 48, column 82
    function initialValue_4 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLVInputSet.default.pcf: line 52, column 68
    function initialValue_5 () : gw.lob.common.schedules.LobScheduledItemColumnHelper {
      return new gw.lob.common.schedules.LobScheduledItemColumnHelper()
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at LobScheduledItemsLVInputSet.default.pcf: line 91, column 28
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyAddlInsured.Type.TypeInfo.DisplayName)
    }
    
    // 'label' attribute on ToolbarButton (id=ToolbarButton) at LobScheduledItemsLVInputSet.default.pcf: line 136, column 52
    function label_28 () : java.lang.Object {
      return openForEdit ? DisplayKey.get("Web.Policy.Schedule.EditButton") : DisplayKey.get("Web.Policy.Schedule.DetailsButton")
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at LobScheduledItemsLVInputSet.default.pcf: line 86, column 75
    function pickLocation_12 () : void {
      ContactSearchPopup.push(TC_ADDITIONALINSURED)
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemsLVInputSet.default.pcf: line 99, column 32
    function sortBy_13 (additionalInsured :  entity.AccountContactView) : java.lang.Object {
      return additionalInsured.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemsLVInputSet.default.pcf: line 119, column 32
    function sortBy_18 (otherContact :  entity.AccountContactView) : java.lang.Object {
      return otherContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemsLVInputSet.default.pcf: line 73, column 30
    function sortBy_6 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'value' attribute on AddMenuItemIterator at LobScheduledItemsLVInputSet.default.pcf: line 70, column 47
    function value_10 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYADDLINSURED)
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at LobScheduledItemsLVInputSet.default.pcf: line 96, column 55
    function value_16 () : entity.AccountContactView[] {
      return existingAdditionalInsureds
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfOtherType) at LobScheduledItemsLVInputSet.default.pcf: line 116, column 55
    function value_21 () : entity.AccountContactView[] {
      return otherContacts
    }
    
    // 'visible' attribute on AddMenuItem (id=AddOtherContact) at LobScheduledItemsLVInputSet.default.pcf: line 111, column 50
    function visible_22 () : java.lang.Boolean {
      return otherContacts.Count > 0
    }
    
    // 'visible' attribute on AddButton (id=AddContactsButton) at LobScheduledItemsLVInputSet.default.pcf: line 66, column 90
    function visible_23 () : java.lang.Boolean {
      return schedule.IsSimpleSchedule and schedule.IsAdditionalInsuredScheduleV2
    }
    
    // 'addVisible' attribute on IteratorButtons (id=ScheduledItemsAddRemoveButtons) at LobScheduledItemsLVInputSet.default.pcf: line 131, column 66
    function visible_24 () : java.lang.Boolean {
      return schedule.IsSimpleSchedule and not schedule.IsAdditionalInsuredScheduleV2
    }
    
    // 'visible' attribute on ToolbarButton (id=ToolbarButton) at LobScheduledItemsLVInputSet.default.pcf: line 136, column 52
    function visible_25 () : java.lang.Boolean {
      return not schedule.IsSimpleSchedule
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
    
    property get scheduledItemColumnHelper () : gw.lob.common.schedules.LobScheduledItemColumnHelper {
      return getVariableValue("scheduledItemColumnHelper", 0) as gw.lob.common.schedules.LobScheduledItemColumnHelper
    }
    
    property set scheduledItemColumnHelper ($arg :  gw.lob.common.schedules.LobScheduledItemColumnHelper) {
      setVariableValue("scheduledItemColumnHelper", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    
  }
  
  
}