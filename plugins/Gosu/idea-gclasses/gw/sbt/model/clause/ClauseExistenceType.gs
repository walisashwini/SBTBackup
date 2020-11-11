package gw.sbt.model.clause

enum ClauseExistenceType {
  REQUIRED("Required"),
  SUGGESTED("Suggested"),
  ELECTABLE("Electable"),
  SCRIPT("Defined by Script")

  private var _label : String as readonly Label

  private construct(label : String) {
    _label = label
  }

  override function toString() : String {
    return Label
  }
}