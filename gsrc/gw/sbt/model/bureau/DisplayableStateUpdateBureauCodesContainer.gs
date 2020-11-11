package gw.sbt.model.bureau

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision

/**
 * This class represents a "row" in the UI where the notion of a single system table/bureau code row can be different
 * from a row in the system table. Difference comes from the fact that a list of row keys may be associated with multiple
 * values in the UI, whereas it can be only 1 value per row in the system tables.
 */
class DisplayableStateUpdateBureauCodesContainer implements IntentAndDecision {
  final var VALUE_DELIMITER = ", "

  var _tableName : String as readonly TableName
  var _definingKeys : Set<BureauCodeAttribute> as DefiningKeys
  var _codes : List<StateUpdateBureauCode> as Codes
  var _hasValueColumn: boolean as HasValueColumn = true

  /**
   * Tech debt: remove Intent from this class. Intent is a state-add notion indicating how a state has differed from CW.
   * Since this class is only used for state-update flow, it shouldn't really be here. It is added to support IntentAndDecision
   * interface whose methods are used by Comparison class. The tech debt is to separate Intent and Decision into
   * different interfaces.
   */
  var _intent: Intent as Intent

  construct(tableName : String) {
    _tableName = tableName
  }

  property get ValueRepresentation() : String {
    return Codes*.Value.orderBy(\attribute -> attribute.DisplayValue)*.DisplayValue.join(VALUE_DELIMITER)
  }

  property set DecisionAndInstructions(decisionAndInstructions : DecisionAndInstructions) {
    Codes.each(\code -> code.DecisionAndInstructions.updateFrom(decisionAndInstructions))
  }

  override property get DecisionAndInstructions() : DecisionAndInstructions {
    return Codes.first()?.DecisionAndInstructions
  }

  property get SortedKeysValueRepresentation() : String {
    return _definingKeys.toList().orderBy(\key -> key.Name)*.DisplayValue.join(VALUE_DELIMITER)
  }

}