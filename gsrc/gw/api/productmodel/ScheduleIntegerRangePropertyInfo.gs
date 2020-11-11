package gw.api.productmodel

uses java.lang.Integer
uses gw.lang.reflect.IType
uses gw.api.locale.DisplayKey

class ScheduleIntegerRangePropertyInfo extends ScheduleIntegerPropertyInfo {

  var _minimum : Integer as Minimum
  var _maximum : Integer as Maximum

  /**
   * Constructs a new integer column info with min and max information.
   *
   * @param columnName Column name
   * @param colLabel   Text to display for the column label in LVs
   * @param isRequired Whether or not the input cell should be required
   * @param minimum lowest value for this integer property
   * @param maximum highest value for this integer property
   *
   * @throws java.lang.IllegalArgumentException if columnName or colLabel is null or no property named <code>columnName</code>
   *                                  exists on <code>ScheduledItem</code>
   */
  construct(columnName : String, colLabel : String, isRequired : boolean, minimum : Integer, maximum : Integer) {
    super(columnName, colLabel, isRequired, false, -1)
    _minimum = minimum
    _maximum = maximum
  }

  /**
   * Constructs a new integer column info with min and max information.
   * This can used to construct property info for columns on LOB specific scheduled item
   *
   * @param scheduledItemType   Type of scheduled item
   * @param columnName          Column name
   * @param colLabel            Text to display for the column label in LVs
   * @param isRequired          Whether or not the input cell should be required
   * @param minimum lowest value for this integer property
   * @param maximum highest value for this integer property
   *
   * @throws java.lang.IllegalArgumentException if columnName or colLabel is null or no property named <code>columnName</code>
   *                                  exists on <code>ScheduledItem</code>
   */
  construct(scheduledItemType : IType, columnName : String, colLabel : String, isRequired : boolean, minimum : Integer, maximum : Integer) {
    super(scheduledItemType, columnName, colLabel, isRequired, false, -1)
    _minimum = minimum
    _maximum = maximum
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