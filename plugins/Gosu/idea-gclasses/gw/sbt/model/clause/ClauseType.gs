package gw.sbt.model.clause

enum ClauseType {
  COVERAGE("Coverage"),
  CONDITION("Condition"),
  EXCLUSION("Exclusion")

  private var _label : String

  private construct(label : String) {
    _label = label
  }

  override function toString() : String {
    return _label
  }
}