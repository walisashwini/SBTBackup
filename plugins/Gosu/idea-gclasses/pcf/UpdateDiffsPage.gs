package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/UpdateDiffsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UpdateDiffsPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.UpdateDiffsPage, {updatePresenter, filterOption}, 0)
  }
  
  static function drilldown (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UpdateDiffsPage, {updatePresenter, filterOption}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UpdateDiffsPage, {updatePresenter, filterOption}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UpdateDiffsPage, {updatePresenter, filterOption}, 0).goInMain()
  }
  
  static function printPage (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UpdateDiffsPage, {updatePresenter, filterOption}, 0).printPage()
  }
  
  static function push (updatePresenter :  gw.sbt.pca.view.presenter.UpdatePresenter, filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UpdateDiffsPage, {updatePresenter, filterOption}, 0).push()
  }
  
  
}