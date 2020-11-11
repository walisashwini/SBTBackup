package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/DateInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DateInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/DateInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DateInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function confirmMessage_3 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function editable_1 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function label_4 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at DateInputSet.pcf: line 26, column 50
    function onChange_0 () : void {
      displayable.onChange(wizard)
    }
    
    // 'onChange' attribute on PostOnChange at DateInputSet.pcf: line 38, column 50
    function onChange_14 () : void {
      displayable.onChange(wizard)
    }
    
    // 'required' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function required_6 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'showConfirmMessage' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function showConfirmMessage_5 () : java.lang.Boolean {
      return displayable.ShowConfirmMessage
    }
    
    // 'value' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function valueRoot_9 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function value_7 () : java.util.Date {
      return displayable.Value
    }
    
    // 'visible' attribute on DateInput (id=FieldDependencyDisplayable_Input) at DateInputSet.pcf: line 36, column 62
    function visible_16 () : java.lang.Boolean {
      return fieldDependencyInput and displayable.Visible
    }
    
    // 'visible' attribute on DateInput (id=Displayable_Input) at DateInputSet.pcf: line 24, column 66
    function visible_2 () : java.lang.Boolean {
      return not fieldDependencyInput and displayable.Visible
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable<java.util.Date> {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.Displayable<java.util.Date>
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable<java.util.Date>) {
      setRequireValue("displayable", 0, $arg)
    }
    
    property get fieldDependencyInput () : boolean {
      return getRequireValue("fieldDependencyInput", 0) as java.lang.Boolean
    }
    
    property set fieldDependencyInput ($arg :  boolean) {
      setRequireValue("fieldDependencyInput", 0, $arg)
    }
    
    property get wizard () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("wizard", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set wizard ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}