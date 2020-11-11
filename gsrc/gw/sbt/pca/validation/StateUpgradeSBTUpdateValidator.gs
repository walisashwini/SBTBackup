package gw.sbt.pca.validation

uses gw.api.locale.DisplayKey
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.pca.view.presenter.compare.StateUpdatePresenter
uses gw.sbt.pca.view.presenter.compare.rating.StateUpdateRateBookPresenter

class StateUpgradeSBTUpdateValidator extends Validator {

  var _presenter : StateUpdatePresenter as ListOfUpdatesPresenter

  construct(presenter : StateUpdatePresenter) {
    _presenter = presenter
  }

  override function validate() {
    this.ErrorMessages.clear()
    validateAdoptionDate(ListOfUpdatesPresenter.AdoptionDate, ListOfUpdatesPresenter.NewSBTUpdate.MetaData.EffectiveDate,
        ListOfUpdatesPresenter.NewSBTUpdate.MetaData.Jurisdiction)
    validateAllDecisionsMade()
  }

  private function validateAllDecisionsMade() {
    var missingDecisionExists = validateChildPresenters("Web.Admin.LOB.ProductContentAnalysis.ClausesTitle")
    missingDecisionExists = missingDecisionExists or validateChildPresenters("Web.Admin.LOB.ProductContentAnalysis.FormsTitle")
    missingDecisionExists = missingDecisionExists or validateChildPresenters("Web.Admin.LOB.ProductContentAnalysis.RisksTitle")
    missingDecisionExists = missingDecisionExists or validateRateBooks()
    missingDecisionExists = missingDecisionExists or validateChildPresenters("Web.Admin.LOB.ProductContentAnalysis.BureauCodeTitle")
    if (missingDecisionExists) {
      addError(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Error.MissingDecision"))
    }
  }

  private function validateChildPresenters(displayKey : String) : boolean {
    var rootPresenter = ListOfUpdatesPresenter.Roots.firstWhere(
        \treeRootNodeRowPresenter -> treeRootNodeRowPresenter.Description.equals(DisplayKey.get(displayKey)))
    return missingDecisionExists(rootPresenter)
  }

  private function validateRateBooks() : boolean {
    var rateTablesRootPresenter = ListOfUpdatesPresenter.Roots.firstWhere(\treeRootNodeRowPresenter -> treeRootNodeRowPresenter typeis StateUpdateRateBookPresenter)
    return missingDecisionExists(rateTablesRootPresenter)
  }

  private function missingDecisionExists(rootPresenter: RowPresenter) : boolean {
    var allVisibleDecisions = rootPresenter == null ? null : rootPresenter.Children
        .where(\rowPresenter -> rowPresenter.Visible)
        .map(\rowPresenter -> rowPresenter.Decision)
    var missingDecisionExists = allVisibleDecisions == null ? false : allVisibleDecisions.contains(null)
    return missingDecisionExists
  }
}
