package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/LobCoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobCoveragePatternSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (coverable :  Coverable, searchType :  CoveragePatternSearchType, coverageCategories :  String[], includeElseExclude :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.LobCoveragePatternSearchPopup, {coverable, searchType, coverageCategories, includeElseExclude}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.productmodel.ClausePattern[]) : void {
    __widgetOf(this, pcf.LobCoveragePatternSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (coverable :  Coverable, searchType :  CoveragePatternSearchType, coverageCategories :  String[], includeElseExclude :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.LobCoveragePatternSearchPopup, {coverable, searchType, coverageCategories, includeElseExclude}, 0).push()
  }
  
  
}