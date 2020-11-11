package gw.sbt.model.comparisons.strategy

uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.comparisons.TwoWayComparable

class RiskAttributeTwoWayCompareStrategy implements TwoWayCompareStrategy {

  override function applicable(comparable : TwoWayComparable) : boolean {
    return comparable.Source typeis RiskAttribute or comparable.Target typeis RiskAttribute
  }

  private function IsRiskAttributeUnavailable(obj : Object) : boolean {
    return obj == null or (obj typeis RiskAttribute and (obj.EffectiveVersion==null or obj.EffectiveVersion.Available == false))
  }

  override function isAdd(comparable : TwoWayComparable) : boolean {
    if(IsRiskAttributeUnavailable(comparable.Target)) {
      return false
    } else if(IsRiskAttributeUnavailable(comparable.Source)){
      return true
    }
    return false
  }

  override function isRemove(comparable : TwoWayComparable) : boolean {
    if(IsRiskAttributeUnavailable(comparable.Source)) {
      return false
    } else if(IsRiskAttributeUnavailable(comparable.Target)){
      return true
    }
    return false
  }

  override function isChange(comparable : TwoWayComparable) : boolean {
    if (comparable.Source typeis RiskAttribute and comparable.Target typeis RiskAttribute) {
      if (comparable.Source.Code != comparable.Target.Code) {
        return true
      }
      var sourceVersion = comparable.Source.EffectiveVersion
      var targetVersion = comparable.Target.EffectiveVersion
      if (sourceVersion.Available != targetVersion.Available) {
        return true
      }

      return sourceVersion.PropertyList != targetVersion.PropertyList
    }
    return false
  }
}