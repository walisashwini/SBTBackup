package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl7/policy/GL7CoveragePatternSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GL7CoveragePatternSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (presenter :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GL7CoveragePatternSearchPopup, {presenter}, 0)
  }
  
  function pickValueAndCommit (value :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter.ClauseSpec[]) : void {
    __widgetOf(this, pcf.GL7CoveragePatternSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (presenter :  gw.lob.gl7.presenters.GL7CoverageSearchPresenter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GL7CoveragePatternSearchPopup, {presenter}, 0).push()
  }
  
  
}