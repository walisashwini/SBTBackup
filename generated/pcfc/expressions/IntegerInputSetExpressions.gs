package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/IntegerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegerInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/IntegerInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegerInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function confirmMessage_3 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.IntegerValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function editable_1 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function label_4 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at IntegerInputSet.pcf: line 33, column 50
    function onChange_0 () : void {
      displayable.onChange(wizard)
    }
    
    // 'onChange' attribute on PostOnChange at IntegerInputSet.pcf: line 46, column 50
    function onChange_15 () : void {
      displayable.onChange(wizard)
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function requestValidationExpression_6 (VALUE :  java.lang.Integer) : java.lang.Object {
      return (schedulePropertyInfo typeis gw.lob.common.sbt.schedules.impl.ScheduleIntegerRangePropertyInfo ) ? schedulePropertyInfo.validate(VALUE) : null
    }
    
    // 'required' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function required_7 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'showConfirmMessage' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function showConfirmMessage_5 () : java.lang.Boolean {
      return displayable.ShowConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function valueRoot_10 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function value_8 () : java.lang.Integer {
      return displayable.IntegerValue
    }
    
    // 'visible' attribute on TextInput (id=FieldDependencyDisplayable_Input) at IntegerInputSet.pcf: line 44, column 92
    function visible_17 () : java.lang.Boolean {
      return fieldDependencyInput and displayable.Visible
    }
    
    // 'visible' attribute on TextInput (id=Displayable_Input) at IntegerInputSet.pcf: line 31, column 96
    function visible_2 () : java.lang.Boolean {
      return not fieldDependencyInput and displayable.Visible
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable<java.lang.Integer> {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.Displayable<java.lang.Integer>
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable<java.lang.Integer>) {
      setRequireValue("displayable", 0, $arg)
    }
    
    property get fieldDependencyInput () : boolean {
      return getRequireValue("fieldDependencyInput", 0) as java.lang.Boolean
    }
    
    property set fieldDependencyInput ($arg :  boolean) {
      setRequireValue("fieldDependencyInput", 0, $arg)
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
    
    property get wizard () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("wizard", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set wizard ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}