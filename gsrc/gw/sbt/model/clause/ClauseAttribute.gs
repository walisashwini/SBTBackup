package gw.sbt.model.clause

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision

class ClauseAttribute<T> implements IntentAndDecision {
  var _intent : Intent as Intent
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions

  var _name  : String as Name
  var _value : T as Value

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

  reified static function with<U>(name : String, value : U, intent : Intent = null) : ClauseAttribute<U> {
    return new ClauseAttribute<U>() { :Name = name, :Value = value, :Intent = intent}
  }
}
