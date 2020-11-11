package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropDownDefinitionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDDropDownDefinitionPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (attribute :  APDAttribute) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropDownDefinitionPopup, {attribute}, 0)
  }
  
  static function createDestination (attribute :  APDAttribute, isTerm :  Boolean, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDDropDownDefinitionPopup, {attribute, isTerm, startInEditMode}, 1)
  }
  
  static function push (attribute :  APDAttribute) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropDownDefinitionPopup, {attribute}, 0).push()
  }
  
  static function push (attribute :  APDAttribute, isTerm :  Boolean, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDDropDownDefinitionPopup, {attribute, isTerm, startInEditMode}, 1).push()
  }
  
  
}