package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateClauseDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StateUpdateClauseDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.StateUpdateClauseDiffPopup, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0)
  }
  
  static function push (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateClauseDiffPopup, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).push()
  }
  
  
}