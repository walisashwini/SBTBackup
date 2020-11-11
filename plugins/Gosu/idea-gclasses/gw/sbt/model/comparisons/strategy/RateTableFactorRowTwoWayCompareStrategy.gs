package gw.sbt.model.comparisons.strategy

uses gw.sbt.model.comparisons.TwoWayComparable
uses gw.sbt.model.rating.FactorRow

class RateTableFactorRowTwoWayCompareStrategy implements TwoWayCompareStrategy {

  override function applicable(comparable : TwoWayComparable) : boolean {
    return comparable.Source typeis FactorRow or comparable.Target typeis FactorRow
  }

  override function isAdd(comparable : TwoWayComparable) : boolean {
    if(comparable.Target == null) {
      return false
    } else if(comparable.Source == null){
      return true
    }
    return false
  }

  override function isRemove(comparable : TwoWayComparable) : boolean {
    if(comparable.Source == null) {
      return false
    } else if(comparable.Target == null){
      return true
    }
    return false
  }

  override function isChange(comparable : TwoWayComparable) : boolean {
    if (comparable.Source typeis FactorRow and comparable.Target typeis FactorRow) {
      return comparable.Source.Rate != comparable.Target.Rate
    }
    return false
  }

}