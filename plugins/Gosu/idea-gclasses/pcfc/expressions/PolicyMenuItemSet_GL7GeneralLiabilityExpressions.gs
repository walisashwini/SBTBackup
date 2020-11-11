package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyMenuItemSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyMenuItemSet_GL7GeneralLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl7/policyfile/PolicyMenuItemSet.GL7GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 17, column 70
    function action_0 () : void {
      PolicyFile_PolicyInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7Exposures) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 37, column 69
    function action_10 () : void {
      PolicyFile_GL7Exposures.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7UnmannedAircraft) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 42, column 61
    function action_13 () : void {
      PolicyFile_GL7UnmannedAircrafts.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7Modifiers) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 46, column 69
    function action_15 () : void {
      PolicyFile_GL7Modifiers.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 50, column 67
    function action_17 () : void {
      PolicyFile_Pricing.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 54, column 72
    function action_19 () : void {
      PolicyFile_Forms_GL7.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_SublineSelection) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 21, column 76
    function action_2 () : void {
      PolicyFile_GL7SublineSelection.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_LineCoverages) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 25, column 76
    function action_4 () : void {
      PolicyFile_GL7GeneralLiabilityCoverages.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7StateSpecificInfo) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 29, column 84
    function action_6 () : void {
      PolicyFile_GL7StateSpecificInfo.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7Locations) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 33, column 69
    function action_8 () : void {
      PolicyFile_GL7Locations.go(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_PolicyInfo) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 17, column 70
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicyFile_PolicyInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7Exposures) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 37, column 69
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7Exposures.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7UnmannedAircraft) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 42, column 61
    function action_dest_14 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7UnmannedAircrafts.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7Modifiers) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 46, column 69
    function action_dest_16 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7Modifiers.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Pricing) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 50, column 67
    function action_dest_18 () : pcf.api.Destination {
      return pcf.PolicyFile_Pricing.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_Endorsements) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 54, column 72
    function action_dest_20 () : pcf.api.Destination {
      return pcf.PolicyFile_Forms_GL7.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_SublineSelection) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 21, column 76
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7SublineSelection.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_LineCoverages) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 25, column 76
    function action_dest_5 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7GeneralLiabilityCoverages.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7StateSpecificInfo) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 29, column 84
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7StateSpecificInfo.createDestination(period, asOfDate)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuItemSet_GL7Locations) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 33, column 69
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PolicyFile_GL7Locations.createDestination(period, asOfDate)
    }
    
    // 'visible' attribute on MenuItem (id=PolicyMenuItemSet_GL7UnmannedAircraft) at PolicyMenuItemSet.GL7GeneralLiability.pcf: line 42, column 61
    function visible_12 () : java.lang.Boolean {
      return period.GL7Line.isUnmannedAircraftAvailable
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}