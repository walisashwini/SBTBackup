package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.ClauseComparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.pca.view.ComparisonDecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.PresenterUtil
uses pcf.StateUpdateClauseDiffPopup

class StateUpdateClauseRowPresenter extends UpdatesComparisonRowPresenter {
  var _clauseComparison : ClauseComparison as ClauseComparison

  construct(clauseComparison : ClauseComparison, newSBTEdition : String, adoptedSBTEdition : String, newCWEdition : String = null, adoptedCWEdition : String = null) {
    super(clauseComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition,  new ComparisonDecisionHandler(new DecisionRequiredStrategy()))
    _clauseComparison = clauseComparison
  }

  private property get DefiningClause() : Clause {
    return _clauseComparison.New ?: _clauseComparison.Adopted
  }

  override property get TwoWayCompareStrategy() : TwoWayCompare {
    return _clauseComparison.CompareAdoptedToNew
  }

  override property get Description(): String {
    if (DefiningClause.ParentRisk.Entity == "GL7SublineType") {
      return DefiningClause?.Description + " (" + DefiningClause.PublicId + ")"
    } else {
      return DefiningClause?.Description + " (" + DefiningClause.ParentRisk.Name + ")"
    }
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _clauseComparison.DecisionAndInstructions
  }

  override property get Selectable(): boolean {
    return true
  }

  override function showDetails() {
    var presenter = new ClauseComparisonPresenter(_clauseComparison, DecisionHandler, _isMaintenanceUpdate)
    presenter.ReadOnly = ReadOnly
    StateUpdateClauseDiffPopup.push(presenter, NewSBTEdition, AdoptedSBTEdition)
  }
}
