package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDSplitRiskPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDSplitRiskPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (splittableRisks :  List<gw.lob.apd.APDSplittableRisk>) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDSplitRiskPopup, {splittableRisks}, 0)
  }
  
  static function push (splittableRisks :  List<gw.lob.apd.APDSplittableRisk>) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDSplitRiskPopup, {splittableRisks}, 0).push()
  }
  
  
}