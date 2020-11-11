package gw.sbt.pca.view.presenter.compare.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.FactorRowComparison
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.pca.view.DecisionHandler
uses gw.sbt.pca.view.DecisionRequiredStrategy
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.pca.view.presenter.compare.StateUpdateComparisonPresenter
uses gw.util.IOrderedList

uses java.math.BigDecimal
uses java.math.RoundingMode

class StateUpdateRateTableFactorRowComparisonPresenter extends StateUpdateComparisonPresenter {
  var _comparison : FactorRowComparison as readonly FactorRowComparison

  construct(comparison : FactorRowComparison, decisionHandler : DecisionHandler, isMaintenanceUpdate : boolean = false) {
    super(null, decisionHandler, isMaintenanceUpdate)
    _comparison = comparison
  }

  //return 'Added', 'Removed', 'Changed', '-'
  //or actual numeric difference for Numeric type
  property get DiffValue() : String {
    var adoptedVal = _comparison.Adopted
    var newVal = _comparison.New
    if (adoptedVal == null and newVal != null) {
      return UpdateDiffType.TC_NEW.DisplayName
    } else if (adoptedVal != null and newVal == null) {
      return UpdateDiffType.TC_DELETED.DisplayName
    } else {
      var newValRate = newVal.Rate
      var adoptedValRate = adoptedVal.Rate
      if (_comparison.CanonicalVersion.IsDecimalType) {
        var diff = Double.parseDouble(newValRate?:"0") - Double.parseDouble(adoptedValRate?:"0")
        if (diff != 0) {
          var scaleOfNumbericType = Math.max(newVal.ScaleOfDecimalType, adoptedVal.ScaleOfDecimalType)
          var bd = new BigDecimal(diff).setScale(scaleOfNumbericType, RoundingMode.HALF_UP) // keep the max scale of 2 doubles.
          if (bd.doubleValue() > 0) {
            return "+" + bd.toPlainString()
          } else {
            return bd.toPlainString()
          }
        } else {
          return "-"
        }
      } else if (_comparison.CanonicalVersion.IsIntegerType) {
        var diff = Integer.parseInt(newValRate?:"0") - Integer.parseInt(adoptedValRate?:"0")
        if (diff == 0) {
          return "-"
        } else if (diff > 0) {
          return "+" + diff
        } else {
          return String.valueOf(diff)
        }
      } else if (newValRate == adoptedValRate) {
        return "-"
      }
      return UpdateDiffType.TC_CHANGED.DisplayName
    }
  }

  property get DiffType() : UpdateDiffType {
    var diffValue = DiffValue
    if (diffValue == "-")
      return TC_NOCHANGE
    else if (diffValue == UpdateDiffType.TC_NEW.DisplayName)
      return TC_NEW
    else if (diffValue == UpdateDiffType.TC_DELETED.DisplayName)
      return TC_DELETED
    else
      return TC_CHANGED
  }

  override property get Description() : String {
    return _comparison.CanonicalVersion.ParameterValuesKey
  }

  override property get CurrentValue() : String {
    return displayValueFor(_comparison.Current)
  }

  override property get NewValue() : String {
    return displayValueFor(_comparison.New)
  }

  override property get AdoptedValue() : String {
    return displayValueFor(_comparison.Adopted)
  }

  protected function displayValueFor(factorRow : FactorRow) : String {
    return factorRow.Rate?:"-"
  }

  override property get IsDecisionRequired() : boolean {
    if (_isMaintenanceUpdate and not _comparison.CompareAdoptedToNew.IsDifferentOverall) {
      return false
    }

    return new DecisionRequiredStrategy().isDecisionRequiredFor(_comparison)
  }

  override property get DecisionAndInstructions(): DecisionAndInstructions {
    return _comparison.DecisionAndInstructions
  }

  override property set Decision(updateDecision: UpdateDecision) {
    if(DecisionAndInstructions != null) {
      DecisionAndInstructions.Decision = updateDecision
    }

    DecisionHandler?.propagateDecision(_comparison, _isMaintenanceUpdate) // pass in comparison object for ComparisonDecisionHandler
  }

  property get Color() : String {
    if(IsDecisionRequired) {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLUE
    } else {
      return PresenterUtil.GUIDEWIRE_COLOR_CODE_BLANK
    }
  }

  property get ParameterValues() : IOrderedList<String> {
    return _comparison.CanonicalVersion.ParameterValues
  }
}