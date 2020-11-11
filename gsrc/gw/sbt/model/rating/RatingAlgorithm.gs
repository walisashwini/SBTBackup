package gw.sbt.model.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision

class RatingAlgorithm  implements IntentAndDecision {
  // NOTE: changes to any of these properties MUST BE ALSO MADE IN RatingAlgorithmConverter.gs as well.
  // This is part of a less-ideal workaround to increase performance of (de)serialization of rating algorithms.
  var _ratebook : RateBookContent as OwningRateBook
  var _name : String as Name
  var _code : String as Code
  var _jurisdiction : String as Jurisdiction

  var _intent : Intent as Intent
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions
  var _calcSteps : List<RatingCalcStepDefintion>

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

  property set CalcSteps(calcSteps : List<RatingCalcStepDefintion>) {
    _calcSteps = calcSteps.sortBy(\calcStep -> calcStep.SortOrder)
  }

  property get CalcSteps() : List<RatingCalcStepDefintion> {
    return _calcSteps
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis RatingAlgorithm and
        Name == other.Name and
        Code == other.Code and
        Arrays.equals(CalcSteps?.toArray(), other.CalcSteps?.toArray())
  }

  override function hashCode() : int {
    return Objects.hash({Name, Code, Arrays.hashCode(CalcSteps?.toArray())})
  }

}