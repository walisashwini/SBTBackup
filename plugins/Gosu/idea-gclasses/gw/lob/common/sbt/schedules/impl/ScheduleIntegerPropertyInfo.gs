package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException
uses java.lang.Integer

public class ScheduleIntegerPropertyInfo extends gw.api.productmodel.ScheduleIntegerPropertyInfo {

  var _propertyInfoName: String as readonly PropertyInfoName
  var _default: Integer as readonly DefaultValue;

  construct (propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, defaultValue : String) {
    super(columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  construct (propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, minimum : Integer, maximum : Integer, defaultValue : String) {
    super(columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  construct(scheduledItemType : IType , propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, defaultValue : String) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName, defaultValue)
  }

  construct(scheduledItemType : IType , propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, minimum : Integer, maximum : Integer, defaultValue : String) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, minimum, maximum, -1)
    init(propertyInfoName, defaultValue)
  }

  private function init(propertyInfoName : String, defaultValue : String) {
    throwIfNull(propertyInfoName, "Name");
    _propertyInfoName = propertyInfoName

    _default = defaultValue == null? null: Integer.valueOf(defaultValue)
  }

  private function throwIfNull(arg : Object, argName : String) {
    if (arg == null) {
      throw new IllegalArgumentException("Argument " + argName + " cannot be null.");
    }
  }

}
