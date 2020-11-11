package gw.lob.common.sbt.schedules

uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.BasePropertyInfoType
uses java.util.List

class VersionedPropertyInfoType {
  var _name: String as Name
  var _propInfos: List<BasePropertyInfoType> as PropInfos
  construct(name: String, propInfos: List<BasePropertyInfoType>) {
    this._name = name
    this._propInfos = propInfos
  }

  property get Priority(): int {
    return _propInfos.first()?.Priority
  }
}