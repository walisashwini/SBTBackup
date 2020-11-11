package gw.sbt.model.form.inference

uses java.util.Objects
uses java.util.List

class FormInference {

  enum FormInferenceType {
    MANDATORY("Mandatory"), NONE("None"), SIMPLE("Simple"), CUSTOM ("Custom")

    var _label : String

    private construct(label : String) {
      _label = label
    }

    override function toString() : String {
      return _label
    }
  }

  var _type : FormInferenceType as Type
  var _details : String as Details
  
  var _clauses : List<FormInferenceClause> as Clauses
  var _values : List<FormInferenceCovTermValue> as CovTermValues
  var _typeKeys : List<FormInferenceTypeKey> as TypeKeys

  override function equals(other : Object) : boolean {
    return other != null and other typeis FormInference and
        Type == other.Type and
        Details == other.Details
  }

  override function hashCode() : int {
    return Objects.hash({Type, Details})
  }
}