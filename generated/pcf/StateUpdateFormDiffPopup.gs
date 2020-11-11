package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateFormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StateUpdateFormDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (formComparisonPresenter :  gw.sbt.pca.view.presenter.compare.FormComparisonPresenter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.StateUpdateFormDiffPopup, {formComparisonPresenter}, 0)
  }
  
  static function push (formComparisonPresenter :  gw.sbt.pca.view.presenter.compare.FormComparisonPresenter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateFormDiffPopup, {formComparisonPresenter}, 0).push()
  }
  
  
}