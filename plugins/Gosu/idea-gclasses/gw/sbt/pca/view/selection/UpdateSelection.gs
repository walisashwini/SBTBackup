package gw.sbt.pca.view.selection

uses java.util.Date

class UpdateSelection {
  var _effectiveDate : Date as readonly EffectiveDate
  var _version : String as readonly Version

  construct(effectiveDate : Date, version : String) {
    _effectiveDate = effectiveDate
    _version = version
  }
}