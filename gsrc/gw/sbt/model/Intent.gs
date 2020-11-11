package gw.sbt.model

uses java.util.Locale

enum Intent {
  STATE_ADD,
  STATE_REMOVE,
  STATE_MODIFIED,
  STATE_NO_CHANGE,

  static function fromString(type : String) : Intent {
    return type == null ? null : valueOf(type.toUpperCase(Locale.ENGLISH))
  }

  override function toString() : String {
    return super.toString().toLowerCase()
  }

  property get IsAdd() : boolean {
    return this == STATE_ADD
  }

  property get IsRemove() : boolean {
    return this == STATE_REMOVE
  }

  property get IsModified() : boolean {
    return this == STATE_MODIFIED
  }
}