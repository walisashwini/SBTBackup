package gw.sbt.model.clause

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.ProductModelObject
uses java.util.List

class CovTermOption implements ProductModelObject {
  var _pid : String as PublicId
  var _priority : int as Priority
  var _optionCode : String as OptionCode
  var _intent : Intent
  var _effectiveAvailability : ProductModelAvailability
  var _availabilities : List<ProductModelAvailability> as Availabilities = {}
  var _description : String as Description
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions = new DecisionAndInstructions()

  override property get Intent() : Intent {
    return _intent
  }

  override property set Intent(intent : Intent) {
    _intent = intent
  }

  override property get ChildrenWithAvailability() : List<ProductModelObject> {
    return {}
  }

  override property set EffectiveAvailability(availability : ProductModelAvailability) {
    _effectiveAvailability = availability
  }

  override property get EffectiveAvailability() : ProductModelAvailability {
    return _effectiveAvailability
  }
}