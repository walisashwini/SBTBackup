package gw.lob.common.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.ScheduleForeignKeyWithOptionLabelsPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lang.reflect.IType

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.impl.ScheduleForeignKeyWithOptionLabelsPropertyInfo}
 */
class ProxyScheduleForeignKeyWithOptionLabelsPropertyInfo extends ProxyScheduleForeignKeyPropertyInfo {

  private var _optionGroupLabelMethodExpression: String as readonly OptionGroupLabelMethodExpression
  private var _optionLabelMethodExpression: String as readonly OptionLabelMethodExpression

  construct(colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean,
            optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    super(colName, colLabel, valRangeGetterClassName, isRequired)
    init(optionGroupLabelMethodExpression, optionLabelMethodExpression)
  }

  construct(scheduledItemType: IType, colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean,
            optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    super(scheduledItemType, colName, colLabel, valRangeGetterClassName, isRequired)
    init(optionGroupLabelMethodExpression, optionLabelMethodExpression)
  }

  private function init(optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    _optionGroupLabelMethodExpression = optionGroupLabelMethodExpression
    _optionLabelMethodExpression = optionLabelMethodExpression
  }

  reified override function toSchedulePropertyInfo<T extends Schedule & Clause>(owner: T): SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)
    if (ItemType != null) {
      return new ScheduleForeignKeyWithOptionLabelsPropertyInfo (ItemType, ColumnName, ColumnLabel, valRangeGetter, Required, OptionGroupLabelMethodExpression, OptionLabelMethodExpression)
    }
    return new ScheduleForeignKeyWithOptionLabelsPropertyInfo (ColumnName, ColumnLabel, valRangeGetter, Required, OptionGroupLabelMethodExpression, OptionLabelMethodExpression)
  }
}
