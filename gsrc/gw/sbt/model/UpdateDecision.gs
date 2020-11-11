package gw.sbt.model

uses java.util.List

enum UpdateDecision {
  ACCEPT,
  REJECT,
  PARTIAL_ACCEPT,
  NOT_REQUIRED,

  static property get UserSelectableDecisions() : List<UpdateDecision> {
    return {ACCEPT, REJECT}
  }

  property get IsAccept() : boolean {
    return this == ACCEPT
  }

  property get IsReject() : boolean {
    return this == REJECT
  }

  property get HasDecision() : boolean {
    return this != null and this != NOT_REQUIRED
  }

  static function fromString(decision : String) : UpdateDecision {
    return decision == null ? null : valueOf(decision.toUpperCase(Locale.ENGLISH))
  }

  override function toString() : String {
    return super.toString().toUpperCase()
  }
}