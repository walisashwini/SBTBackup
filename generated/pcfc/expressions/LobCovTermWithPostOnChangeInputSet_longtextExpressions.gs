package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobCovTermWithPostOnChangeInputSet.longtext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LobCovTermWithPostOnChangeInputSet_longtextExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/LobCovTermWithPostOnChangeInputSet.longtext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LobCovTermWithPostOnChangeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=StringTermInput_Input) at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 27, column 111
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.GenericCovTerm<String>).Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=StringTermInput_Input) at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 27, column 111
    function editable_2 () : java.lang.Boolean {
      return displayable.Editable
    }
    
    // 'initialValue' attribute on Variable at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 21, column 63
    function initialValue_0 () : gw.lob.common.displayable.LobCovTermDisplayable {
      return new gw.lob.common.displayable.LobCovTermDisplayable(term, jobWizardHelper, openForEdit)
    }
    
    // 'label' attribute on TextInput (id=StringTermInput_Input) at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 27, column 111
    function label_3 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 29, column 119
    function onChange_1 () : void {
      gw.lob.common.LobPropertyService.Instance.updateCovTermDependentProperties(term, jobWizardHelper)
    }
    
    // 'required' attribute on TextInput (id=StringTermInput_Input) at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 27, column 111
    function required_4 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'value' attribute on TextInput (id=StringTermInput_Input) at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 27, column 111
    function valueRoot_7 () : java.lang.Object {
      return (term as gw.api.domain.covterm.GenericCovTerm<String>)
    }
    
    // 'value' attribute on TextInput (id=StringTermInput_Input) at LobCovTermWithPostOnChangeInputSet.longtext.pcf: line 27, column 111
    function value_5 () : java.lang.String {
      return (term as gw.api.domain.covterm.GenericCovTerm<String>).Value
    }
    
    property get displayable () : gw.lob.common.displayable.LobCovTermDisplayable {
      return getVariableValue("displayable", 0) as gw.lob.common.displayable.LobCovTermDisplayable
    }
    
    property set displayable ($arg :  gw.lob.common.displayable.LobCovTermDisplayable) {
      setVariableValue("displayable", 0, $arg)
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