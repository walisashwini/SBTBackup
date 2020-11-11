package gw.sbt.pca.analysis.rules

uses gw.sbt.model.comparisons.Comparison

interface DecisionRequiredRule {

  function matches(comparison: Comparison) : boolean

  function apply(comparison : Comparison) : DecisionRequired

}