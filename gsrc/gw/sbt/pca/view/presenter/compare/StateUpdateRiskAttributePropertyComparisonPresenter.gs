package gw.sbt.pca.view.presenter.compare

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.RiskAttributeProperty
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.view.presenter.PresenterUtil

class StateUpdateRiskAttributePropertyComparisonPresenter extends StateUpdateComparisonPresenter {
  var _comparison: Comparison<RiskAttributeProperty>
  construct(comparison : Comparison<RiskAttributeProperty>) {
    super(null, null)
    _comparison = comparison
  }

  override property get Description() : String {
    return _comparison.CanonicalVersion.PropName
  }

  override property get CurrentValue() : String {
    return displayValueFor(_comparison.Current.PropValue)
  }

  override property get NewValue() : String {
    return displayValueFor(_comparison.New.PropValue)
  }

  override property get AdoptedValue() : String {
    return displayValueFor(_comparison.Adopted.PropValue)
  }

  override property get IsDecisionRequired() : boolean {
    return false
  }

  protected function displayValueFor(value : String) : String {
    return value?:Lookup.DOES_NOT_EXIST
  }

  property get Color() : String {
    if (CurrentValue != NewValue) {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLUE
    } else {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLANK
    }
  }
}