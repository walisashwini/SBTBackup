package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseDiffPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClauseDiffPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clauseDetailsPresenter :  gw.sbt.pca.view.presenter.ClauseDetailsPresenter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClauseDiffPopup, {clauseDetailsPresenter}, 0)
  }
  
  static function push (clauseDetailsPresenter :  gw.sbt.pca.view.presenter.ClauseDetailsPresenter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClauseDiffPopup, {clauseDetailsPresenter}, 0).push()
  }
  
  
}