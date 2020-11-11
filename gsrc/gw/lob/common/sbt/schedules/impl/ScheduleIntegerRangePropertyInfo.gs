package gw.lob.common.sbt.schedules.impl

uses gw.lang.reflect.IType
uses java.lang.Integer
uses gw.api.locale.DisplayKey

class ScheduleIntegerRangePropertyInfo extends ScheduleIntegerPropertyInfo {

  construct(propertyInfoName: String, columnName: String, colLabel: String, isRequired: boolean, minimum: Integer, maximum: Integer, defaultValue: String) {
    super(propertyInfoName, columnName, colLabel, isRequired, minimum, maximum, defaultValue)
  }

  construct(scheduledItemType: IType, propertyInfoName: String, columnName: String, colLabel: String, isRequired: boolean, minimum: Integer, maximum: Integer, defaultValue: String) {
    super(scheduledItemType, propertyInfoName, columnName, colLabel, isRequired, minimum, maximum, defaultValue)
  }

  override property get ValueType() : String {
    return "IntegerRange"
  }

  /**
   * Validates the given value.
   * @return String - if the given value is within the range allowed returns null, otherwise an error message
   */
  override function validate(value : Integer) : String {
    if (Minimum != null && value < Minimum) {
      return DisplayKey.get("Web.Policy.Schedule.ScheduledItem.Validation.IntegerPropertyLessThanMinimum", value, Minimum)
    }
    if (Maximum != null && value > Maximum) {
      return DisplayKey.get("Web.Policy.Schedule.ScheduledItem.Validation.IntegerPropertyGreaterThanMaximum", value, Maximum)
    }
    return null
  }
}
