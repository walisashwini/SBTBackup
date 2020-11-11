package gw.sbt.pca.analysis.rules

uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.clause.CovTermOption

/**
 * Rule for attributes on Clause or CovTerm or CovTermOption (the leaf nodes in the tree)
 */
class RuleClauseAttributeCovTermOption extends DecisionRequiredRuleBase {
  override function matches(comparison: Comparison<Object>): boolean {
    return checkAvailabilityConditions(comparison) and checkComparisonType(comparison)
  }

  override function apply(comparison: Comparison<Object>): DecisionRequired {
    return DecisionRequired.NOT_REQUIRED
  }

  override function checkComparisonType(comparison: Comparison<Object>): boolean {
    return comparison.CanonicalVersion.Class == ClauseAttribute
  }

  override function checkAvailabilityConditions(comparison: Comparison<Object>): boolean {
    return true
  }
}