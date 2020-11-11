package gw.sbt.model.rating

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision
uses gw.util.IOrderedList

class RateTableContent implements IntentAndDecision {
  var _ratebook: RateBookContent as OwningRateBook
  var _name: String as TableName
  var _code: String as TableCode
  var _columns: IOrderedList< RateTableDefinitionParameter > as ParameterDefinitions
  var _factorName: String as FactorName
  var _factorPhysicalColumnName: String as FactorPhysicalColumnName
  var _factors: List<FactorRow> as FactorRows
  var _intent: Intent as Intent
  var _decisionAndInstructions: DecisionAndInstructions as DecisionAndInstructions
  var _publicId: String as PublicId
  var _referenceTablePublicId: String as ReferenceTablePublicId

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

  property get IsReferencedRateTable(): boolean {
    return _referenceTablePublicId != null
  }

  function copy() : RateTableContent {
    return new RateTableContent() {
      :OwningRateBook = OwningRateBook,
      :TableName = TableName,
      :TableCode = TableCode,
      :ParameterDefinitions = ParameterDefinitions,
      :FactorName = FactorName,
      :FactorPhysicalColumnName = FactorPhysicalColumnName,
      :FactorRows = FactorRows,
      :Intent = Intent,
      :DecisionAndInstructions = DecisionAndInstructions,
      :PublicId = PublicId,
      :ReferenceTablePublicId = ReferenceTablePublicId
    }
  }
}