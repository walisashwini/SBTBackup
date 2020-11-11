package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.Integer

class SchedulePercentPropertyInfo extends AbstractSchedulePropertyInfo<Integer> {

  var _default: Integer as readonly DefaultValue;

  construct(scheduledItemType: IType, propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean, defaultValue : String) {
    super(scheduledItemType, propertyInfoName, columnName, columnLabel, isRequired)
    init(defaultValue)
  }

  construct(propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean, defaultValue : String) {
    super(propertyInfoName, columnName, columnLabel, isRequired)
    init(defaultValue)
  }

  private function init(defaultValue : String) {
    _default = defaultValue == null? null : Integer.valueOf(defaultValue)
  }

  override property get ValueType(): String {
    return "Percent"
  }

}
