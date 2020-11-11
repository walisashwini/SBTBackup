package gw.sbt.model.comparisons

uses gw.sbt.model.Intent
uses gw.sbt.model.comparisons.strategy.BureauCodesTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.PolicyFormTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.ProductModelTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.RateTableFactorRowTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.RateTableTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.RatingAlgorithmTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.RiskAttributeTwoWayCompareStrategy
uses gw.sbt.model.comparisons.strategy.TwoWayCompareStrategy
uses org.slf4j.LoggerFactory

class TwoWayCompare {
  var _compareStrategies : List<TwoWayCompareStrategy> = {
     new ProductModelTwoWayCompareStrategy(),
     new PolicyFormTwoWayCompareStrategy(),
     new RateTableTwoWayCompareStrategy(),
     new RateTableFactorRowTwoWayCompareStrategy(),
     new RatingAlgorithmTwoWayCompareStrategy(),
     new RiskAttributeTwoWayCompareStrategy(),
     new BureauCodesTwoWayCompareStrategy()
  }

  var _comparable : TwoWayComparable

  construct(comparable : TwoWayComparable) {
    _comparable = comparable
  }

  property get IsAdd() : boolean {
    if(SourceAndTargetEmpty) {
      return false
    }

    for(compareStrategy in _compareStrategies) {
      if(compareStrategy.applicable(_comparable)) {
        return compareStrategy.isAdd(_comparable)
      }
    }

    LoggerFactory.getLogger("PCA").warn("Two way comparison for " +  comparableClass + " has not been implemented yet.")
    return false
  }

  property get IsRemove() : boolean {
    if(SourceAndTargetEmpty) {
      return false
    }

    for(compareStrategy in _compareStrategies) {
      if(compareStrategy.applicable(_comparable)) {
        return compareStrategy.isRemove(_comparable)
      }
    }

    LoggerFactory.getLogger("PCA").warn("Two way comparison for " +  comparableClass + " has not been implemented yet.")
    return false
  }

  /**
   * @return true if comparison between two versions represent a change. In product model, this will only be true
   * if children have changed.
   */
  property get IsChange() : boolean {
    if(SourceAndTargetEmpty) {
      return false
    }

    for(compareStrategy in _compareStrategies) {
      if(compareStrategy.applicable(_comparable)) {
        return compareStrategy.isChange(_comparable)
      }
    }

    LoggerFactory.getLogger("PCA").warn("Two way comparison for " +  comparableClass + " has not been implemented yet.")
    return false
  }

  property get IsDifferentOverall() : boolean {
    return IsAdd or IsRemove or IsChange
  }

  property get ChangeType() : Intent {
    if (IsAdd)
      return STATE_ADD
    else if (IsRemove)
      return STATE_REMOVE
    else if (IsChange)
      return STATE_MODIFIED
    else
      return STATE_NO_CHANGE
  }

  private property get SourceAndTargetEmpty() : boolean {
    return _comparable.Source == null and _comparable.Target == null
  }

  private property get comparableClass() : Class {
    var nonNullComparable = {_comparable.Source, _comparable.Target}.firstWhere(\comparable -> comparable != null)

    return nonNullComparable != null ? nonNullComparable.Class : null
  }
}