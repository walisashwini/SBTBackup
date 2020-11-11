package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDClauseTermsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class APDClauseTermsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clause :  APDClause) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause}, 0)
  }
  
  static function createDestination (clause :  APDClause, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause, startInEditMode}, 1)
  }
  
  static function push (clause :  APDClause) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause}, 0).push()
  }
  
  static function push (clause :  APDClause, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.APDClauseTermsPopup, {clause, startInEditMode}, 1).push()
  }
  
  
}