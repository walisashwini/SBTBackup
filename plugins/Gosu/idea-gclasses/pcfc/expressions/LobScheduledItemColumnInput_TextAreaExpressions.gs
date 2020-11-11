package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemColumnInput.TextArea.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobScheduledItemColumnInput_TextAreaExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobScheduledItemColumnInput.TextArea.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobScheduledItemColumnInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TextAreaCell (id=TextAreaValue_Cell) at LobScheduledItemColumnInput.TextArea.pcf: line 40, column 33
    function available_2 () : java.lang.Boolean {
      return displayable.Available
    }
    
    // 'value' attribute on TextAreaCell (id=TextAreaValue_Cell) at LobScheduledItemColumnInput.TextArea.pcf: line 40, column 33
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at LobScheduledItemColumnInput.TextArea.pcf: line 32, column 67
    function initialValue_0 () : gw.lob.common.displayable.Displayable<String> {
      return displayableFactory.createSchedulePropertyInfoDisplayable(clause, scheduledItem, schedulePropertyInfo) as gw.lob.common.displayable.Displayable<String>
    }
    
    // 'onChange' attribute on PostOnChange at LobScheduledItemColumnInput.TextArea.pcf: line 42, column 59
    function onChange_1 () : void {
      displayable.onChange(jobWizardHelper)
    }
    
    // 'required' attribute on TextAreaCell (id=TextAreaValue_Cell) at LobScheduledItemColumnInput.TextArea.pcf: line 40, column 33
    function required_3 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'value' attribute on TextAreaCell (id=TextAreaValue_Cell) at LobScheduledItemColumnInput.TextArea.pcf: line 40, column 33
    function valueRoot_6 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextAreaCell (id=TextAreaValue_Cell) at LobScheduledItemColumnInput.TextArea.pcf: line 40, column 33
    function value_4 () : java.lang.String {
      return displayable.Value
    }
    
    property get clause () : gw.api.domain.Clause {
      return getRequireValue("clause", 0) as gw.api.domain.Clause
    }
    
    property set clause ($arg :  gw.api.domain.Clause) {
      setRequireValue("clause", 0, $arg)
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable<String> {
      return getVariableValue("displayable", 0) as gw.lob.common.displayable.Displayable<String>
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable<String>) {
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