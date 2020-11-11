package gw.lob.common.schedules.impl

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.SchedulePolicyLocationPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lang.reflect.IType

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.impl.SchedulePolicyLocationPropertyInfo}
 */
class ProxySchedulePolicyLocationPropertyInfo extends ProxyScheduleForeignKeyPropertyInfo {
  construct(scheduledItemType: IType, colName: String, colLabel: String,
            valRangeGetterClassName: String, isRequired: boolean) {
    super(scheduledItemType, colName, colLabel, valRangeGetterClassName, isRequired)
  }

  reified override function toSchedulePropertyInfo<T extends Schedule & Clause>(owner : T) : SchedulePropertyInfo {
    var valRangeGetter = newValueRangeGetterInstance(owner)    
    return new SchedulePolicyLocationPropertyInfo(ItemType, ColumnName, 
      ColumnLabel, valRangeGetter, Required, false, -1)
  }
}
