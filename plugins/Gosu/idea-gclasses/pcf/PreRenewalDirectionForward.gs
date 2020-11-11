package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalDirectionForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PreRenewalDirectionForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyPeriod :  PolicyPeriod) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0)
  }
  
  static function drilldown (policyPeriod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (policyPeriod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (policyPeriod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (policyPeriod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0).goInWorkspace()
  }
  
  static function printPage (policyPeriod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0).printPage()
  }
  
  static function push (policyPeriod :  PolicyPeriod) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PreRenewalDirectionForward, {policyPeriod}, 0).push()
  }
  
  
}