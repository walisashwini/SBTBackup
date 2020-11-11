package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses java.util.List

class SimpleInferenceMultiTypekeyReader extends SimpleInferenceTypekeyReader {

  override protected function getTypeKeyCodes(formPattern: PolicyFormPattern): List<String> {
    return formPattern.CoverableTypeKeys
  }

  override property get MatchingInferenceClasses(): List<String> {
    return {"gw.forms.generic.MultipleTypeKeysSelectionForm"}
  }
}