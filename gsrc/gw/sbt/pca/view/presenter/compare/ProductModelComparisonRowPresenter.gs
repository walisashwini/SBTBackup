package gw.sbt.pca.view.presenter.compare

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.pca.view.presenter.PresenterUtil

uses java.util.List

abstract class ProductModelComparisonRowPresenter<T> extends StateUpdateComparisonPresenter {
  var _comparison : Comparison<T>

  construct(comparison : Comparison<T>, children: List<StateUpdateComparisonPresenter>, decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean = false) {
    super(children, decisionHandler, isMaintenanceUpdate)
    _comparison = comparison
  }

  protected property get Comparison() : Comparison<T> {
    return _comparison
  }

  override property get IsDecisionRequired() : boolean {
    if (_isMaintenanceUpdate and not Comparison.CompareAdoptedToNew.IsDifferentOverall)  {
      return false
    }

    return new DecisionRequiredStrategy().isDecisionRequiredFor(Comparison)
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  override property set Decision(updateDecision: UpdateDecision) {
    if(DecisionAndInstructions != null) {
      if (_isMaintenanceUpdate and not Comparison.CompareAdoptedToNew.IsDifferentOverall) {
        DecisionAndInstructions.Decision = UpdateDecision.REJECT
      } else {
        DecisionAndInstructions.Decision = updateDecision
      }
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate)
  }

  abstract protected function displayValueFor(t: T): String

  protected function displayValueFor(availability : ProductModelAvailability) : String {
    if (availability == null) {
      return Lookup.DOES_NOT_EXIST
    } else if (availability.Availability == Lookup.UNAVAILABLE) {
      return Lookup.UNAVAILABLE
    } else {
      return Lookup.AVAILABLE
    }
  }

  override property get AvailabilityColor() : String {
    if(Selectable){
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLUE
    } else {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLANK
    }
  }
}