package gw.lob.common.sbt.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.IValueRangeGetter

uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lob.common.sbt.schedules.ClauseNamedInsuredValueRangeGetter

class ScheduleNamedInsuredPropertyInfo extends ScheduleForeignKeyPropertyInfo {
  construct(propertyInfoName: String, colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean) {
    super(propertyInfoName, colName, colLabel, valRangeGetterClassName, isRequired)
  }

  reified override function toSchedulePropertyInfo<T extends Schedule & Clause>(owner: T): SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)
    return new gw.api.productmodel.ScheduleNamedInsuredPropertyInfo(ColumnName, ColumnLabel, valRangeGetter, Required, false, -1)
  }

  reified override protected function newValueRangeGetterInstance<T extends Schedule & Clause>(owner: T): IValueRangeGetter {
    if (ValueRangeGetterClassName == null) {
      return new ClauseNamedInsuredValueRangeGetter(owner)
    } else {
      return super.newValueRangeGetterInstance(owner)
    }
  }
}