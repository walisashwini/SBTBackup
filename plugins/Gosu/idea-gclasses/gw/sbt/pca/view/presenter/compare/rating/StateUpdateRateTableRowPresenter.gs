package gw.sbt.pca.view.presenter.compare.rating

uses gw.api.locale.DisplayKey
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.RateTableComparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.compare.UpdatesComparisonRowPresenter
uses gw.sbt.util.DisplayDescriptionHelper
uses pcf.StateUpdateRateTableDiffPopup

class StateUpdateRateTableRowPresenter extends UpdatesComparisonRowPresenter {
  var _rateTableComparison: RateTableComparison as RateTableComparison
  var _isISOAddedOrRemovedTable = false
  construct(rateTableComparison:  RateTableComparison, newSBTEdition: String, adoptedSBTEdition: String, newCWEdition : String = null, adoptedCWEdition : String = null) {
    super(rateTableComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition, new ComparisonDecisionHandler(new DecisionRequiredStrategy()))
    init(rateTableComparison)
  }

  private function init(rateTableComparison:  RateTableComparison) { //set auto accept for 'Add' case, and set as readonly
    _rateTableComparison = rateTableComparison
    _isISOAddedOrRemovedTable = getDiffType(RateTableComparison.CompareAdoptedToNew) == UpdateDiffType.TC_NEW
                              or getDiffType(RateTableComparison.CompareAdoptedToNew) == UpdateDiffType.TC_DELETED
    if (_isISOAddedOrRemovedTable) {
      this.Decision = UpdateDecision.ACCEPT
      this.ReadOnly = true
    }
  }

  override property get Description(): String {
    var suffix = RateBookHelper.isStateTable(RateTableComparison)
        ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingStateSuffix")
        : DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingCWSuffix")
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateBook.RatingLabel", RateTableComparison.CanonicalVersion.TableName, suffix)
  }

  override property get TwoWayCompareStrategy() : TwoWayCompare {
    return RateTableComparison.CompareAdoptedToNew
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return RateTableComparison.DecisionAndInstructions
  }

  property get ComparisonPresenter() : StateUpdateRateTableComparisonPresenter {
    return new StateUpdateRateTableComparisonPresenter(RateTableComparison, DecisionHandler,
        :isMaintenanceUpdate = _isMaintenanceUpdate)
  }

  //skip cloneForRevert - only used by reporting
  property get ComparisonPresenterForReport() : StateUpdateRateTableComparisonPresenter {
    return new StateUpdateRateTableComparisonPresenter(RateTableComparison, DecisionHandler, :skipClone = true,
        :isMaintenanceUpdate = _isMaintenanceUpdate)
  }

  override property set ReadOnly(readOnly : boolean) {
    if (not _isISOAddedOrRemovedTable) {
      super.ReadOnly = readOnly
    } else { // always set to True if Add/Remove case
      super.ReadOnly = true
    }
  }

  override function showDetails() {
    var presenter = ComparisonPresenter
    presenter.ReadOnly = ReadOnly
    StateUpdateRateTableDiffPopup.push(presenter, NewSBTEdition, AdoptedSBTEdition)
  }

  override property get Selectable() : boolean {
    return not _isISOAddedOrRemovedTable
  }

  //Visible only if Current is different from New
  override  property get Visible() : boolean {
    if (_isMaintenanceUpdate) {
      return DiffType != UpdateDiffType.TC_NOCHANGE
    }

    return getDiffType(RateTableComparison.CompareCurrentToNew)!= UpdateDiffType.TC_NOCHANGE
  }

}