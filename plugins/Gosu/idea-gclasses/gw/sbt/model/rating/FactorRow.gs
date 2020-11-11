package gw.sbt.model.rating

uses gw.lang.enhancements.OrderedList
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.IntentAndDecision
uses gw.util.IOrderedList
uses gw.sbt.model.TabularRowData
uses java.util.List

class FactorRow implements TabularRowData, IntentAndDecision {
  var _tableCode: String as TableCode
  var _publicId: String as PublicId
  var _columnValues: IOrderedList<String>
  var _columnAndValues: IOrderedList<FactorRowColumnAndValue> as ParameterColumnsAndValues

  var _columnType: String as ColumnType
  var _rate: String as Rate
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions
  var _intent: Intent as Intent

  construct() {
    _decisionAndInstructions = new DecisionAndInstructions()
  }

  property get ParameterValues() : IOrderedList<String> {
    if (_columnValues == null) {
      _columnValues = new OrderedList<String>(ParameterColumnsAndValues*.Value.toList())
    }
    return _columnValues
  }

  override property get SequencedRowValues(): List<String> {
    return ParameterValues
  }

  property get ParameterValuesKey() : String {
    return ParameterValues.reduce("", \param1, param2 -> { return param1 + param2 })
  }

  property get IsDecimalType(): boolean { // all possible types in factor: decimal, integer, string, date, boolean
    return ColumnType.equalsIgnoreCase("decimal")
  }

  property get IsIntegerType(): boolean { // all possible types in factor: decimal, integer, string, date, boolean
    return ColumnType.equalsIgnoreCase("integer")
  }

  property get ScaleOfDecimalType() : int {
    if (IsDecimalType) {
      if (Rate == null or Rate.indexOf('.') == -1) {
        return 0
      } else {
        return Rate.split("\\.")[1].length()
      }
    }
    return 0
  }

}