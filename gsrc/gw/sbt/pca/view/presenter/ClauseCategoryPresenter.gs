package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.clause.Clause
uses gw.sbt.pca.view.DecisionHandler
uses java.util.List
uses gw.api.locale.DisplayKey

class ClauseCategoryPresenter extends CategoryPresenter {

  private var _clauses : List<Clause>

  construct(clauses : List<Clause>, categoryDecisionAndInstructions : DecisionAndInstructions, decisionHandler : DecisionHandler) {
    super(createClausePresenters(clauses, decisionHandler), categoryDecisionAndInstructions)
    _clauses = clauses
  }

  private static function createClausePresenters(clauses: List<Clause>, decisionHandler : DecisionHandler): List<RowPresenter> {
    return clauses.map(\clause -> new ClauseRowPresenter(clause, decisionHandler)).where(\presenter -> presenter.Visible).orderBy( \ p -> p.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClausesTitle")
  }
}