package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateRateTableDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StateUpdateRateTableDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (comparisonPresenter :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.StateUpdateRateTableDiffPopup, {comparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0)
  }
  
  static function push (comparisonPresenter :  gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateTableComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateRateTableDiffPopup, {comparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).push()
  }
  
  
}