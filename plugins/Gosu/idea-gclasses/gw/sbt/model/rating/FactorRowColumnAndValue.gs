package gw.sbt.model.rating

class FactorRowColumnAndValue {
  var _column: String  as Column
  var _value: String as Value

  construct(column: String, value: String) {
    _column = column
    _value = value
  }
}