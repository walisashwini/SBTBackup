package gw.sbt.pca.analysis.rules

uses gw.sbt.model.comparisons.Comparison
uses java.lang.Class
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm

abstract class DecisionRequiredRuleBase implements DecisionRequiredRule {
  abstract protected function checkAvailabilityConditions(comparison: Comparison<Object>) : boolean

  protected function checkComparisonType(comparison : Comparison<Object>) : boolean {
    return true
  }

  protected function findComparisonByClassInParent(comparison: Comparison<Object>, targetClass: Class<Object>) : Comparison<Object> {
    if(comparison.CanonicalVersion.Class == targetClass) {
      return comparison
    }

    return comparison.Parent == null ? null : findComparisonByClassInParent(comparison.Parent, targetClass)
  }

  protected function isComparisonType(comparison : Comparison<Object>, targetClass : Class<Object>) : boolean {
    return comparison.CanonicalVersion.Class == targetClass
  }

  protected function matchesClause(comparison: Comparison<Object>) : boolean {
    if(isComparisonType(comparison, Clause)) {
      return checkAvailabilityConditions(comparison)
    } else {
      var anyParentComparison = findComparisonByClassInParent(comparison, Clause)
      return anyParentComparison != null ? checkAvailabilityConditions(anyParentComparison) : false
    }
  }

  protected function matchesCovTerm(comparison: Comparison<Object>) : boolean {
    if(isComparisonType(comparison, CovTerm)) {
      return checkAvailabilityConditions(comparison)
    } else {
      var anyParentComparison = findComparisonByClassInParent(comparison, CovTerm)
      return anyParentComparison != null ? checkAvailabilityConditions(anyParentComparison) : false
    }
  }
}