package gw.sbt.model.comparisons.strategy

uses gw.sbt.model.comparisons.TwoWayComparable
uses gw.sbt.model.rating.RatingAlgorithm

class RatingAlgorithmTwoWayCompareStrategy implements TwoWayCompareStrategy {

  override function applicable(comparable : TwoWayComparable) : boolean {
    return comparable.Source typeis RatingAlgorithm or comparable.Target typeis RatingAlgorithm
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
    if (comparable.Source typeis RatingAlgorithm and comparable.Target typeis RatingAlgorithm) {
      return isContentDifferent(comparable.Source, comparable.Target)
    }
    return false
  }

  private function isContentDifferent(firstRatingAlgorithm : RatingAlgorithm,
                                      secondRatingAlgorithm : RatingAlgorithm): boolean {
    return not firstRatingAlgorithm.equals(secondRatingAlgorithm)
  }
}