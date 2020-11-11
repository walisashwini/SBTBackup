package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/BooleanInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BooleanInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/BooleanInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BooleanInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function confirmMessage_3 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function editable_1 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function label_4 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at BooleanInputSet.pcf: line 26, column 50
    function onChange_0 () : void {
      displayable.onChange(wizard)
    }
    
    // 'onChange' attribute on PostOnChange at BooleanInputSet.pcf: line 38, column 50
    function onChange_13 () : void {
      displayable.onChange(wizard)
    }
    
    // 'showConfirmMessage' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function showConfirmMessage_5 () : java.lang.Boolean {
      return displayable.ShowConfirmMessage
    }
    
    // 'value' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function valueRoot_8 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function value_6 () : java.lang.Boolean {
      return displayable.Value
    }
    
    // 'visible' attribute on CheckBoxInput (id=FieldDependencyDisplayable_Input) at BooleanInputSet.pcf: line 36, column 62
    function visible_15 () : java.lang.Boolean {
      return fieldDependencyInput and displayable.Visible
    }
    
    // 'visible' attribute on CheckBoxInput (id=Displayable_Input) at BooleanInputSet.pcf: line 24, column 66
    function visible_2 () : java.lang.Boolean {
      return not fieldDependencyInput and displayable.Visible
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable<Boolean> {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.Displayable<Boolean>
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable<Boolean>) {
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