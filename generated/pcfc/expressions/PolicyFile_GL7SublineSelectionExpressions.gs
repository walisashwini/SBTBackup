package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7SublineSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_GL7SublineSelectionExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7SublineSelection.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_GL7SublineSelectionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_GL7SublineSelection) at PolicyFile_GL7SublineSelection.pcf: line 9, column 73
    static function canVisit_2 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfiledetails
    }
    
    // 'def' attribute on PanelRef at PolicyFile_GL7SublineSelection.pcf: line 20, column 59
    function def_onEnter_0 (def :  pcf.GL7SublineSelectionDV) : void {
      def.onEnter(policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_GL7SublineSelection.pcf: line 20, column 59
    function def_refreshVariables_1 (def :  pcf.GL7SublineSelectionDV) : void {
      def.refreshVariables(policyPeriod, false)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_GL7SublineSelection) at PolicyFile_GL7SublineSelection.pcf: line 9, column 73
    static function parent_3 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_GL7SublineSelection {
      return super.CurrentLocation as pcf.PolicyFile_GL7SublineSelection
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}