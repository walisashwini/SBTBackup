package gw.sbt.model.comparisons.strategy

uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.bureau.DisplayableStateUpdateBureauCodesContainer
uses gw.sbt.model.comparisons.TwoWayComparable
uses gw.sbt.model.comparisons.TwoWayCompare

class BureauCodesTwoWayCompareStrategy implements TwoWayCompareStrategy {
  override function applicable(comparable : TwoWayComparable) : boolean {
    return comparable.Source typeis BureauCodes or comparable.Target typeis BureauCodes or
        comparable.Source typeis DisplayableStateUpdateBureauCodesContainer or
        comparable.Target typeis DisplayableStateUpdateBureauCodesContainer
  }

  override function isAdd(comparable : TwoWayComparable) : boolean {
    if(isBureauCodesOrIndividualRowUnavailable(comparable.Target)) {
      return false
    } else if(isBureauCodesOrIndividualRowUnavailable(comparable.Source)){
      return true
    }

    return false
  }

  override function isRemove(comparable : TwoWayComparable) : boolean {
    if(isBureauCodesOrIndividualRowUnavailable(comparable.Source)) {
      return false
    } else if(isBureauCodesOrIndividualRowUnavailable(comparable.Target)){
      return true
    }

    return false
  }

  override function isChange(comparable : TwoWayComparable) : boolean {
    if(isAdd(comparable) or isRemove(comparable)) {
      return false
    }

    if (comparable.Source typeis BureauCodes and comparable.Target typeis BureauCodes) {
      if(comparable.Children.Empty) {
        // If there is no child comparisons, then there is no change between these two sets of bureau codes
        return false
      } else {
        return comparable.Children.hasMatch(\child ->{
          var childTwoWayCompare = new TwoWayCompare(child)
          return childTwoWayCompare.IsDifferentOverall
        })
      }
    } else if (comparable.Source typeis DisplayableStateUpdateBureauCodesContainer and
        comparable.Target typeis DisplayableStateUpdateBureauCodesContainer) {
      if (comparable.Source.HasValueColumn or comparable.Target.HasValueColumn) {
        return comparable.Source.ValueRepresentation != comparable.Target.ValueRepresentation
      } else { // if there is no value column defined, compare the key's value
        return comparable.Source.SortedKeysValueRepresentation != comparable.Target.SortedKeysValueRepresentation
      }
    }

    return false
  }

  private function isBureauCodesOrIndividualRowUnavailable(obj : Object) : boolean {
    return obj == null or
        (obj typeis DisplayableStateUpdateBureauCodesContainer and (obj.Codes == null or obj.Codes.Empty))
  }
}