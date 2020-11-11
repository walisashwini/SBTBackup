package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.comparisons.RiskComparison
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.CategoryPresenter

class StateUpdateRiskRowPresenter extends CategoryPresenter {
  var _riskComparison: RiskComparison as RiskComparison

  construct(riskComparison : RiskComparison, newSBTEdition : String, adoptedSBTEdition : String, newCWEdition : String = null, adoptedCWEdition : String = null) {
    super(createRiskAttributeComparisonPresenters(riskComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition,
        new ComparisonDecisionHandler(new DecisionRequiredStrategy())), riskComparison.DecisionAndInstructions)
    _riskComparison = riskComparison
  }

  private static function createRiskAttributeComparisonPresenters(riskComparison : RiskComparison, newSBTEdition : String, adoptedSBTEdition : String,
                                                                  newCWEdition : String, adoptedCWEdition : String, decisionHandler : DecisionHandler) : List<StateUpdateRiskAttributeRowPresenter> {
    var riskAttributeRowPresenters : List<StateUpdateRiskAttributeRowPresenter> = {}
    var riskAttributesComparison = riskComparison.Children
    riskAttributesComparison.each(\riskAttributeComparison -> {
      riskAttributeRowPresenters.add(new StateUpdateRiskAttributeRowPresenter(riskAttributeComparison, newSBTEdition, adoptedSBTEdition,
          decisionHandler, newCWEdition, adoptedCWEdition))
    })
    return riskAttributeRowPresenters.where(\presenter -> presenter.Visible)
  }

  override property get Description(): String {
    return _riskComparison.CanonicalVersion.Name
  }

  override property get DiffType(): UpdateDiffType {
    return null
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _riskComparison.DecisionAndInstructions
  }

  override property get Selectable(): boolean {
    return Children.hasMatch(\child -> child.Selectable)
  }

  override property get Visible(): boolean {
    return Children.hasMatch(\child -> child.Visible)
  }

  override function getUpdateDecisionDescription() : String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }

}