package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/AvailableUpdatesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AvailableUpdatesPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AvailableUpdatesPage, {filterOption, forceRefresh}, 0)
  }
  
  static function drilldown (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AvailableUpdatesPage, {filterOption, forceRefresh}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AvailableUpdatesPage, {filterOption, forceRefresh}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AvailableUpdatesPage, {filterOption, forceRefresh}, 0).goInMain()
  }
  
  static function printPage (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AvailableUpdatesPage, {filterOption, forceRefresh}, 0).printPage()
  }
  
  static function push (filterOption :  gw.sbt.pca.view.presenter.PresenterUtil.SBTUPDATE_FILTER_OPTION, forceRefresh :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AvailableUpdatesPage, {filterOption, forceRefresh}, 0).push()
  }
  
  
}