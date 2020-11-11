package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException

public abstract class AbstractSchedulePropertyInfo<T> extends gw.api.productmodel.AbstractSchedulePropertyInfo<T> {

  var _propertyInfoName: String as readonly PropertyInfoName

  construct (propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean) {
    super(columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName)
  }

  construct(scheduledItemType : IType , propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, -1)
    init(propertyInfoName)
  }

  private function init(propertyInfoName : String) {
    throwIfNull(propertyInfoName, "Name");
    _propertyInfoName = propertyInfoName
  }

  private function throwIfNull(arg : Object, argName : String) {
    if (arg == null) {
      throw new IllegalArgumentException("Argument " + argName + " cannot be null.");
    }
  }
}
