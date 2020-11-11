package gw.sbt.model.meta

uses java.util.Date

class JurisdictionMetaData {

  var _jurisdiction : String as Jurisdiction
  var _effectiveDate : Date as EffectiveDate
  var _version : String as Version
  var _stateBureau : String as StateBureau

}