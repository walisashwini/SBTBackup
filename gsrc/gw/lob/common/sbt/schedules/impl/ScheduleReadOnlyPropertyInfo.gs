package gw.lob.common.sbt.schedules.impl

uses gw.api.productmodel.ReadOnlyScheduleValueProvider
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.lang.reflect.IType

public class ScheduleReadOnlyPropertyInfo extends ScheduleStringPropertyInfo {

  var _methodExpression : String as MethodExpression

  /**
   * Constructs a new column info with the passed arguments.
   *
   * @param columnName Column name
   * @param colLabel   Text to display for the column label in LVs
   * @param isRequired Whether or not the input cell should be required
   * @param methodExpression The expression for the property
   * @param defaultValue The default value for the column
   *
   * @throws IllegalArgumentException if columnName or colLabel is null or no property named <code>columnName</code>
   *                                  exists on <code>ScheduledItem</code>
   */
  construct (propertInfoName : String, columnName : String, colLabel : String, isRequired : boolean, methodExpression : String, defaultValue : String) {
    super(propertInfoName, columnName, colLabel, isRequired, defaultValue)
    _methodExpression = methodExpression
  }

  /**
   * Constructs a new column info with the passed arguments.
   * This can used to construct property info for columns on LOB specific scheduled item
   *
   * @param scheduledItemType   Type of scheduled item
   * @param columnName          Column name
   * @param colLabel            Text to display for the column label in LVs
   * @param isRequired          Whether or not the input cell should be required
   * @param methodExpression The expression for the property
   * @param defaultValue The default value for the column
   *
   * @throws IllegalArgumentException if columnName or colLabel is null or no property named <code>columnName</code>
   *                                  exists on <code>ScheduledItem</code>
   */
  construct(scheduledItemType : IType , propertyInfoName : String, columnName : String, colLabel : String, isRequired : boolean, methodExpression : String, defaultValue : String) {
    super(scheduledItemType, propertyInfoName, columnName, colLabel, isRequired, defaultValue)
    _methodExpression = methodExpression
  }

  override function createValueProvider(item : ScheduledItem) : SchedulePropertyValueProvider<String> {
    return new ReadOnlyScheduleValueProvider(item, this.getPropertyInfo(), _methodExpression)
  }
}
