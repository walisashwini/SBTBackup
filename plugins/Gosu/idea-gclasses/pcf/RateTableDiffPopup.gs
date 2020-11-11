package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/RateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RateTableDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (rateTablePresenter :  gw.sbt.pca.view.presenter.rating.RateTablePresenter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RateTableDiffPopup, {rateTablePresenter}, 0)
  }
  
  static function push (rateTablePresenter :  gw.sbt.pca.view.presenter.rating.RateTablePresenter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RateTableDiffPopup, {rateTablePresenter}, 0).push()
  }
  
  
}