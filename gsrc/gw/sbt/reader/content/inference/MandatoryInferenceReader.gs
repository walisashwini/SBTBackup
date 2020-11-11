package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses java.util.List

class MandatoryInferenceReader implements InferenceReader {
  override property get MatchingInferenceClasses(): List<String> {
    return {
        "gw.forms.generic.GenericAlwaysAddedForm",
        "gw.forms.generic.GenericAlwaysAddedEveryJobForm"
    }
  }

  override function read(formPattern: PolicyFormPattern, updateContents: ConfigContents): FormInference {
    return new FormInference() {
        : Type = FormInferenceType.MANDATORY,
        : Details = formPattern.GenericInferenceClass
    }
  }
}