package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DemoPaymentGatewayPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DemoPaymentGatewayPage, {amount, jobNumber}, 0)
  }
  
  static function drilldown (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DemoPaymentGatewayPage, {amount, jobNumber}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DemoPaymentGatewayPage, {amount, jobNumber}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DemoPaymentGatewayPage, {amount, jobNumber}, 0).goInMain()
  }
  
  static function printPage (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DemoPaymentGatewayPage, {amount, jobNumber}, 0).printPage()
  }
  
  static function push (amount :  java.math.BigDecimal, jobNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DemoPaymentGatewayPage, {amount, jobNumber}, 0).push()
  }
  
  
}