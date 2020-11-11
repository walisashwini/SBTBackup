package gw.sbt.pca.view.presenter

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.form.PolicyForm
uses java.util.List
uses gw.api.locale.DisplayKey

class FormCategoryPresenter extends CategoryPresenter {

  var _forms : List<PolicyForm>

  construct(forms : List<PolicyForm>, categoryDecisionAndInstructions : DecisionAndInstructions) {
    super(createFormPresenters(forms), categoryDecisionAndInstructions)
    _forms = forms
  }

  private static function createFormPresenters(forms: List<PolicyForm>): List<FormRowPresenter> {
    return forms.map(\form -> new FormRowPresenter(form)).where(\presenter -> presenter.Visible).orderBy( \ p -> p.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.FormsTitle")
  }
}