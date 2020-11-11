package gw.sbt.pca.view

uses gw.sbt.model.Intent

enhancement UpdateDiffTypeEnhancement: typekey.UpdateDiffType {
  static function from(intent : Intent) : UpdateDiffType {
    switch(intent) {
      case STATE_ADD:
          return UpdateDiffType.TC_NEW
      case STATE_REMOVE:
          return UpdateDiffType.TC_DELETED
      case STATE_MODIFIED:
          return UpdateDiffType.TC_CHANGED
      default:
          return UpdateDiffType.TC_NOCHANGE
    }
  }
}
