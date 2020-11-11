package gw.sbt.pca.view.presenter.compare

uses gw.api.locale.DisplayKey
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.RiskAttributeComparison
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.util.DisplayDescriptionHelper

class StateUpdateRiskAttributeComparisonPresenter extends StateUpdateComparisonPresenter {
  var _comparison : RiskAttributeComparison
  var _originalComparison : RiskAttributeComparison
  var _newSBTEdition : String as NewSBTEdition
  var _adoptedSBTEdition : String as AdoptedSBTEdition
  var _propertyComparisonPresenterList : List<StateUpdateRiskAttributePropertyComparisonPresenter> as PropertyComparisonList

  construct(comparison : RiskAttributeComparison, newSBTEdition : String, adoptedSBTEdition : String, decisionHandler : DecisionHandler,
            isMaintenanceUpdate : boolean = false) {
    super(null, decisionHandler, isMaintenanceUpdate)
    _originalComparison = comparison.cloneForRevert()
    _comparison = comparison
    _newSBTEdition = newSBTEdition
    _adoptedSBTEdition = adoptedSBTEdition
    _propertyComparisonPresenterList = createRiskAttributePropertyComparisonPresenters(_comparison)
  }

  private static function createRiskAttributePropertyComparisonPresenters(comparison : RiskAttributeComparison) : List<StateUpdateRiskAttributePropertyComparisonPresenter> {
    var presenters : List<StateUpdateRiskAttributePropertyComparisonPresenter> = {}
    comparison.RiskAttributePropertyComparisons.each(\propertyComparison -> {
      if(propertyComparison.Current.HasContent or propertyComparison.Adopted.HasContent or propertyComparison.New.HasContent) {
        presenters.add(new StateUpdateRiskAttributePropertyComparisonPresenter(propertyComparison))
      }
    })
    return presenters
  }

  property get RiskEntity() : String {
    return _comparison.CanonicalVersion.RiskEntity
  }

  override property get Description() : String {
    return _comparison.CanonicalVersion.Description
  }

  override property get CurrentValue() : String {
    return null
  }

  override property get NewValue() : String {
    return null
  }

  override property get AdoptedValue() : String {
    return null
  }

  override property get IsDecisionRequired() : boolean {
    return false
  }

  override property get DecisionAndInstructions() : DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  override property set Decision(updateDecision : UpdateDecision) {
    if (DecisionAndInstructions != null) {
      DecisionAndInstructions.Decision = updateDecision
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate)
  }

  property get NoDecisionSelectedLabel() : String {
    return DecisionAndInstructions.Decision != null ? DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.ClearDecision") : ""
  }

  property set DecisionLabel(label : String) {
    Decision = DisplayDescriptionHelper.getComparisonUpdateDecisionFromDescription(label)
  }

  property get CurrentTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.CurrentValue")
  }

  property get NewTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.NewValue")
  }

  property get AdoptedTitle() : String {
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Comparison.AdoptedValue")
  }

  function revertChanges() {
    PresenterUtil.revertChanges(_originalComparison.DecisionAndInstructions, _comparison.DecisionAndInstructions)
  }
}