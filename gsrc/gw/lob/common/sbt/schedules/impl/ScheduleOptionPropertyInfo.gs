package gw.lob.common.sbt.schedules.impl

uses gw.api.domain.Clause
uses gw.lang.reflect.IType
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses java.util.List

class ScheduleOptionPropertyInfo extends AbstractSchedulePropertyInfo <String> {

  var _default: String as readonly DefaultValue;

  construct(colName: String, colLabel: String, isRequired: boolean, propertyInfoName: String, defaultValue: String) {
    super(propertyInfoName, colName, colLabel, isRequired)
    init(defaultValue)
  }

  construct(scheduledItemType: IType, colName: String, colLabel: String, isRequired: boolean, propertyInfoName: String, defaultValue: String) {
    super(scheduledItemType, propertyInfoName, colName, colLabel, isRequired)
    init(defaultValue)
  }

  private function init(defaultValue : String) {
    _default = defaultValue
  }

  override property get ValueType(): String {
    return "Option"
  }

  function getScheduleOptionValueRange(clause: Clause, scheduledItem: ScheduledItem): List<String> {
    return ValueDependencySupport.Instance.valueRange(clause, this, scheduledItem)
  }

}