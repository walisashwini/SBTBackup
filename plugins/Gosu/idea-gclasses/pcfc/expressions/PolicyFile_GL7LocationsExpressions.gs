package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7Locations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_GL7LocationsExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyFile_GL7Locations.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_GL7LocationsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at PolicyFile_GL7Locations.pcf: line 19, column 115
    function def_onEnter_0 (def :  pcf.GL7LocationsPanelSet) : void {
      def.onEnter(policyPeriod, false, policyPeriod.GL7Line.SupportsNonSpecificLocations, null)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_GL7Locations.pcf: line 19, column 115
    function def_refreshVariables_1 (def :  pcf.GL7LocationsPanelSet) : void {
      def.refreshVariables(policyPeriod, false, policyPeriod.GL7Line.SupportsNonSpecificLocations, null)
    }
    
    // 'parent' attribute on Page (id=PolicyFile_GL7Locations) at PolicyFile_GL7Locations.pcf: line 8, column 70
    static function parent_2 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_GL7Locations {
      return super.CurrentLocation as pcf.PolicyFile_GL7Locations
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