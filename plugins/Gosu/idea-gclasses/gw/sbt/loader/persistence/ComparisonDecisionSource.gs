package gw.sbt.loader.persistence

uses gw.sbt.model.ContainerPropertyConfigModelObject
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.bureau.DisplayableStateUpdateBureauCodesContainer
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.model.rating.RatingAlgorithm

class ComparisonDecisionSource {
  var _comparisonDecisionAndInstructions : Map<String, DecisionAndInstructions>

  public static function create(sbtUpdate : SBTUpdate) : ComparisonDecisionSource {
    return new ComparisonDecisionSource(sbtUpdate.ComparisonDecisionAndInstructions)
  }

  public static function createDeattached() : ComparisonDecisionSource {
    return new ComparisonDecisionSource({})
  }
  private construct(comparisonDecisionAndInstructions : Map<String, DecisionAndInstructions>) {
    _comparisonDecisionAndInstructions = comparisonDecisionAndInstructions
  }

  reified function getDecisionAndInstructions<T>(currentVersion : T, adoptedVersion : T) : DecisionAndInstructions {
    var decisionAndInstructionsKey = deriveDecisionAndInstructionsKey(currentVersion ?: adoptedVersion)

    if(decisionAndInstructionsKey != null) {
      if(_comparisonDecisionAndInstructions.get(decisionAndInstructionsKey) == null) {
        var newDecisionAndInstructions = new DecisionAndInstructions()
        _comparisonDecisionAndInstructions.put(decisionAndInstructionsKey, newDecisionAndInstructions)
        return newDecisionAndInstructions
      }
      return _comparisonDecisionAndInstructions.get(decisionAndInstructionsKey)
    }

    // Being defensive when decisions cannot be saved
    return new DecisionAndInstructions()
  }

  public static reified function deriveDecisionAndInstructionsKey<T>(targetVersion : T) : String {
    if (targetVersion typeis Clause) {
      return targetVersion.PublicId
    } else if (targetVersion typeis CovTerm) {
      return targetVersion.PublicId
    } else if (targetVersion typeis CovTermOption) {
      return targetVersion.PublicId
    } else if (targetVersion typeis PolicyForm) {
      return targetVersion.Number
    } else if (targetVersion typeis RatingAlgorithm) {
      return targetVersion.Code + targetVersion.Jurisdiction?:""
    } else if (targetVersion typeis RateTableContent) {
      return targetVersion.TableCode
    } else if (targetVersion typeis FactorRow) {
      return targetVersion.TableCode + targetVersion.ParameterValuesKey
    } else if (targetVersion typeis ContainerPropertyConfigModelObject) { //ie. Risk
      return targetVersion.ContainerKey.toString()
    } else if (targetVersion typeis RiskAttribute) {
      return targetVersion.OriginatingFullPath
    } else if (targetVersion typeis BureauCodes) {
      return targetVersion.TableName
    } else if (targetVersion typeis DisplayableStateUpdateBureauCodesContainer) {
      if (targetVersion.DefiningKeys.HasElements) {
        return targetVersion.TableName + targetVersion.DefiningKeys*.Name.join("-") + targetVersion.DefiningKeys*.Value.join("-")
      } else {
        return targetVersion.TableName + targetVersion.Codes*.Value*.Name.join("-") + targetVersion.Codes*.Value*.DisplayValue.join("-")
      }
    } else {
      return null
    }
  }
}