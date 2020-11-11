package gw.lob.common.sbt.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.IValueRangeGetter
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lang.reflect.IType
uses gw.lob.common.sbt.schedules.ClausePolicyLocationValueRangeGetter

class SchedulePolicyLocationPropertyInfo extends ScheduleForeignKeyPropertyInfo {
  construct(scheduledItemType: IType, propertyInfoName: String, colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean) {
    super(scheduledItemType, propertyInfoName, colName, colLabel, valRangeGetterClassName, isRequired)
  }

  reified override function toSchedulePropertyInfo<T extends Schedule & Clause>(owner: T): SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)
    return new gw.api.productmodel.SchedulePolicyLocationPropertyInfo(ItemType, ColumnName, ColumnLabel, valRangeGetter, Required, false, -1)
  }

  reified override protected function newValueRangeGetterInstance<T extends Schedule & Clause>(owner: T): IValueRangeGetter {
    if (ValueRangeGetterClassName == null) {
      return new ClausePolicyLocationValueRangeGetter(owner)
    } else {
      return super.newValueRangeGetterInstance(owner)
    }
  }
}