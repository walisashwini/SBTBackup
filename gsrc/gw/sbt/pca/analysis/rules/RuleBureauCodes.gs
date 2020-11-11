package gw.sbt.pca.analysis.rules

uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.bureau.DisplayableStateUpdateBureauCodesContainer
uses gw.sbt.model.comparisons.Comparison

class RuleBureauCodes extends DecisionRequiredRuleBase {
  override function matches(comparison : Comparison<Object>) : boolean {
    return checkAvailabilityConditions(comparison) and checkComparisonType(comparison)
  }

  override function apply(comparison : Comparison<Object>) : DecisionRequired {
    var currentToNew = comparison.CompareCurrentToNew
    if (currentToNew.IsDifferentOverall) {
      return DecisionRequired.REQUIRED
    } else {
      return DecisionRequired.NOT_REQUIRED
    }
  }

  override function checkAvailabilityConditions(comparison : Comparison<Object>) : boolean {
    return true
  }

  override function checkComparisonType(comparison : Comparison<Object>) : boolean {
    return comparison.CanonicalVersion.Class == BureauCodes or comparison.CanonicalVersion.Class == DisplayableStateUpdateBureauCodesContainer
  }
}