package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter

abstract class UpdatesComparisonRowPresenter extends RowPresenter {
  var _comparison : Comparison
  var _newSBTEdition : String as NewSBTEdition
  var _adoptedSBTEdition : String as AdoptedSBTEdition

  construct(comparison : Comparison, newSBTEdition : String, adoptedSBTEdition : String, newCWEdition : String = null, adoptedCWEdition : String = null,
            decisionHandler : DecisionHandler = null) {
    super(null, decisionHandler, PresenterUtil.isMaintenanceUpdate(newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition))
    _comparison = comparison
    _newSBTEdition = newSBTEdition
    _adoptedSBTEdition = adoptedSBTEdition

    if(Visible and not new DecisionRequiredStrategy().isDecisionRequiredFor(_comparison)) {
      _comparison.DecisionAndInstructions.Decision = UpdateDecision.NOT_REQUIRED
    }
  }

  override property get DiffType(): UpdateDiffType {
    return getDiffType(TwoWayCompareStrategy)
  }

  override property get Selectable(): boolean {
    return false
  }

  override  property get Visible() : boolean {
    if (_isMaintenanceUpdate) {
        return DiffType != UpdateDiffType.TC_NOCHANGE
    }

    return getDiffType(_comparison.CompareAdoptedToNew)!= UpdateDiffType.TC_NOCHANGE
        or getDiffType(_comparison.CompareCurrentToNew)!= UpdateDiffType.TC_NOCHANGE
  }

  protected function getDiffType(twoWayCompare: TwoWayCompare): UpdateDiffType {
    return PresenterUtil.getComparisonDiffType(twoWayCompare)
  }

  override function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }

  abstract property get TwoWayCompareStrategy() : TwoWayCompare

  override property set Decision(updateDecision : UpdateDecision) {
    if (DecisionAndInstructions != null) {
      if (_isMaintenanceUpdate and DiffType == UpdateDiffType.TC_NOCHANGE) {
        DecisionAndInstructions.Decision = UpdateDecision.REJECT
      } else {
        DecisionAndInstructions.Decision = updateDecision
      }
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate) // pass in comparison object for ComparisonDecisionHandler
  }

  override property get Decision(): UpdateDecision {
    return DecisionAndInstructions?.Decision
  }

}