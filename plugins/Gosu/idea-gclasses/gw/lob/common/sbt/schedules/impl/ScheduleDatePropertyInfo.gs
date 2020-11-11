package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException

class ScheduleDatePropertyInfo extends gw.api.productmodel.ScheduleDatePropertyInfo {

  var _propertyInfoName: String as readonly PropertyInfoName

  construct(scheduledItemType: IType, propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean) {
    super(scheduledItemType, columnName, columnLabel, isRequired, false, -1)
    init(propertyInfoName)
  }

  construct(propertyInfoName : String, columnName: String, columnLabel: String, isRequired: boolean) {
    super(columnName, columnLabel, isRequired, false, -1)
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
