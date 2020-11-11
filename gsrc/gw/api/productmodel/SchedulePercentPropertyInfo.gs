package gw.api.productmodel

uses gw.lang.reflect.IType

uses java.lang.Integer

class SchedulePercentPropertyInfo extends AbstractSchedulePropertyInfo<Integer> {
  construct(scheduledItemType: IType, columnName: String, columnLabel: String, isRequired: boolean) {
    super(scheduledItemType, columnName, columnLabel, isRequired, false, -1)
  }

  construct(columnName: String, columnLabel: String, isRequired: boolean) {
    super(columnName, columnLabel, isRequired, false, -1)
  }

  override property get ValueType(): String {
    return "Percent"
  }
}