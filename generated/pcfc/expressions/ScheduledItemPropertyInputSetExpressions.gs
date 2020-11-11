package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemPropertyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemPropertyInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemPropertyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemPropertyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=StringInput) at ScheduledItemPropertyInputSet.pcf: line 43, column 71
    function def_onEnter_12 (def :  pcf.StringInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<String>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=RangeInput) at ScheduledItemPropertyInputSet.pcf: line 47, column 208
    function def_onEnter_15 (def :  pcf.RangeInputSet) : void {
      def.onEnter(displayable, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledItemPropertyInputSet.pcf: line 50, column 75
    function def_onEnter_18 (def :  pcf.BigDecimalInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<java.math.BigDecimal>, scheduledItem, schedulePropertyInfo, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledItemPropertyInputSet.pcf: line 53, column 73
    function def_onEnter_21 (def :  pcf.TextAreaInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<String>, scheduledItem, schedulePropertyInfo, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=AdditionalInsured) at ScheduledItemPropertyInputSet.pcf: line 57, column 82
    function def_onEnter_24 (def :  pcf.AdditionalInsuredInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<PolicyAddlInsuredDetail>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=AdditionalInterest) at ScheduledItemPropertyInputSet.pcf: line 61, column 83
    function def_onEnter_27 (def :  pcf.AdditionalInterestInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<AddlInterestDetail>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=IntegerInput) at ScheduledItemPropertyInputSet.pcf: line 31, column 251
    function def_onEnter_3 (def :  pcf.IntegerInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<java.lang.Integer>, scheduledItem, schedulePropertyInfo, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=BooleanInput) at ScheduledItemPropertyInputSet.pcf: line 35, column 72
    function def_onEnter_6 (def :  pcf.BooleanInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<Boolean>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=DateInput) at ScheduledItemPropertyInputSet.pcf: line 39, column 69
    function def_onEnter_9 (def :  pcf.DateInputSet) : void {
      def.onEnter(displayable as gw.lob.common.displayable.Displayable<java.util.Date>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=DateInput) at ScheduledItemPropertyInputSet.pcf: line 39, column 69
    function def_refreshVariables_10 (def :  pcf.DateInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<java.util.Date>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=StringInput) at ScheduledItemPropertyInputSet.pcf: line 43, column 71
    function def_refreshVariables_13 (def :  pcf.StringInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<String>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=RangeInput) at ScheduledItemPropertyInputSet.pcf: line 47, column 208
    function def_refreshVariables_16 (def :  pcf.RangeInputSet) : void {
      def.refreshVariables(displayable, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledItemPropertyInputSet.pcf: line 50, column 75
    function def_refreshVariables_19 (def :  pcf.BigDecimalInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<java.math.BigDecimal>, scheduledItem, schedulePropertyInfo, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at ScheduledItemPropertyInputSet.pcf: line 53, column 73
    function def_refreshVariables_22 (def :  pcf.TextAreaInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<String>, scheduledItem, schedulePropertyInfo, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=AdditionalInsured) at ScheduledItemPropertyInputSet.pcf: line 57, column 82
    function def_refreshVariables_25 (def :  pcf.AdditionalInsuredInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<PolicyAddlInsuredDetail>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=AdditionalInterest) at ScheduledItemPropertyInputSet.pcf: line 61, column 83
    function def_refreshVariables_28 (def :  pcf.AdditionalInterestInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<AddlInterestDetail>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=IntegerInput) at ScheduledItemPropertyInputSet.pcf: line 31, column 251
    function def_refreshVariables_4 (def :  pcf.IntegerInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<java.lang.Integer>, scheduledItem, schedulePropertyInfo, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=BooleanInput) at ScheduledItemPropertyInputSet.pcf: line 35, column 72
    function def_refreshVariables_7 (def :  pcf.BooleanInputSet) : void {
      def.refreshVariables(displayable as gw.lob.common.displayable.Displayable<Boolean>, propertyInfoHasDependent, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemPropertyInputSet.pcf: line 23, column 53
    function initialValue_0 () : gw.lob.common.displayable.Displayable {
      return displayableFactory.createEditableSchedulePropertyInfoDisplayable(scheduledItem, schedulePropertyInfo)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemPropertyInputSet.pcf: line 27, column 23
    function initialValue_1 () : boolean {
      return displayableFactory.doesPropertyHaveDependents(scheduledItem, schedulePropertyInfo)
    }
    
    // 'visible' attribute on InputSetRef (id=StringInput) at ScheduledItemPropertyInputSet.pcf: line 43, column 71
    function visible_11 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "String"
    }
    
    // 'visible' attribute on InputSetRef (id=RangeInput) at ScheduledItemPropertyInputSet.pcf: line 47, column 208
    function visible_14 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "TypeKey" or schedulePropertyInfo.ValueType == "ForeignKey" or schedulePropertyInfo.ValueType == "ForeignKeyWithOptionLabels"
    }
    
    // 'visible' attribute on InputSetRef at ScheduledItemPropertyInputSet.pcf: line 50, column 75
    function visible_17 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "BigDecimal"
    }
    
    // 'visible' attribute on InputSetRef (id=IntegerInput) at ScheduledItemPropertyInputSet.pcf: line 31, column 251
    function visible_2 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "AutoNumber" or schedulePropertyInfo.ValueType == "Integer" or schedulePropertyInfo.ValueType == "Percent" or schedulePropertyInfo.ValueType == "IntegerRange"
    }
    
    // 'visible' attribute on InputSetRef at ScheduledItemPropertyInputSet.pcf: line 53, column 73
    function visible_20 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "TextArea"
    }
    
    // 'visible' attribute on InputSetRef (id=AdditionalInsured) at ScheduledItemPropertyInputSet.pcf: line 57, column 82
    function visible_23 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "AdditionalInsured"
    }
    
    // 'visible' attribute on InputSetRef (id=AdditionalInterest) at ScheduledItemPropertyInputSet.pcf: line 61, column 83
    function visible_26 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "AdditionalInterest"
    }
    
    // 'visible' attribute on InputSetRef (id=BooleanInput) at ScheduledItemPropertyInputSet.pcf: line 35, column 72
    function visible_5 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "Boolean"
    }
    
    // 'visible' attribute on InputSetRef (id=DateInput) at ScheduledItemPropertyInputSet.pcf: line 39, column 69
    function visible_8 () : java.lang.Boolean {
      return schedulePropertyInfo.ValueType == "Date"
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable {
      return getVariableValue("displayable", 0) as gw.lob.common.displayable.Displayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable) {
      setVariableValue("displayable", 0, $arg)
    }
    
    property get displayableFactory () : gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactory {
      return getRequireValue("displayableFactory", 0) as gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactory
    }
    
    property set displayableFactory ($arg :  gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactory) {
      setRequireValue("displayableFactory", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get propertyInfoHasDependent () : boolean {
      return getVariableValue("propertyInfoHasDependent", 0) as java.lang.Boolean
    }
    
    property set propertyInfoHasDependent ($arg :  boolean) {
      setVariableValue("propertyInfoHasDependent", 0, $arg)
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
    
    
  }
  
  
}