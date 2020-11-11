package gw.sbt.pca.validation

uses gw.api.locale.DisplayKey
uses gw.sbt.model.IntentAndDecision
uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.SBTUpdate

uses java.util.Collection
uses java.util.List

class SBTUpdateValidator extends Validator {
  var _update : SBTUpdate as Update

  construct(update : SBTUpdate) {
    _update = update
  }

  override function validate() {
    this.ErrorMessages.clear()
    validateAdoptionDate(Update.AdoptionDate, Update.MetaData.EffectiveDate, Update.MetaData.Jurisdiction)
    validateAllDecisionsMade()
  }

  private function leafRiskAttributes(risk : Risk) : List<RiskAttribute> {
    return risk.RiskAttributes
        .where(\ attribute -> not attribute.CountrywideOnly)
        .map(\ra -> ra.DefiningLeafAttribute)
  }

  private function validateAllDecisionsMade() {
    var decisionSources : Collection<Collection<IntentAndDecision>> = {
        Update.Clauses.where(\clause -> clause.Intent != null),
        Update.Forms.where(\form -> form.Intent != null),
        Update.Risks.flatMap(\risk -> leafRiskAttributes(risk)),
        Update.RateBook == null ? {} : {Update.RateBook}
    }

    var allDecisions = decisionSources*.DecisionAndInstructions*.Decision

    if (allDecisions.contains(null)) {
      addError(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Error.MissingDecision"))
    }
  }
}
