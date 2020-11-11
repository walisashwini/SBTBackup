package gw.lob.common.sbt.schedules

uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.ClauseSchedulePattern
uses gw.api.productmodel.ScheduleAutoNumberPropertyInfo
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lang.reflect.IPropertyInfo
uses gw.lob.common.AbstractScheduleImpl
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.FieldDependency
uses gw.lob.common.sbt.schedules.impl.ScheduleConfigXMLInfoProvider
uses gw.lob.common.service.sbt.ServiceLocator
uses java.util.ArrayList
uses java.util.List

abstract class AbstractScheduleWithDescriptionImpl<T extends ScheduleAutoNumberSequence & Schedule & gw.api.domain.Clause>
    extends AbstractScheduleImpl<T> {
  construct(delegateOwner : T) {
    super(delegateOwner)
  }

  override property get PropertyInfos() : SchedulePropertyInfo[] {
    return ServiceLocator.get(ScheduleConfigSource).getPropertyInfos<T>(Owner)
  }

  protected function initializeScheduledItemIfCoverable(scheduledItem :ScheduledItem) {
    if (scheduledItem typeis Coverable) {
      initializeScheduledItem(scheduledItem)
    }
  }

  override protected function initializeScheduledItem(scheduledItem : Coverable & ScheduledItem) {
    var defaultValue: Object
    var isAvailable: boolean

    scheduledItem.createCoveragesConditionsAndExclusions()
    scheduledItem.ScheduleParent.PropertyInfos.each( \ propInfo -> {
      isAvailable = LobPropertyService.Instance.isScheduledItemPropertyAvailable(scheduledItem, propInfo)
      if (not(propInfo typeis ScheduleAutoNumberPropertyInfo) and isAvailable) {
        (scheduledItem as Object)[propInfo.getPropertyInfo().getColumnName()] = ScheduleItemPropertyUtil.getDefaultValue(propInfo)
      }
    })
    if (scheduledItem typeis FieldDependency) {
      scheduledItem.updateDependentFields()
    }
  }

  override property get MostDescriptivePropertyInfo() : SchedulePropertyInfo {
    return null
  }

  override function getScheduledItemDescription(scheduledItem : ScheduledItem) : String {
    var configSource = ServiceLocator.get(ScheduleConfigSource)
    var identityColumns = configSource.getScheduledItemKeyColumns(scheduledItem)
    var columnNames : List<String>
    var columnValues : List<String>
    if (identityColumns.Empty) {
      columnNames = { PropertyInfos.singleWhere( \ propertyInfo -> propertyInfo.PropertyInfo.Name == ScheduleNumberPropInfo.Name).Label }
      columnValues = { scheduledItem.ScheduleNumber.toString() }
    } else {
      columnNames = identityColumns.map( \ prop -> ScheduleConfigXMLInfoProvider.getLabel(prop))
      columnValues = configSource.getScheduledItemKeyDisplayNames(scheduledItem).toList()
    }

    var namesWithValues = new ArrayList<String>()
    columnNames?.eachWithIndex( \ name, index -> namesWithValues.add("${name} - ${columnValues[index] ?: ""}"))

    var description = namesWithValues.join(" | ")
    return description.NotBlank ? description : (scheduledItem as EffDated).TypeIDString
  }

  override property get ScheduleNumberPropInfo() : IPropertyInfo {
    return ScheduledItem#ScheduleNumber.PropertyInfo
  }

  override property get ScheduledItemMultiPatterns() : ClausePattern[] {
    return ServiceLocator.get(ScheduleConfigSource).getClauseMultiPatterns(Owner).toTypedArray()
  }

  override property get SchedulePattern() : ClauseSchedulePattern {
    return Owner.SchedulePattern
  }
}
