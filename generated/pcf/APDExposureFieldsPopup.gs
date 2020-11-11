package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDExposureFieldsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (exposure :  APDExposure) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDExposureFieldsPopup, {exposure}, 0)
  }
  
  static function createDestination (exposure :  APDExposure, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDExposureFieldsPopup, {exposure, startInEditMode}, 1)
  }
  
  static function push (exposure :  APDExposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDExposureFieldsPopup, {exposure}, 0).push()
  }
  
  static function push (exposure :  APDExposure, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDExposureFieldsPopup, {exposure, startInEditMode}, 1).push()
  }
  
  
}