package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType

uses java.lang.IllegalArgumentException
uses java.math.BigDecimal

class ScheduleDecimalPropertyInfo extends gw.api.productmodel.ScheduleDecimalPropertyInfo {

  var _propertyInfoName: String as readonly PropertyInfoName
  var _default: BigDecimal as readonly DefaultValue;

  construct(propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, minimum : BigDecimal, maximum : BigDecimal, defaultValue : String) {
    super(columnName, colLabel, isRequired, minimum, maximum)
    init(propertyInfoName, defaultValue)
  }

  construct(scheduledItemType : IType, propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, minimum : BigDecimal, maximum : BigDecimal, defaultValue : String) {
    super(scheduledItemType, columnName, colLabel, isRequired, minimum, maximum)
    init(propertyInfoName, defaultValue)
  }

  private function init(propertyInfoName : String, defaultValue : String) {
    throwIfNull(propertyInfoName, "Name");
    _propertyInfoName = propertyInfoName
    _default = defaultValue == null? null: defaultValue.toBigDecimal()
  }

  private function throwIfNull(arg : Object, argName : String) {
    if (arg == null) {
      throw new IllegalArgumentException("Argument " + argName + " cannot be null.");
    }
  }
}
