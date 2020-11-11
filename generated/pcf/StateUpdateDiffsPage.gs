package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/StateUpdateDiffsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StateUpdateDiffsPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.StateUpdateDiffsPage, {stateUpdatePresenter, filterOption}, 0)
  }
  
  static function drilldown (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateDiffsPage, {stateUpdatePresenter, filterOption}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateDiffsPage, {stateUpdatePresenter, filterOption}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateDiffsPage, {stateUpdatePresenter, filterOption}, 0).goInMain()
  }
  
  static function printPage (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateDiffsPage, {stateUpdatePresenter, filterOption}, 0).printPage()
  }
  
  static function push (stateUpdatePresenter :  gw.sbt.pca.view.presenter.compare.StateUpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StateUpdateDiffsPage, {stateUpdatePresenter, filterOption}, 0).push()
  }
  
  
}