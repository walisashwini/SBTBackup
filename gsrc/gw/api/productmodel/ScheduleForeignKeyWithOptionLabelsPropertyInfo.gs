package gw.api.productmodel

uses gw.lang.reflect.IType

class ScheduleForeignKeyWithOptionLabelsPropertyInfo<T extends KeyableBean> extends ScheduleForeignKeyPropertyInfo<T> {

  private var _optionGroupLabelMethodExpression: String
  private var _optionLabelMethodExpression: String

  construct(columnName: String, colLabel: String, valueRangeGetter: IValueRangeGetter, isRequired: boolean, optionGroupLabelMethodExpression: String,
            optionLabelMethodExpression: String) {
    super(columnName, colLabel, valueRangeGetter, isRequired, false, -1)
    _optionGroupLabelMethodExpression = optionGroupLabelMethodExpression
    _optionLabelMethodExpression = optionLabelMethodExpression
  }

  construct(scheduledItemType: IType, columnName: String, colLabel: String, valueRangeGetter: IValueRangeGetter, isRequired: boolean,
            optionGroupLabelMethodExpression: String, optionLabelMethodExpression: String) {
    super(scheduledItemType, columnName, colLabel, valueRangeGetter, isRequired, false, -1)
    _optionGroupLabelMethodExpression = optionGroupLabelMethodExpression
    _optionLabelMethodExpression = optionLabelMethodExpression
  }

  override property get ValueType(): String {
    return "ForeignKeyWithOptionLabels"
  }

  public function getOptionGroupLabel(obj: T): String {
    return eval(_optionGroupLabelMethodExpression) as String
  }

  public function getOptionLabel(obj: T): String {
    return eval(_optionLabelMethodExpression) as String
  }
}