package gw.sbt.reader.content.inference

uses gw.sbt.artifacts.clauses.PolicyCovTermPattern
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.clause.DataType
uses gw.sbt.model.form.inference.FormInference
uses gw.sbt.model.form.inference.FormInferenceCovTermValue
uses gw.sbt.model.form.inference.FormInference.FormInferenceType
uses java.util.List

class SimpleInferenceCovTermsReader extends SimpleInferenceClauseReader {

  override property get MatchingInferenceClasses(): List<String> {
    return {"gw.forms.generic.GenericCovTermSelectionForm"}
  }

  override function read(formPattern: PolicyFormPattern, updateContents: ConfigContents): FormInference {
    return new FormInference() {
        : Type = FormInferenceType.SIMPLE,
        : Details = formPattern.GenericInferenceClass,
        : CovTermValues = newFormInferenceCovTermValues(formPattern, updateContents)
    }
  }

  private function newFormInferenceCovTermValues(formPattern: PolicyFormPattern,
                                                 updateContents: ConfigContents): List< FormInferenceCovTermValue > {
    var covTerms = formPattern.FormPatternCovTermPublicIds
    return covTerms.map(\covTermPublicId -> {
      var covTermPattern = updateContents.getClausePattern(formPattern.PolicyLinePatternCode, formPattern.ClausePatternCode)?.getCovTerm(covTermPublicId)
      var values = formPattern.getSelectedCovTermValues(covTermPublicId)
      if (values.Empty) {
        return {
            new FormInferenceCovTermValue () {
                : Description = readSelectedValueDescription(covTermPattern, null, updateContents.ProductModelDisplayProperties),
                : CovTerm = readCovTerm(covTermPublicId, covTermPattern.CodeIdentifier, formPattern, updateContents)
            }
        }
      }

      return values.map( \ value -> new FormInferenceCovTermValue () {
          : Description = readSelectedValueDescription(covTermPattern, value, updateContents.ProductModelDisplayProperties),
          : CovTerm = readCovTerm(covTermPublicId, covTermPattern.CodeIdentifier, formPattern, updateContents)
      })
    }).flatten().toList()
  }

  private function readCovTerm(covTermPublicId : String, codeId : String, formPattern : PolicyFormPattern,
                               updateContents : ConfigContents) : FormInferenceCovTermValue.CovTerm {
    return new FormInferenceCovTermValue.CovTerm() {
        : PublicId = covTermPublicId,
        : CodeIdentifier = codeId,
        : Description = updateContents.ProductModelDisplayProperties.getCovTermDescriptionFor(covTermPublicId),
        : Clause = newFormInferenceClause(formPattern.PolicyLinePatternCode, formPattern.ClausePatternCode, updateContents)
    }
  }

  private function readSelectedValueDescription(covTermPattern : PolicyCovTermPattern, value : String, displayProperties : ProductModelDisplayProperties) : String {
    switch (covTermPattern.CovTermDataType) {
      case DataType.BOOLEAN:
        return displayProperties.getBooleanDescriptionFor(true)

      case DataType.OPTION:
        return value == null ? null : displayProperties.getOptionDescriptionFor(covTermPattern.getOptionByCode(value).PublicId)

      default:
        return null
    }
  }
}