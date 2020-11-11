package gw.lob.common.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.ScheduleNamedInsuredPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.impl.ScheduleNamedInsuredPropertyInfo}
 */
class ProxyScheduleNamedInsuredPropertyInfo extends ProxyScheduleForeignKeyPropertyInfo {
  construct(colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean) {
    super(colName, colLabel, valRangeGetterClassName, isRequired)
  }

  reified override function toSchedulePropertyInfo<T extends Schedule & Clause>(owner : T) : SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)    
    return new ScheduleNamedInsuredPropertyInfo(ColumnName, 
      ColumnLabel, valRangeGetter, Required, false, -1)
  }
}
