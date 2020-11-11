package gw.sbt.model.schedule

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision

class ScheduleProperty implements IntentAndDecision {
  var _intent : Intent as Intent
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions

  var _name : String as Name
  var _desc : String as Description

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

}