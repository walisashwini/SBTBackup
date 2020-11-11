package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.comparisons.RiskAttributeComparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses pcf.StateUpdateRiskAttributeDiffPopup

class StateUpdateRiskAttributeRowPresenter extends UpdatesComparisonRowPresenter {
  var _riskAttributeComparison: RiskAttributeComparison as RiskAttributeComparison

  construct(riskAttributeComparison: RiskAttributeComparison, newSBTEdition: String, adoptedSBTEdition: String,
            decisionHandler : DecisionHandler, newCWEdition : String = null, adoptedCWEdition : String = null) {
    super(riskAttributeComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition, decisionHandler)
    _riskAttributeComparison = riskAttributeComparison
  }

  override property get Description(): String {
    return _riskAttributeComparison.CanonicalVersion.Description
  }

  override property get TwoWayCompareStrategy() : TwoWayCompare {
    return _riskAttributeComparison.CompareAdoptedToNew
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _riskAttributeComparison.DecisionAndInstructions
  }

  override property get Selectable(): boolean {
    return new DecisionRequiredStrategy().isDecisionRequiredFor(_riskAttributeComparison)
  }

  override function showDetails() {
    var riskAttributeComparisonPresenter = new StateUpdateRiskAttributeComparisonPresenter(_riskAttributeComparison, NewSBTEdition,
         AdoptedSBTEdition, new ComparisonDecisionHandler(new DecisionRequiredStrategy()), _isMaintenanceUpdate)
    riskAttributeComparisonPresenter.ReadOnly = ReadOnly
    StateUpdateRiskAttributeDiffPopup.push(riskAttributeComparisonPresenter, NewSBTEdition, AdoptedSBTEdition)
  }
}