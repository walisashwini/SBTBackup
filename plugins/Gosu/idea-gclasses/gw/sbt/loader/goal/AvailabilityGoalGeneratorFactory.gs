package gw.sbt.loader.goal

uses gw.sbt.model.ProductModelObject
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.form.PolicyForm

class AvailabilityGoalGeneratorFactory {
  /////////////Clause////////////////
  static function forStateAddForClause() : AvailabilityGoalGenerator {
    return new AvailabilityGoalGenerator<ProductModelObject>(
        :getChangeType = \pmObject -> pmObject.Intent,
        :getChildren = \pmObject -> pmObject.ChildrenWithAvailability,
        :getUserDecision = \pmObject -> pmObject.DecisionAndInstructions.Decision,
        :getCanonicalVersion = \pmObject -> pmObject,
        :isStateUpdate = false,
        :isIndependentStateAdd = false)
  }

  static function forStateUpdateForClause() : AvailabilityGoalGenerator {
    return new AvailabilityGoalGenerator<Comparison<ProductModelObject>>(
        :getChangeType = \comparison -> comparison.CompareCurrentToNew.ChangeType,
        :getChildren = \comparison -> comparison.ChildrenWithAvailability,
        :getUserDecision = \comparison -> comparison.Decision,
        :getCanonicalVersion = \comparison -> comparison.CanonicalVersion,
        :isStateUpdate = true,
        :isIndependentStateAdd = false)
  }

  static function forIndependentStateAddForClause() : AvailabilityGoalGenerator {
    return new AvailabilityGoalGenerator<Comparison<ProductModelObject>>(
        :getChangeType = \comparison -> comparison.CompareCurrentToNew.ChangeType,
        :getChildren = \comparison -> comparison.ChildrenWithAvailability,
        :getUserDecision = \comparison -> comparison.Decision,
        :getCanonicalVersion = \comparison -> comparison.CanonicalVersion,
        :isStateUpdate = true,
        :isIndependentStateAdd = true)
  }

  /////////////Form////////////////
  static function forStateUpdateForForm() : AvailabilityGoalGenerator {
    return new AvailabilityGoalGenerator<Comparison<PolicyForm>>(
        :getChangeType = \comparison -> comparison.CompareCurrentToNew.ChangeType,
        :getChildren = \comparison -> null,
        :getUserDecision = \comparison -> comparison.Decision,
        :getCanonicalVersion = \comparison -> comparison.New?:comparison.Adopted,
        :isStateUpdate = true,
        :isIndependentStateAdd = false)
  }

  static function forIndependentStateAddForForm() : AvailabilityGoalGenerator {
    return new AvailabilityGoalGenerator<Comparison<PolicyForm>>(
        :getChangeType = \comparison -> comparison.CompareCurrentToNew.ChangeType,
        :getChildren = \comparison -> null,
        :getUserDecision = \comparison -> comparison.Decision,
        :getCanonicalVersion = \comparison -> comparison.New?:(comparison.Adopted?:comparison.Current),
        :isStateUpdate = true,
        :isIndependentStateAdd = true)
  }
}