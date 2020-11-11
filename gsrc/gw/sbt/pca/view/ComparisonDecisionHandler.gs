package gw.sbt.pca.view

uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.DecisionAndInstructions
uses java.util.List

class ComparisonDecisionHandler extends DecisionHandler <Comparison<Object>> {

  var _decisionRequiredStrategy : DecisionRequiredStrategy

  construct(decisionRequiredStrategy : DecisionRequiredStrategy) {
    _decisionRequiredStrategy = decisionRequiredStrategy
  }

  override function decisionOf(item: Comparison<Object>): DecisionAndInstructions {
    return item.DecisionAndInstructions
  }

  override function childrenOf(item: Comparison<Object>): List<Comparison<Object>> {
    return item.Children
  }

  override function parentOf(item: Comparison<Object>): Comparison<Object> {
    return item.Parent
  }

  override function decisionRequired(item: Comparison<Object>, isMaintenanceUpdate : boolean = false): boolean {
    if (isMaintenanceUpdate and not item.CompareAdoptedToNew.IsDifferentOverall) {
      return false
    }

    // will this work? we need to specify the type, i.e. Comparison<Clause>
    return _decisionRequiredStrategy.isDecisionRequiredFor(item)
  }
}
