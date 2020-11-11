package gw.sbt.pca.view.presenter.compare

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses gw.sbt.pca.view.presenter.CategoryPresenter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.RowPresenter
uses gw.sbt.util.DisplayDescriptionHelper
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses java.util.List
uses gw.api.locale.DisplayKey

class StateUpdateFormCategoryPresenter extends CategoryPresenter {
  construct(newForms: List<PolicyForm>,
            adoptedForms: List<PolicyForm>,
            categoryDecisionAndInstructions: DecisionAndInstructions,
            newSBTUpdateMetaData: SBTUpdateMetaData,
            adoptedSBTUpdateMetaData: SBTUpdateMetaData,
            newSBTUpdate : SBTUpdate,
            currentSBTUpdate : SBTUpdate,
            adoptionDate: Date) {
    super(createFormPresenters(newForms, adoptedForms, newSBTUpdateMetaData, adoptedSBTUpdateMetaData, newSBTUpdate, currentSBTUpdate, adoptionDate),
        categoryDecisionAndInstructions,
        PresenterUtil.isMaintenanceUpdate(
            DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
            DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData)
        ))
  }

  private static function createFormPresenters(newForms: List<PolicyForm>, adoptedForms: List<PolicyForm>,
                                               newSBTUpdateMetaData: SBTUpdateMetaData,
                                               adoptedSBTUpdateMetaData: SBTUpdateMetaData,
                                               newSBTUpdate : SBTUpdate,
                                               currentSBTUpdate : SBTUpdate,
                                               adoptionDate: Date): List<RowPresenter> {
    // Always re-create forms from the most current server configuration
    var formNumbers = adoptedForms*.Number.toList().union(newForms*.Number.toList())
    CurrentSBTUpdateBuilder.buildPolicyForms(formNumbers, currentSBTUpdate, adoptionDate)

    var currentConfigForms = currentSBTUpdate.Forms
    return formNumbers.map(\formNumber -> {
      var adoptedForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(adoptedForms, formNumber)
      var newForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(newForms, formNumber)
      var currentForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(currentConfigForms, formNumber)

      return new StateUpdateFormRowPresenter (
          Comparison.forPolicyForm(currentForm, newForm, adoptedForm, ComparisonDecisionSource.create(newSBTUpdate)),
              DisplayDescriptionHelper.getMetaDataEdition(newSBTUpdateMetaData),
              DisplayDescriptionHelper.getMetaDataEdition(adoptedSBTUpdateMetaData),
              DisplayDescriptionHelper.getMetaDataCWEdition(newSBTUpdateMetaData),
              DisplayDescriptionHelper.getMetaDataCWEdition(adoptedSBTUpdateMetaData))
    }).where(\presenter -> presenter.Visible).orderBy(\presenter -> presenter.Description)
  }

  override property get Description(): String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.FormsTitle")
  }

  override function getUpdateDecisionDescription(): String {
    return gw.sbt.util.DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(Decision)
  }
}