package gw.sbt.pca.analysis

uses gw.sbt.pca.analysis.rules.DecisionRequiredRule
uses gw.sbt.pca.analysis.rules.RuleBureauCodes
uses gw.sbt.pca.analysis.rules.RuleClauseAttributeCovTermOption
uses gw.sbt.pca.analysis.rules.RuleProductModel
uses gw.sbt.pca.analysis.rules.RuleRiskAttribute
uses gw.sbt.pca.analysis.rules.RuleRateTable
uses gw.sbt.pca.analysis.rules.RuleRateTableFactorRow
uses gw.sbt.pca.analysis.rules.RuleScheduleProperty
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.analysis.rules.DecisionRequired
uses gw.sbt.pca.analysis.rules.RulePolicyForm
uses java.util.List

class DecisionRequiredRuleBook {
  // Order of rules matters in this list
  private static var _rules : List< DecisionRequiredRule > = {
      // Schedule level
      new RuleScheduleProperty(),

      // Clause, CovTerm, CovTermOption
      new RuleProductModel(),
      new RuleClauseAttributeCovTermOption(),

      // Policy form
      new RulePolicyForm(),

      // Rate Table and Factor Row
      new RuleRateTable(),
      new RuleRateTableFactorRow(),

      // Risk/Attribute
      new RuleRiskAttribute(),

      // Bureau codes
      new RuleBureauCodes()
  }

  private construct(){}

  static function applyRules(comparison : Comparison<Object>) : boolean {
    var matchedRule = _rules.where( \ rule -> rule.matches(comparison) )
        .firstWhere( \ rule -> rule.apply(comparison) != DecisionRequired.DEFERRED )

    if(matchedRule == null)
      throw "Unable to find a decision required rule on ${comparison.CanonicalVersion.Class}"

    return matchedRule.apply(comparison).DecisionValue
  }
}