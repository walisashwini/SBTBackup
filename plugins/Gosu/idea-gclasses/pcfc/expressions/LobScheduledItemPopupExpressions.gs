package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduledItemPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LobScheduledItemPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=ExistingAdditionalInsured) at LobScheduledItemPopup.pcf: line 100, column 170
    function label_12 () : java.lang.Object {
      return additionalInsured
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=ExistingAdditionalInsured) at LobScheduledItemPopup.pcf: line 100, column 170
    function toCreateAndAdd_13 (CheckedValues :  Object[]) : java.lang.Object {
      return schedule.addScheduledItem(additionalInsuredHelper?.getPolicyAdditionalInsuredDetail(additionalInsured.AccountContact.Contact, clause))
    }
    
    property get additionalInsured () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends LobScheduledItemPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=OtherContact) at LobScheduledItemPopup.pcf: line 119, column 165
    function label_17 () : java.lang.Object {
      return otherContact
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=OtherContact) at LobScheduledItemPopup.pcf: line 119, column 165
    function toCreateAndAdd_18 (CheckedValues :  Object[]) : java.lang.Object {
      return schedule.addScheduledItem(additionalInsuredHelper?.getPolicyAdditionalInsuredDetail(otherContact.AccountContact.Contact, clause))
    }
    
    property get otherContact () : entity.AccountContactView {
      return getIteratedValue(1) as entity.AccountContactView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobScheduledItemPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=ContactType) at LobScheduledItemPopup.pcf: line 76, column 122
    function conversionExpression_6 (PickedValue :  PolicyAddlInsuredDetail) : ScheduledItem {
      return schedule.modifyAndAddScheduledItem(PickedValue, clause, additionalInsuredHelper)
    }
    
    // 'label' attribute on AddMenuItem (id=ContactType) at LobScheduledItemPopup.pcf: line 76, column 122
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=ContactType) at LobScheduledItemPopup.pcf: line 76, column 122
    function pickLocation_7 () : void {
      NewAdditionalInsuredPopup.push((schedule as gw.api.domain.Clause).PolicyLine, contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends LobScheduledItemPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at LobScheduledItemPopup.pcf: line 132, column 35
    function def_onEnter_24 (def :  pcf.LobScheduledItemsLV) : void {
      def.onEnter(clause, schedule, openForEdit, jobWizardHelper, scheduledItemHelper, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on PanelRef at LobScheduledItemPopup.pcf: line 134, column 170
    function def_onEnter_26 (def :  pcf.LobSchedulePopupCV) : void {
      def.onEnter(clause, schedule, selectedScheduledItem, jobWizardHelper, openForEdit, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'def' attribute on PanelRef at LobScheduledItemPopup.pcf: line 132, column 35
    function def_refreshVariables_25 (def :  pcf.LobScheduledItemsLV) : void {
      def.refreshVariables(clause, schedule, openForEdit, jobWizardHelper, scheduledItemHelper, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on PanelRef at LobScheduledItemPopup.pcf: line 134, column 170
    function def_refreshVariables_27 (def :  pcf.LobSchedulePopupCV) : void {
      def.refreshVariables(clause, schedule, selectedScheduledItem, jobWizardHelper, openForEdit, coverageHelper, scheduledItemHelper, additionalInsuredHelper)
    }
    
    // 'editable' attribute on PanelRef at LobScheduledItemPopup.pcf: line 132, column 35
    function editable_23 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get selectedScheduledItem () : entity.ScheduledItem {
      return getCurrentSelection(1) as entity.ScheduledItem
    }
    
    property set selectedScheduledItem ($arg :  entity.ScheduledItem) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduledItemPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (clause :  gw.api.domain.Clause, schedule :  gw.api.domain.Schedule, category :  gw.api.productmodel.CoverageCategory, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper, coverageHelper :  gw.lob.common.coverage.CoverageHelper, scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper, scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper) : int {
      return 0
    }
    
    // 'canEdit' attribute on Popup (id=LobScheduledItemPopup) at LobScheduledItemPopup.pcf: line 9, column 35
    function canEdit_28 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddFromSearch) at LobScheduledItemPopup.pcf: line 83, column 75
    function conversionExpression_9 (PickedValue :  Contact) : ScheduledItem {
      return schedule.addScheduledItem(additionalInsuredHelper?.getPolicyAdditionalInsuredDetail(PickedValue, clause))
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemPopup.pcf: line 44, column 81
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemPopup.pcf: line 49, column 36
    function initialValue_1 () : AccountContactView[] {
      return (schedule as gw.api.domain.Clause).PolicyLine.ExistingAdditionalInsureds.asViews()
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemPopup.pcf: line 54, column 36
    function initialValue_2 () : AccountContactView[] {
      return (schedule as gw.api.domain.Clause).PolicyLine.AdditionalInsuredOtherCandidates.asViews()
    }
    
    // 'label' attribute on AddMenuItem (id=AddExistingContact) at LobScheduledItemPopup.pcf: line 88, column 28
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Contact.AddExisting", PolicyAddlInsured.Type.TypeInfo.DisplayName)
    }
    
    // EditButtons at LobScheduledItemPopup.pcf: line 57, column 23
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddFromSearch) at LobScheduledItemPopup.pcf: line 83, column 75
    function pickLocation_10 () : void {
      ContactSearchPopup.push(TC_ADDITIONALINSURED)
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemPopup.pcf: line 95, column 32
    function sortBy_11 (additionalInsured :  entity.AccountContactView) : java.lang.Object {
      return additionalInsured.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemPopup.pcf: line 114, column 32
    function sortBy_16 (otherContact :  entity.AccountContactView) : java.lang.Object {
      return otherContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemPopup.pcf: line 70, column 30
    function sortBy_4 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'startInEditMode' attribute on Popup (id=LobScheduledItemPopup) at LobScheduledItemPopup.pcf: line 9, column 35
    function startInEditMode_29 () : java.lang.Boolean {
      return startInEdit
    }
    
    // 'title' attribute on Popup (id=LobScheduledItemPopup) at LobScheduledItemPopup.pcf: line 9, column 35
    static function title_30 (additionalInsuredHelper :  gw.lob.common.AbstractAdditionalInsuredHelper, category :  gw.api.productmodel.CoverageCategory, clause :  gw.api.domain.Clause, coverageHelper :  gw.lob.common.coverage.CoverageHelper, jobWizardHelper :  gw.api.web.job.JobWizardHelper, openForEdit :  boolean, schedule :  gw.api.domain.Schedule, scheduledItemColumnHelper :  gw.lob.common.schedules.ScheduledItemColumnHelper, scheduledItemHelper :  gw.lob.common.schedules.ScheduledItemHelper, startInEdit :  boolean) : java.lang.Object {
      return schedule.ScheduleName
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfSameType) at LobScheduledItemPopup.pcf: line 92, column 90
    function value_14 () : entity.AccountContactView[] {
      return existingAdditionalInsureds
    }
    
    // 'value' attribute on AddMenuItemIterator (id=ContactOfOtherType) at LobScheduledItemPopup.pcf: line 111, column 77
    function value_19 () : entity.AccountContactView[] {
      return otherContacts
    }
    
    // 'value' attribute on AddMenuItemIterator at LobScheduledItemPopup.pcf: line 67, column 170
    function value_8 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(typekey.PolicyContactRole.TC_POLICYADDLINSURED)
    }
    
    // 'visible' attribute on AddMenuItem (id=AddOtherContact) at LobScheduledItemPopup.pcf: line 107, column 50
    function visible_20 () : java.lang.Boolean {
      return otherContacts.Count > 0
    }
    
    // 'visible' attribute on AddButton (id=AddContactsButton) at LobScheduledItemPopup.pcf: line 64, column 60
    function visible_21 () : java.lang.Boolean {
      return schedule.IsAdditionalInsuredScheduleV2
    }
    
    // 'addVisible' attribute on IteratorButtons at LobScheduledItemPopup.pcf: line 125, column 66
    function visible_22 () : java.lang.Boolean {
      return not (schedule.IsAdditionalInsuredScheduleV2)
    }
    
    override property get CurrentLocation () : pcf.LobScheduledItemPopup {
      return super.CurrentLocation as pcf.LobScheduledItemPopup
    }
    
    property get additionalInsuredHelper () : gw.lob.common.AbstractAdditionalInsuredHelper {
      return getVariableValue("additionalInsuredHelper", 0) as gw.lob.common.AbstractAdditionalInsuredHelper
    }
    
    property set additionalInsuredHelper ($arg :  gw.lob.common.AbstractAdditionalInsuredHelper) {
      setVariableValue("additionalInsuredHelper", 0, $arg)
    }
    
    property get category () : gw.api.productmodel.CoverageCategory {
      return getVariableValue("category", 0) as gw.api.productmodel.CoverageCategory
    }
    
    property set category ($arg :  gw.api.productmodel.CoverageCategory) {
      setVariableValue("category", 0, $arg)
    }
    
    property get clause () : gw.api.domain.Clause {
      return getVariableValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setVariableValue("clause", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get coverageHelper () : gw.lob.common.coverage.CoverageHelper {
      return getVariableValue("coverageHelper", 0) as gw.lob.common.coverage.CoverageHelper
    }
    
    property set coverageHelper ($arg :  gw.lob.common.coverage.CoverageHelper) {
      setVariableValue("coverageHelper", 0, $arg)
    }
    
    property get existingAdditionalInsureds () : AccountContactView[] {
      return getVariableValue("existingAdditionalInsureds", 0) as AccountContactView[]
    }
    
    property set existingAdditionalInsureds ($arg :  AccountContactView[]) {
      setVariableValue("existingAdditionalInsureds", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
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
    
    property get scheduledItemColumnHelper () : gw.lob.common.schedules.ScheduledItemColumnHelper {
      return getVariableValue("scheduledItemColumnHelper", 0) as gw.lob.common.schedules.ScheduledItemColumnHelper
    }
    
    property set scheduledItemColumnHelper ($arg :  gw.lob.common.schedules.ScheduledItemColumnHelper) {
      setVariableValue("scheduledItemColumnHelper", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getVariableValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setVariableValue("scheduledItemHelper", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    
  }
  
  
}