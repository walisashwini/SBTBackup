package gw.sbt.model.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision

uses java.util.Collection
uses java.util.Date

class RateBookContent implements IntentAndDecision {
  var _intent: Intent as Intent
  var _referencedRateBook: RateBookContent as ReferencedBook
  var _description: String as Description
  var _bookcode: String as BookCode
  var _edition: String as Edition
  var _jurisdiction: String as Jurisdiction
  var _effectiveDate: Date as EffectiveDate
  var _tables: Collection<RateTableContent> as RateTables
  var _algorithms: Collection<RatingAlgorithm> as Algorithms
  var _decisionAndInstructions: DecisionAndInstructions as DecisionAndInstructions
  var _rateTableDecisionAndInstructions: DecisionAndInstructions as DecisionAndInstructionsForRateTables
  var _algorithmDecisionAndInstructions: DecisionAndInstructions as DecisionAndInstructionsForAlgorithms
  var _bookGroup: String as BookGroup

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
    _rateTableDecisionAndInstructions = new DecisionAndInstructions()
    _algorithmDecisionAndInstructions = new DecisionAndInstructions()
  }

  function getReferencedTable(referencedPublicId: String): RateTableContent {
    return ReferencedBook.RateTables?.firstWhere(\rateTable -> rateTable.PublicId == referencedPublicId)
  }

}