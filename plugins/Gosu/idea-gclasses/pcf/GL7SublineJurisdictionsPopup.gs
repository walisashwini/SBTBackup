package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7SublineJurisdictionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7SublineJurisdictionsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter, openForEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GL7SublineJurisdictionsPopup, {policyPeriod, presenter, openForEdit}, 0)
  }
  
  static function push (policyPeriod :  PolicyPeriod, presenter :  gw.lob.gl7.presenters.GL7SublineJurisdictionsPresenter, openForEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GL7SublineJurisdictionsPopup, {policyPeriod, presenter, openForEdit}, 0).push()
  }
  
  
}