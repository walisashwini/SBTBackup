package gw.sbt.model.clause

enum DataType {
  UNKNOWN("Unknown"),
  NUMERIC("Numeric"),
  TEXT("Text"),
  BOOLEAN("Boolean"),
  OPTION("Option"),
  DATE("Date")

  private var _label : String

  private construct(label : String) {
    _label = label
  }

  override function toString() : String {
    return _label
  }
}