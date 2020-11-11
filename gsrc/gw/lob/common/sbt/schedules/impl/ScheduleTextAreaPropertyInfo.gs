package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

class ScheduleTextAreaPropertyInfo extends AbstractSchedulePropertyInfo{

  var _default: String as readonly DefaultValue;

  construct(scheduledItemType: IType, propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean, defaultValue : String) {
    super(scheduledItemType, propertyInfoName, columnName, columnLabel, isRequired)
    init(defaultValue)
  }

  construct(propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean, defaultValue : String) {
    super(propertyInfoName, columnName, columnLabel, isRequired)
    init(defaultValue)
  }

  private function init(defaultValue : String) {
    _default = defaultValue
  }

  override property get ValueType(): String {
    return "TextArea"
  }

}
