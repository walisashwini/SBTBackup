package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GL7PolicyReviewPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7PolicyReviewPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GL7PolicyReviewPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rowEntity () : Object {
      return getRequireValue("rowEntity", 0) as Object
    }
    
    property set rowEntity ($arg :  Object) {
      setRequireValue("rowEntity", 0, $arg)
    }
    
    
  }
  
  
}