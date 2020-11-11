package gw.sbt.pca.view

uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.pca.analysis.DecisionRequiredRuleBook

class DecisionRequiredStrategy {

  function isDecisionRequiredFor(comparison : Comparison) : boolean {
    return DecisionRequiredRuleBook.applyRules(comparison)
  }
}
