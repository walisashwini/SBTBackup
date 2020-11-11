package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.clause.Clause
uses gw.sbt.pca.view.DecisionHandler
uses pcf.ClauseDiffPopup

class ClauseRowPresenter extends RowPresenter {
  var _clause : Clause
  var _decisionHandler : DecisionHandler

  construct(clause : Clause, decisionHandler : DecisionHandler) {
    super(null, decisionHandler)
    _clause = clause
    _decisionHandler = decisionHandler
  }

  override property get Description(): String {
    return _clause.Description + " (" + _clause.ParentRisk.Name + ")"
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_clause.Intent)
  }

  override  property get Visible() : boolean {
    return _clause.Intent != null
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _clause.DecisionAndInstructions
  }

  override function showDetails() {
    var presenter = new ClauseDetailsPresenter(_clause, _decisionHandler)
    presenter.ReadOnly = ReadOnly
    ClauseDiffPopup.push(presenter)
  }

}