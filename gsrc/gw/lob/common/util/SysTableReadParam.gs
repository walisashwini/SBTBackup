package gw.lob.common.util

uses java.lang.Comparable

class SysTableReadParam {
  var _columnName: String as ColumnName
  var _lookupType: String as LookupType
  var _value: Comparable<Object> as Value

  static function of(columnName: String, lookupType: String, value: Comparable<Object>): SysTableReadParam {
    return new SysTableReadParam(columnName, lookupType, value)
  }

  private construct(columnName: String, lookupType: String, value: Comparable<Object>) {
    _columnName = columnName
    _lookupType = lookupType
    _value = value
  }
}