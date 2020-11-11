package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDLoadProductTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDLoadProductTemplatePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (existingProduct :  APDProduct) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {existingProduct}, 1)
  }
  
  static function createDestination (account :  Account, selectionOfProducer :  ProducerSelection) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {account, selectionOfProducer}, 0)
  }
  
  static function push (existingProduct :  APDProduct) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {existingProduct}, 1).push()
  }
  
  static function push (account :  Account, selectionOfProducer :  ProducerSelection) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDLoadProductTemplatePopup, {account, selectionOfProducer}, 0).push()
  }
  
  
}