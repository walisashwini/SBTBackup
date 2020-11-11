package gw.sbt.model.bureau

uses gw.sbt.model.DecisionAndInstructions

/**
 * StateUpdateBureauCode represents one row in the system table / bureau code list. This model is defined to follow the
 * state-update use cases specifying key and value attributes for that row. It has the ability to retain user's decision
 * and instructions, as well as determine if another StateUpdateBureauCode has the same set of keys.
 */
class StateUpdateBureauCode {
  var _CW : boolean as CW

  var _value : BureauCodeAttribute as Value
  var _keys : Set<BureauCodeAttribute> as Keys
  var _effectiveDate : Date as EffectiveDate
  var _expirationDate : Date as ExpirationDate

  var _decisionAndInstructions: DecisionAndInstructions as DecisionAndInstructions

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
    _keys = {}
    _CW = false
  }

  function hasSameKeySetAs(otherStateUpdateBureauCode : StateUpdateBureauCode) : boolean {
    return Keys == otherStateUpdateBureauCode.Keys
  }

  function hasSameValueAs(otherStateUpdateBureauCode : StateUpdateBureauCode) : boolean {
    var otherValue = otherStateUpdateBureauCode.Value
    if (Value typeis BureauCodeMinMaxAttribute and otherValue typeis BureauCodeMinMaxAttribute) {
      return Value.MinValue == otherValue.MinValue and Value.MaxValue == otherValue.MaxValue
    } else {
      return Value.Value == otherStateUpdateBureauCode.Value.Value
    }
  }

}