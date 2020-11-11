package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException

class ScheduleAdditionalInterestPropertyInfo extends gw.api.productmodel.ScheduleAdditionalInterestPropertyInfo {

  var _propertyInfoName: String as readonly PropertyInfoName

  construct(propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean) {
    super(columnName, colLabel, isRequired)
    init(propertyInfoName)
  }

  construct(scheduledItemType : IType, propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean) {
    super(scheduledItemType, columnName, colLabel, isRequired)
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
