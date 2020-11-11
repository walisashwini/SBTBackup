package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobCovTermWithPostOnChangeInputSet.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobCovTermWithPostOnChangeInputSet_OptionExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobCovTermWithPostOnChangeInputSet.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobCovTermWithPostOnChangeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.OptionCovTerm).OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt)
    }
    
    // 'editable' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function editable_3 () : java.lang.Boolean {
      return displayable.Editable and editable
    }
    
    // 'initialValue' attribute on Variable at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 21, column 23
    function initialValue_0 () : boolean {
      return gw.web.productmodel.ChoiceCovTermUtil.isEditable(term)
    }
    
    // 'initialValue' attribute on Variable at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 26, column 63
    function initialValue_1 () : gw.lob.common.displayable.LobCovTermDisplayable {
      return new gw.lob.common.displayable.LobCovTermDisplayable(term, jobWizardHelper, openForEdit)
    }
    
    // 'label' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function label_4 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 36, column 119
    function onChange_2 () : void {
      gw.lob.common.LobPropertyService.Instance.updateCovTermDependentProperties(term, jobWizardHelper)
    }
    
    // 'required' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function required_5 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function valueRange_9 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(term as gw.api.domain.covterm.OptionCovTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function valueRoot_8 () : java.lang.Object {
      return (term as gw.api.domain.covterm.OptionCovTerm)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function value_6 () : gw.api.productmodel.CovTermOpt {
      return (term as gw.api.domain.covterm.OptionCovTerm).OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.productmodel.CovTermOpt[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at LobCovTermWithPostOnChangeInputSet.Option.pcf: line 34, column 178
    function verifyValueRange_11 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(term as gw.api.domain.covterm.OptionCovTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get displayable () : gw.lob.common.displayable.LobCovTermDisplayable {
      return getVariableValue("displayable", 0) as gw.lob.common.displayable.LobCovTermDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobCovTermDisplayable) {
      setVariableValue("displayable", 0, $arg)
    }
    
    property get editable () : boolean {
      return getVariableValue("editable", 0) as java.lang.Boolean
    }
    
    property set editable ($arg :  boolean) {
      setVariableValue("editable", 0, $arg)
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
    
    property get term () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("term", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set term ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("term", 0, $arg)
    }
    
    
  }
  
  
}