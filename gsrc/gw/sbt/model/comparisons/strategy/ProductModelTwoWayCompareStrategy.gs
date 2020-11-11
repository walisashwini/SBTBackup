package gw.sbt.model.comparisons.strategy

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.ProductModelObject
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.comparisons.TwoWayComparable
uses gw.sbt.model.comparisons.TwoWayCompare
uses gw.sbt.model.schedule.ScheduleProperty

class ProductModelTwoWayCompareStrategy implements TwoWayCompareStrategy {
  override function applicable(comparable : TwoWayComparable) : boolean {
   return comparable.Source typeis ProductModelObject or comparable.Target typeis ProductModelObject or
       comparable.Source typeis ClauseAttribute or comparable.Target typeis ClauseAttribute or
       comparable.Source typeis ScheduleProperty or comparable.Target typeis ScheduleProperty
  }

  override function isAdd(comparable : TwoWayComparable) : boolean {
    if(isUncomparableTypeInSourceOrTarget(comparable) or IsProductModelObjectUnavailable(comparable.Target)) {
      return false
    } else if(IsProductModelObjectUnavailable(comparable.Source)){
      return true
    }

    if(comparable.Source typeis ProductModelObject and comparable.Target typeis ProductModelObject) {
      if(comparable.Source.EffectiveAvailability.Availability == Lookup.UNAVAILABLE
          and comparable.Target.EffectiveAvailability.Availability == Lookup.AVAILABLE){
        return true
      }
    }

    return false
  }

  override function isRemove(comparable : TwoWayComparable) : boolean {
    if(isUncomparableTypeInSourceOrTarget(comparable) or IsProductModelObjectUnavailable(comparable.Source)) {
      return false
    } else if(IsProductModelObjectUnavailable(comparable.Target)){
      return true
    }

    if(comparable.Source typeis ProductModelObject and comparable.Target typeis ProductModelObject) {
      if(comparable.Source.EffectiveAvailability.Availability == Lookup.AVAILABLE
          and comparable.Target.EffectiveAvailability.Availability == Lookup.UNAVAILABLE){
        return true
      }
    }

    return false
  }

  override function isChange(comparable : TwoWayComparable) : boolean {
    if(isUncomparableTypeInSourceOrTarget(comparable)) {
      return false
    }

    var children = comparable.Children
    if(children.Empty) {
      return false
    }else {
      return children.hasMatch(\child ->{
        var childTwoWayCompare = new TwoWayCompare(child)
        return childTwoWayCompare.IsDifferentOverall
      })
    }
  }

  private function IsProductModelObjectUnavailable(obj : Object) : boolean {
    return obj == null or
        (obj typeis ProductModelObject and obj.EffectiveAvailability.Availability == Lookup.UNAVAILABLE)
  }

  private function isUncomparableTypeInSourceOrTarget(comparable : TwoWayComparable) : boolean {
    return
        comparable.Source typeis ClauseAttribute or comparable.Target typeis ClauseAttribute
            or comparable.Source typeis ScheduleProperty or comparable.Target typeis ScheduleProperty
  }
}