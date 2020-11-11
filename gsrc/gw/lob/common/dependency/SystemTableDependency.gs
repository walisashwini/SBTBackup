package gw.lob.common.dependency

uses java.util.Map
uses java.util.HashMap
uses java.util.Date

class SystemTableDependency {
  var _systemTable: String as readonly SystemTable
  var _valueColumn: String as readonly ValueColumn
  var _effectiveDate: Date as readonly EffectiveDate
  var _dependsOn: Map<String, PropertyTypeInfo > as readonly DependsOn = new HashMap<String, PropertyTypeInfo >()

  construct(systemTable: String, effectiveDate: Date, valueColumn: String = null, available: boolean = true) {
    _systemTable = systemTable
    _valueColumn = valueColumn
    _effectiveDate = effectiveDate
  }

  function isValid(filter: EffectiveJurisdictionCriteria): boolean {
    return filter.Date == null || filter.Date.isBetweenDates(_effectiveDate, null)
  }
}