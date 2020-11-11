package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduledItemsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LobScheduledItemsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CellIterator (id=PropertyValues) at LobScheduledItemsLV.pcf: line 75, column 88
    function value_46 () : gw.api.productmodel.SchedulePropertyInfo[] {
      return propertyInfos
    }
    
    property get scheduledItem () : entity.ScheduledItem {
      return getIteratedValue(1) as entity.ScheduledItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_12 (def :  pcf.LobScheduledItemColumnInput_AdditionalInsured) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_14 (def :  pcf.LobScheduledItemColumnInput_AdditionalInterest) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_16 (def :  pcf.LobScheduledItemColumnInput_AutoNumber) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_18 (def :  pcf.LobScheduledItemColumnInput_BigDecimal) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_20 (def :  pcf.LobScheduledItemColumnInput_Boolean) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_22 (def :  pcf.LobScheduledItemColumnInput_Date) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_24 (def :  pcf.LobScheduledItemColumnInput_ForeignKey) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_26 (def :  pcf.LobScheduledItemColumnInput_ForeignKeyWithOptionLabels) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_28 (def :  pcf.LobScheduledItemColumnInput_Integer) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_30 (def :  pcf.LobScheduledItemColumnInput_IntegerRange) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_32 (def :  pcf.LobScheduledItemColumnInput_Option) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_34 (def :  pcf.LobScheduledItemColumnInput_PolicyContact) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_36 (def :  pcf.LobScheduledItemColumnInput_String) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_38 (def :  pcf.LobScheduledItemColumnInput_TextArea) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_onEnter_40 (def :  pcf.LobScheduledItemColumnInput_TypeKey) : void {
      def.onEnter(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_13 (def :  pcf.LobScheduledItemColumnInput_AdditionalInsured) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_15 (def :  pcf.LobScheduledItemColumnInput_AdditionalInterest) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_17 (def :  pcf.LobScheduledItemColumnInput_AutoNumber) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_19 (def :  pcf.LobScheduledItemColumnInput_BigDecimal) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_21 (def :  pcf.LobScheduledItemColumnInput_Boolean) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_23 (def :  pcf.LobScheduledItemColumnInput_Date) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_25 (def :  pcf.LobScheduledItemColumnInput_ForeignKey) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_27 (def :  pcf.LobScheduledItemColumnInput_ForeignKeyWithOptionLabels) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_29 (def :  pcf.LobScheduledItemColumnInput_Integer) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_31 (def :  pcf.LobScheduledItemColumnInput_IntegerRange) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_33 (def :  pcf.LobScheduledItemColumnInput_Option) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_35 (def :  pcf.LobScheduledItemColumnInput_PolicyContact) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_37 (def :  pcf.LobScheduledItemColumnInput_String) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_39 (def :  pcf.LobScheduledItemColumnInput_TextArea) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function def_refreshVariables_41 (def :  pcf.LobScheduledItemColumnInput_TypeKey) : void {
      def.refreshVariables(clause, propertyInfo, scheduledItem, displayableFactory, jobWizardHelper, openForEdit, scheduledItemColumnHelper)
    }
    
    // 'editable' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function editable_11 () : java.lang.Boolean {
      return schedule.IsSimpleSchedule
    }
    
    // 'mode' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function mode_42 () : java.lang.Object {
      return propertyInfo.ValueType
    }
    
    // 'required' attribute on ModalCellRef (id=UnvalidatedScheduledItemColumnInput) at LobScheduledItemsLV.pcf: line 82, column 29
    function required_44 () : java.lang.Boolean {
      return propertyInfo.Required
    }
    
    property get propertyInfo () : gw.api.productmodel.SchedulePropertyInfo {
      return getIteratedValue(2) as gw.api.productmodel.SchedulePropertyInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LobScheduledItemsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'required' attribute on TextCell (id=ColumnHeader_Cell) at LobScheduledItemsLV.pcf: line 54, column 27
    function required_4 () : java.lang.Boolean {
      return columnInfo.Required and columnInfo.ValueType != "AutoNumber"
    }
    
    // 'value' attribute on TextCell (id=ColumnHeader_Cell) at LobScheduledItemsLV.pcf: line 54, column 27
    function valueRoot_6 () : java.lang.Object {
      return columnInfo
    }
    
    // 'value' attribute on TextCell (id=ColumnHeader_Cell) at LobScheduledItemsLV.pcf: line 54, column 27
    function value_5 () : java.lang.String {
      return columnInfo.Label
    }
    
    property get columnInfo () : gw.api.productmodel.SchedulePropertyInfo {
      return getIteratedValue(1) as gw.api.productmodel.SchedulePropertyInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduledItemsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoAdd' attribute on RowIterator (id=ScheduledItemsIterator) at LobScheduledItemsLV.pcf: line 67, column 74
    function autoAdd_10 () : java.lang.Boolean {
      return schedule.ScheduledItems.IsEmpty and not schedule.IsAdditionalInsuredScheduleV2 and not schedule.isComplexSchedule and not schedule.IsPolicyContactSchedule
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLV.pcf: line 28, column 86
    function initialValue_0 () : gw.api.productmodel.SchedulePropertyInfo[] {
      return schedule.PropertyInfos
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLV.pcf: line 33, column 72
    function initialValue_1 () : java.util.List<gw.api.productmodel.CovTermPattern> {
      return (scheduledItemPattern == null) ? {} : scheduledItemPattern.CovTerms.sortBy(\elt -> elt.Priority)
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLV.pcf: line 39, column 77
    function initialValue_2 () : gw.api.productmodel.ClausePattern {
      return schedule.ScheduledItemMultiPatterns?.first()
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemsLV.pcf: line 43, column 82
    function initialValue_3 () : gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2 {
      return new gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2()
    }
    
    // 'sortBy' attribute on IteratorSort at LobScheduledItemsLV.pcf: line 70, column 24
    function sortBy_9 (scheduledItem :  entity.ScheduledItem) : java.lang.Object {
      return scheduledItem.getFieldValue("ScheduleNumber")
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ScheduledItemsIterator) at LobScheduledItemsLV.pcf: line 67, column 74
    function toCreateAndAdd_47 () : entity.ScheduledItem {
      return scheduledItemHelper.addScheduledItem(schedule)
    }
    
    // 'toRemove' attribute on RowIterator (id=ScheduledItemsIterator) at LobScheduledItemsLV.pcf: line 67, column 74
    function toRemove_48 (scheduledItem :  entity.ScheduledItem) : void {
      scheduledItemHelper.removeScheduledItem(schedule, scheduledItem)
    }
    
    // 'value' attribute on RowIterator (id=ScheduledItemsIterator) at LobScheduledItemsLV.pcf: line 67, column 74
    function value_49 () : entity.ScheduledItem[] {
      return schedule.ScheduledItems
    }
    
    // 'value' attribute on CellIterator (id=ColumnHeaders) at LobScheduledItemsLV.pcf: line 49, column 86
    function value_8 () : gw.api.productmodel.SchedulePropertyInfo[] {
      return propertyInfos
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
    }
    
    property get covTermPatterns () : java.util.List<gw.api.productmodel.CovTermPattern> {
      return getVariableValue("covTermPatterns", 0) as java.util.List<gw.api.productmodel.CovTermPattern>
    }
    
    property set covTermPatterns ($arg :  java.util.List<gw.api.productmodel.CovTermPattern>) {
      setVariableValue("covTermPatterns", 0, $arg)
    }
    
    property get displayableFactory () : gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2 {
      return getVariableValue("displayableFactory", 0) as gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2
    }
    
    property set displayableFactory ($arg :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2) {
      setVariableValue("displayableFactory", 0, $arg)
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
    
    property get propertyInfos () : gw.api.productmodel.SchedulePropertyInfo[] {
      return getVariableValue("propertyInfos", 0) as gw.api.productmodel.SchedulePropertyInfo[]
    }
    
    property set propertyInfos ($arg :  gw.api.productmodel.SchedulePropertyInfo[]) {
      setVariableValue("propertyInfos", 0, $arg)
    }
    
    property get schedule () : gw.api.domain.Schedule {
      return getRequireValue("schedule", 0) as gw.api.domain.Schedule
    }
    
    property set schedule ($arg :  gw.api.domain.Schedule) {
      setRequireValue("schedule", 0, $arg)
    }
    
    property get scheduledItemColumnHelper () : gw.lob.common.schedules.ScheduledItemColumnHelper {
      return getRequireValue("scheduledItemColumnHelper", 0) as gw.lob.common.schedules.ScheduledItemColumnHelper
    }
    
    property set scheduledItemColumnHelper ($arg :  gw.lob.common.schedules.ScheduledItemColumnHelper) {
      setRequireValue("scheduledItemColumnHelper", 0, $arg)
    }
    
    property get scheduledItemHelper () : gw.lob.common.schedules.ScheduledItemHelper {
      return getRequireValue("scheduledItemHelper", 0) as gw.lob.common.schedules.ScheduledItemHelper
    }
    
    property set scheduledItemHelper ($arg :  gw.lob.common.schedules.ScheduledItemHelper) {
      setRequireValue("scheduledItemHelper", 0, $arg)
    }
    
    property get scheduledItemPattern () : gw.api.productmodel.ClausePattern {
      return getVariableValue("scheduledItemPattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set scheduledItemPattern ($arg :  gw.api.productmodel.ClausePattern) {
      setVariableValue("scheduledItemPattern", 0, $arg)
    }
    
    
  }
  
  
}