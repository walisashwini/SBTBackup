package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses java.util.List

class DefaultInferenceReader implements InferenceReader {
  override function read(formPattern: PolicyFormPattern, updateContents: ConfigContents): FormInference {
    return new FormInference() {
        : Type = FormInferenceType.CUSTOM,
        : Details = formPattern.GenericInferenceClass
    }
  }

  override property get MatchingInferenceClasses(): List<String> {
    return {}
  }
}