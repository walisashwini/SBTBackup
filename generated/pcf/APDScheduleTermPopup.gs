package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDScheduleTermPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (field :  APDTerm) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field}, 0)
  }
  
  static function createDestination (field :  APDTerm, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field, startInEditMode}, 1)
  }
  
  static function push (field :  APDTerm) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field}, 0).push()
  }
  
  static function push (field :  APDTerm, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDScheduleTermPopup, {field, startInEditMode}, 1).push()
  }
  
  
}