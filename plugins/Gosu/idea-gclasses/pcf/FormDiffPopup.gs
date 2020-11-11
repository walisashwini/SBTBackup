package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/FormDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FormDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (formDetailsPresenter :  gw.sbt.pca.view.presenter.FormDetailsPresenter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FormDiffPopup, {formDetailsPresenter}, 0)
  }
  
  static function push (formDetailsPresenter :  gw.sbt.pca.view.presenter.FormDetailsPresenter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FormDiffPopup, {formDetailsPresenter}, 0).push()
  }
  
  
}