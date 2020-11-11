package gw.sbt.pca.view.presenter.compare

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.pca.view.presenter.FormDetailsPresenter

class FormComparisonDetailsPresenter extends FormDetailsPresenter {
  construct(form: PolicyForm) {
    super(form)
  }

  override property get IsAvailable() : boolean {
    return _policyForm.EffectiveAvailability.Availability == Lookup.AVAILABLE
  }
}