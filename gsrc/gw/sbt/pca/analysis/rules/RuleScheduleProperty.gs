package gw.sbt.pca.analysis.rules

uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.schedule.ScheduleProperty

/**
 * Decision is never required on individual ScheduleProperty
 */
class RuleScheduleProperty extends DecisionRequiredRuleBase {
  override function matches(comparison: Comparison<Object>): boolean {
    return checkAvailabilityConditions(comparison) and checkComparisonType(comparison)
  }

  override function apply(comparison : Comparison<Object>): DecisionRequired {
    return DecisionRequired.NOT_REQUIRED
  }

  override function checkAvailabilityConditions(comparison: Comparison<Object>): boolean {
    return true
  }

  override function checkComparisonType(comparison: Comparison<Object>): boolean {
    return comparison.CanonicalVersion.Class == ScheduleProperty
  }
}