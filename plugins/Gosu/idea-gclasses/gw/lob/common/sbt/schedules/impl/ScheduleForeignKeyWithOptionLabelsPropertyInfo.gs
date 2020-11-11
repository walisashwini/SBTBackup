package gw.lob.common.sbt.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lang.reflect.IType

class ScheduleForeignKeyWithOptionLabelsPropertyInfo extends ScheduleForeignKeyPropertyInfo {

  private var _optionGroupLabelMethodExpression: String as readonly OptionGroupLabelMethodExpression
  private var _optionLabelMethodExpression: String as readonly OptionLabelMethodExpression

  construct(propertyInfoName: String, colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean,
            optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    super(propertyInfoName, colName, colLabel, valRangeGetterClassName, isRequired)
    init(optionGroupLabelMethodExpression, optionLabelMethodExpression)
  }

  construct(scheduledItemType: IType, propertyInfoName: String, colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean,
            optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    super(scheduledItemType, propertyInfoName, colName, colLabel, valRangeGetterClassName, isRequired)
    init(optionGroupLabelMethodExpression, optionLabelMethodExpression)
  }

  private function init(optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    _optionGroupLabelMethodExpression = optionGroupLabelMethodExpression
    _optionLabelMethodExpression = optionLabelMethodExpression
  }

  reified override function toSchedulePropertyInfo<T extends Schedule & Clause>(owner: T): SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)
    if (ItemType != null) {
      return new gw.api.productmodel.ScheduleForeignKeyWithOptionLabelsPropertyInfo(ItemType, ColumnName, ColumnLabel, valRangeGetter, Required, OptionGroupLabelMethodExpression, OptionLabelMethodExpression)
    }
    return new gw.api.productmodel.ScheduleForeignKeyWithOptionLabelsPropertyInfo(ColumnName, ColumnLabel, valRangeGetter, Required, OptionGroupLabelMethodExpression, OptionLabelMethodExpression)
  }
}
