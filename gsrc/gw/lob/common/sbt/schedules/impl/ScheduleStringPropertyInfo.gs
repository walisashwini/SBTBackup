package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException

class ScheduleStringPropertyInfo extends gw.api.productmodel.ScheduleStringPropertyInfo{

  var _propertyInfoName: String as readonly PropertyInfoName
  var _default: String as readonly DefaultValue;

  construct (propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, defaultValue : String) {
    super(columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  construct(scheduledItemType : IType , propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, defaultValue : String) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  private function init(propertyInfoName : String, defaultValue : String) {
    throwIfNull(propertyInfoName, "Name");
    _propertyInfoName = propertyInfoName
    _default = defaultValue
  }

  private function throwIfNull(arg : Object, argName : String) {
    if (arg == null) {
      throw new IllegalArgumentException("Argument " + argName + " cannot be null.");
    }
  }
}
