package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDNewScheduleTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDNewScheduleTermPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (riskScheduleItems :  APDRiskScheduleItem[], clause :  APDClause) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDNewScheduleTermPopup, {riskScheduleItems, clause}, 0)
  }
  
  static function push (riskScheduleItems :  APDRiskScheduleItem[], clause :  APDClause) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDNewScheduleTermPopup, {riskScheduleItems, clause}, 0).push()
  }
  
  
}