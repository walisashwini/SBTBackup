package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException

class ScheduleBooleanPropertyInfo extends gw.api.productmodel.ScheduleBooleanPropertyInfo {

  var _propertyInfoName: String as readonly PropertyInfoName
  var _default: Boolean as readonly DefaultValue;

  construct(scheduledItemType: IType, propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean, defaultValue : String) {
    super(scheduledItemType, columnName, columnLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  construct(propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean, defaultValue : String) {
    super(columnName, columnLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  private function init(propertyInfoName : String, defaultValue : String) {
    throwIfNull(propertyInfoName, "Name");
    _propertyInfoName = propertyInfoName
    _default = defaultValue == null? null : Boolean.valueOf(defaultValue)
  }

  private function throwIfNull(arg : Object, argName : String) {
    if (arg == null) {
      throw new IllegalArgumentException("Argument " + argName + " cannot be null.");
    }
  }

}
