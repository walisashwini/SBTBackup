package gw.sbt.model.form

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.HasPublicId
uses java.util.Objects

class PolicyForm implements IntentAndDecision, HasPublicId {
  var _intent : Intent as Intent
  var _priority : int as Priority
  var _number : String as Number
  var _edition : String as Edition
  var _description: String as Description
  var _availability : ProductModelAvailability as EffectiveAvailability
  var _availabilities: List<ProductModelAvailability> as Availabilities = {}
  var _inference : FormInference as Inference
  var _code : String as Code
  var _internalGroupCode : String as InternalGroupCode
  var _useInsteadOfCWForm : PolicyForm as UseInsteadOfCWForm

  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis PolicyForm and
        Number == other.Number and
        Code == other.Code and
        Edition == other.Edition and
        Description == other.Description and
        InternalGroupCode == other.InternalGroupCode and
        UseInsteadOfCWForm == other.UseInsteadOfCWForm and
        Inference == other.Inference and
        EffectiveAvailability == other.EffectiveAvailability and
        Availabilities.allMatch(\availability -> other.Availabilities.contains(availability)) and
        other.Availabilities.allMatch(\availability -> Availabilities.contains(availability))
  }

  override function hashCode() : int {
    return Objects.hash({Number, Code, Edition, Description, InternalGroupCode, UseInsteadOfCWForm, Inference, EffectiveAvailability})
  }

  override property get PublicId() : String  {
    return Code
  }
}