package gw.sbt.pca.view.presenter.compare

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.model.form.PolicyForm
uses pcf.StateUpdateFormDiffPopup

class StateUpdateFormRowPresenter extends UpdatesComparisonRowPresenter {
  var _formComparison: Comparison<PolicyForm> as FormComparison

  construct(formComparison:  Comparison<PolicyForm>, newSBTEdition: String, adoptedSBTEdition: String, newCWEdition : String = null,
            adoptedCWEdition : String = null) {
    super(formComparison, newSBTEdition, adoptedSBTEdition, newCWEdition, adoptedCWEdition)
    _formComparison = formComparison
  }

  private property get DefiningForm(): PolicyForm {
    return _formComparison.New ?: _formComparison.Adopted
  }

  override property get Description(): String {
    return "${DefiningForm.Number} ${DefiningForm.Description}"
  }

  override property get TwoWayCompareStrategy() : TwoWayCompare {
    return _formComparison.CompareAdoptedToNew
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _formComparison.DecisionAndInstructions
  }

  override property get Selectable(): boolean {
    return true
  }

  override function showDetails() {
    var formComparisonPresenter = new FormComparisonPresenter(_formComparison, NewSBTEdition, AdoptedSBTEdition)
    formComparisonPresenter.ReadOnly = ReadOnly
    StateUpdateFormDiffPopup.push(formComparisonPresenter)
  }
}
