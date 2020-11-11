package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/AdditionalInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalInsuredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/AdditionalInsuredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalInsuredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'confirmMessage' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function confirmMessage_4 () : java.lang.String {
      return displayable.ConfirmMessage
    }
    
    // 'value' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayable.Value = (__VALUE_TO_SET as entity.PolicyAddlInsuredDetail)
    }
    
    // 'editable' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function editable_1 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'label' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function label_5 () : java.lang.Object {
      return displayable.Label
    }
    
    // 'onChange' attribute on PostOnChange at AdditionalInsuredInputSet.pcf: line 27, column 50
    function onChange_0 () : void {
      displayable.onChange(wizard)
    }
    
    // 'onChange' attribute on PostOnChange at AdditionalInsuredInputSet.pcf: line 40, column 50
    function onChange_16 () : void {
      displayable.onChange(wizard)
    }
    
    // 'required' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function required_7 () : java.lang.Boolean {
      return displayable.Required
    }
    
    // 'showConfirmMessage' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function showConfirmMessage_6 () : java.lang.Boolean {
      return displayable.ShowConfirmMessage
    }
    
    // 'validationExpression' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function validationExpression_2 () : java.lang.Object {
      return displayable.ValidateExpression
    }
    
    // 'value' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function valueRoot_10 () : java.lang.Object {
      return displayable
    }
    
    // 'value' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function value_8 () : entity.PolicyAddlInsuredDetail {
      return displayable.Value
    }
    
    // 'visible' attribute on TextInput (id=FieldDependencyDisplayable_Input) at AdditionalInsuredInputSet.pcf: line 38, column 105
    function visible_19 () : java.lang.Boolean {
      return fieldDependencyInput and displayable.Visible
    }
    
    // 'visible' attribute on TextInput (id=Displayable_Input) at AdditionalInsuredInputSet.pcf: line 25, column 109
    function visible_3 () : java.lang.Boolean {
      return not fieldDependencyInput and displayable.Visible
    }
    
    property get displayable () : gw.lob.common.displayable.Displayable<PolicyAddlInsuredDetail> {
      return getRequireValue("displayable", 0) as gw.lob.common.displayable.Displayable<PolicyAddlInsuredDetail>
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.Displayable<PolicyAddlInsuredDetail>) {
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