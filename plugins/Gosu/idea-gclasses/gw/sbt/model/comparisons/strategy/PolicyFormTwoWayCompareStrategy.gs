package gw.sbt.model.comparisons.strategy

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.comparisons.TwoWayComparable
uses gw.sbt.model.form.PolicyForm

class PolicyFormTwoWayCompareStrategy implements TwoWayCompareStrategy {
  override function applicable(comparable : TwoWayComparable) : boolean {
    return comparable.Source typeis PolicyForm or comparable.Target typeis PolicyForm
  }

  override function isAdd(comparable : TwoWayComparable) : boolean {
    if(IsFormUnavailable(comparable.Target)) {
      return false
    } else if(IsFormUnavailable(comparable.Source)){
      return true
    }

    if(comparable.Source typeis PolicyForm and comparable.Target typeis PolicyForm) {
      if(comparable.Source.EffectiveAvailability.Availability == Lookup.UNAVAILABLE
          and comparable.Target.EffectiveAvailability.Availability == Lookup.AVAILABLE){
        return true
      }
    }

    return false
  }

  override function isRemove(comparable : TwoWayComparable) : boolean {
    if(IsFormUnavailable(comparable.Source)) {
      return false
    } else if(IsFormUnavailable(comparable.Target)){
      return true
    }

    if(comparable.Source typeis PolicyForm and comparable.Target typeis PolicyForm) {
      if(comparable.Source.EffectiveAvailability.Availability == Lookup.AVAILABLE
          and comparable.Target.EffectiveAvailability.Availability == Lookup.UNAVAILABLE){
        return true
      }
    }

    return false
  }

  override function isChange(comparable : TwoWayComparable) : boolean {
    if(comparable.Source typeis PolicyForm and comparable.Target typeis PolicyForm) {
      if (comparable.Source.Edition.trim() != comparable.Target.Edition.trim()) { // only compare the edition
        return true
      }
    }

    return false
  }

  private function IsFormUnavailable(obj : Object) : boolean {
    return obj == null or
        (obj typeis PolicyForm and obj.EffectiveAvailability.Availability == Lookup.UNAVAILABLE)
  }

}