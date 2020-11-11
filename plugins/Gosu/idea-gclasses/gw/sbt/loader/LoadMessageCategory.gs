package gw.sbt.loader

enum LoadMessageCategory {
  DEFAULT("Default"),
  ENTITY_MERGE_CONFLICT("EntityMergeConflict")

  var _category : String

  private construct(categoryString : String) {
    _category = categoryString
  }

  override function toString() : String {
    return _category
  }
}