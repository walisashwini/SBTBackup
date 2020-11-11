package gw.sbt.artifacts.forms

class FormPatternModel {
  var _pattern : PolicyFormPattern as FormPattern
  var _formInference : CustomPolicyFormInference as FormInference
  var _changed: boolean as IsChanged

  static function newInstance() : FormPatternModel {
    return new FormPatternModel()
  }
  private construct() {
  }

  construct(pattern : PolicyFormPattern,
            formInference : CustomPolicyFormInference) {
    _pattern = pattern
    _formInference = formInference
  }

  function customFormInferenceMatches(other : FormPatternModel) : boolean {
    return Objects.equals(FormInference, other.FormInference) || FormInference?.matches(other.FormInference)
  }
}