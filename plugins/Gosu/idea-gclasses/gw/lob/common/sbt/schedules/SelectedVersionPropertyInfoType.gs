package gw.lob.common.sbt.schedules

uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.BasePropertyInfoType

class SelectedVersionPropertyInfoType {
  var _name: String as Name
  var _propInfo: BasePropertyInfoType as PropInfo

  construct(name: String, propInfo: BasePropertyInfoType) {
    this._name = name
    this._propInfo = propInfo
  }
}