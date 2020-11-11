package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.form.PolicyForm
uses pcf.FormDiffPopup

class FormRowPresenter extends RowPresenter {
  var _policyForm: PolicyForm

  construct(form: PolicyForm) {
    super(null)
    _policyForm = form
  }


  override property get Description(): String {
    return "${_policyForm.Number} ${_policyForm.Edition} ${_policyForm.Description}"
  }

  override property get DiffType(): UpdateDiffType {
    return UpdateDiffType.from(_policyForm.Intent)
  }

  override function showDetails() {
    var formDetailsPresenter = new FormDetailsPresenter(_policyForm)
    formDetailsPresenter.ReadOnly = ReadOnly
    FormDiffPopup.push(formDetailsPresenter)
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _policyForm.DecisionAndInstructions
  }

  override  property get Visible() : boolean {
    return _policyForm.Intent != null
  }

}