package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewLaborContractorForContactTypePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewLaborContractorForContactTypePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (line :  WorkersCompLine, contactType :  typekey.ContactType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewLaborContractorForContactTypePopup, {line, contactType}, 0)
  }
  
  function pickValueAndCommit (value :  WCLaborContactDetail) : void {
    __widgetOf(this, pcf.NewLaborContractorForContactTypePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (line :  WorkersCompLine, contactType :  typekey.ContactType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewLaborContractorForContactTypePopup, {line, contactType}, 0).push()
  }
  
  
}