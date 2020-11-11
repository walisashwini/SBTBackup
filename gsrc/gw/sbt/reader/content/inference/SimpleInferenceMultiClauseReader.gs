package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses java.util.List

class SimpleInferenceMultiClauseReader extends SimpleInferenceClauseReader {

  override property get MatchingInferenceClasses(): List<String> {
    return {"gw.forms.generic.MultipleClausesSelectionForm"}
  }

  override function read(formPattern: PolicyFormPattern, updateContents: ConfigContents): FormInference {
    return new FormInference() {
        : Type = FormInferenceType.SIMPLE,
        : Details = formPattern.GenericInferenceClass,
        : Clauses = formPattern.ClausePatternCodes.map(\clausePublicId -> newFormInferenceClause(formPattern.PolicyLinePatternCode, clausePublicId, updateContents))
    }
  }
}