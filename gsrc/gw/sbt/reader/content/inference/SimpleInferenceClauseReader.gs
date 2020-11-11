package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses gw.sbt.model.form.inference.FormInferenceClause
uses gw.sbt.reader.content.RiskReader
uses java.util.List

class SimpleInferenceClauseReader implements InferenceReader {

  override property get MatchingInferenceClasses() : List<String> {
    return {"gw.forms.generic.GenericClauseSelectionForm"}
  }

  override function read(formPattern: PolicyFormPattern, updateContents: ConfigContents): FormInference {
    return new FormInference() {
        : Type = FormInferenceType.SIMPLE,
        : Details = formPattern.GenericInferenceClass,
        : Clauses = {newFormInferenceClause(formPattern.PolicyLinePatternCode, formPattern.ClausePatternCode, updateContents)}
    }
  }

  protected function newFormInferenceClause(policyLinePatternCode : String, clausePublicId: String, updateContents: ConfigContents): FormInferenceClause {
    var clausePattern = updateContents.getClausePattern(policyLinePatternCode, clausePublicId)
    return new FormInferenceClause() {
        : PublicId = clausePublicId,
        : CodeIdentifier = clausePattern.CodeIdentifier,
        : Description = updateContents.ProductModelDisplayProperties.getClauseDescriptionFor(clausePublicId),
        : Category = clausePattern.Category,
        : ParentRisk = new RiskReader().read(clausePattern.OwningEntityType, updateContents)
    }
  }
}