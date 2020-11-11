package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/BureauCodesDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class BureauCodesDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (codesPresenter :  gw.sbt.pca.view.presenter.bureau.BureauCodePresenter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.BureauCodesDetailPopup, {codesPresenter}, 0)
  }
  
  static function push (codesPresenter :  gw.sbt.pca.view.presenter.bureau.BureauCodePresenter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BureauCodesDetailPopup, {codesPresenter}, 0).push()
  }
  
  
}