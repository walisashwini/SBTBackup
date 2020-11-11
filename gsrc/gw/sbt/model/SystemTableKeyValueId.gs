package gw.sbt.model

class SystemTableKeyValueId {
  public final static var NO_VALUE_COLUMN: String = ""
  public final static var VALUE_COLUMN_NAME: String = "Value"
  public final static var MIN_VALUE_COLUMN_NAME: String = "MinValue"
  public final static var MAX_VALUE_COLUMN_NAME: String = "MaxValue"
  public final static var MIN_MAX_VALUE_COLUMN_NAME: String = "MinValue/MaxValue"
  public final static var DBTERRITORY_VALUE_COLUMN_NAME: String = "Code"

  var _keyColumns : List<String> as KeyColumns
  var _valueColumn : String as ValueColumn

  var _effectiveDate : Date as readonly EffectiveDate
  var _expiryDate : Date as readonly ExpiryDate

  construct(keyColumns : List<String>, valueColumn : String, effectiveDate : Date, expiryDate : Date) {
    _keyColumns = keyColumns
    _valueColumn = valueColumn
    _effectiveDate = effectiveDate
    _expiryDate = expiryDate
  }
}