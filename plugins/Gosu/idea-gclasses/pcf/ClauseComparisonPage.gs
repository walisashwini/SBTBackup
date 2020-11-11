package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/pca/ClauseComparisonPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClauseComparisonPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClauseComparisonPage, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0)
  }
  
  static function drilldown (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClauseComparisonPage, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClauseComparisonPage, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClauseComparisonPage, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).goInMain()
  }
  
  static function printPage (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClauseComparisonPage, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).printPage()
  }
  
  static function push (clauseComparisonPresenter :  gw.sbt.pca.view.presenter.compare.ClauseComparisonPresenter, newSBTUpdateEdition :  String, adoptedSBTUpdateEdition :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClauseComparisonPage, {clauseComparisonPresenter, newSBTUpdateEdition, adoptedSBTUpdateEdition}, 0).push()
  }
  
  
}