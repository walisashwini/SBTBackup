package gw.sbt.pca.view.presenter.compare

uses gw.api.productmodel.ClausePattern
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.presenter.PresenterUtil

class CovTermOptionComparisonPresenter extends ProductModelComparisonRowPresenter<CovTermOption> {

  construct(optionComparison : Comparison<CovTermOption>,
            decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean = false) {
    super(optionComparison, null, decisionHandler, isMaintenanceUpdate)
  }

  override property get Description() : String {    return Comparison.New.Description ?: Comparison.CanonicalVersion.Description
  }

  override property get CurrentValue() : String {
    var term = Comparison.Parent.CanonicalVersion as CovTerm
    var clause = Comparison.Parent.Parent.CanonicalVersion as Clause

    if (Comparison.Current.EffectiveAvailability.Availability == Lookup.AVAILABLE) {
      return Lookup.AVAILABLE
    } else if (!PresenterUtil.checkPatternExistence(clause.PublicId, term.PublicId, Comparison.CanonicalVersion.OptionCode)) {
      return Lookup.DOES_NOT_EXIST
    } else {
      return Lookup.UNAVAILABLE
    }
  }

  override property get NewValue() : String {
    return displayValueFor(Comparison.New)
  }

  override property get AdoptedValue() : String {
    return displayValueFor(Comparison.Adopted)
  }

  override protected function displayValueFor(option : CovTermOption) : String {
    return displayValueFor(option.EffectiveAvailability)
  }
}