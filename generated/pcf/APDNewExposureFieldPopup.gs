package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewExposureFieldPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewExposureFieldPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskExposures :  APDRiskExposure[], exposure :  APDExposure) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewExposureFieldPopup, {riskExposures, exposure}, 0)
  }
  
  static function push (riskExposures :  APDRiskExposure[], exposure :  APDExposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewExposureFieldPopup, {riskExposures, exposure}, 0).push()
  }
  
  
}