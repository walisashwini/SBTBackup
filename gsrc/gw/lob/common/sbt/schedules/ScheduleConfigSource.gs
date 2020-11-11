package gw.lob.common.sbt.schedules

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.entity.IEntityPropertyInfo
uses gw.entity.ILinkPropertyInfo
uses gw.lang.reflect.IType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoVersionType
uses java.lang.Iterable
uses java.util.List

interface ScheduleConfigSource {
  reified function getPropertyInfos<T extends Schedule & Clause>(owner: T): SchedulePropertyInfo[]

  function getScheduledItemValueProvider<V>(name: String, item: ScheduledItem): SchedulePropertyValueProvider<V>

  function getScheduledItemParentColumns(owner: Schedule & Clause, itemType: IType): Iterable<ILinkPropertyInfo>

  function getScheduledItemIdentityColumns(owner : Schedule & Clause, itemType : IType) : Iterable<IEntityPropertyInfo>

  function getClauseMultiPatterns(owner : Clause): List<ClausePattern>

  function getScheduledItemKeyColumns(item : ScheduledItem) : List<PropertyInfoVersionType>

  function getScheduledItemKeyDisplayNames(item : ScheduledItem) : Iterable<String>

  function getSchedulePropertyInfoByName(name : String, schedule : Schedule & Clause) : SchedulePropertyInfo

  function getAmendedClause(schedule : Schedule & Clause, itemPattern : ClausePattern): ClausePattern

  function getWhenClause(schedule : Schedule & Clause, itemPattern : ClausePattern): ClausePattern

  function getPropertyNameByColumnName<T extends Schedule & Clause>(owner: T, columnName: String): String

  function isHideFromSummary(schedule : Schedule & Clause, itemPattern : ClausePattern): boolean
}
