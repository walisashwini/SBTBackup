package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/widgets/datamodel/LobRangeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LobRangeSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (displayable :  gw.lob.common.displayable.LobDisplayable) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.LobRangeSearchPopup, {displayable}, 0)
  }
  
  function pickValueAndCommit (value :  gw.lob.common.search.LobQueryResultRow) : void {
    __widgetOf(this, pcf.LobRangeSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (displayable :  gw.lob.common.displayable.LobDisplayable) : pcf.api.Location {
    return __newDestinationForLocation(pcf.LobRangeSearchPopup, {displayable}, 0).push()
  }
  
  
}