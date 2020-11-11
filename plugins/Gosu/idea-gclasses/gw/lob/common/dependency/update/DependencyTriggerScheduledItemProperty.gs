package gw.lob.common.dependency.update

uses gw.api.productmodel.ScheduleAutoNumberPropertyInfo
uses gw.lob.common.LobPropertyService
uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.productmodel.sync.JobWizardHelperDisplay
uses gw.lob.common.sbt.schedules.ScheduleItemPropertyUtil

class DependencyTriggerScheduledItemProperty implements DependencyTrigger {

  var _scheduledItem: ScheduledItem
  var _propertyName: String
  var _isChanged : boolean
  var _dependencyInfo : DependencyInfo

  construct(scheduledItem: ScheduledItem, propertyName: String, dependencyInfo : DependencyInfo) {
    _scheduledItem = scheduledItem
    _propertyName = propertyName
    _dependencyInfo = dependencyInfo
  }

  override function update(updatedMap : Map<String, Boolean> = null, helper: JobWizardHelperDisplay = null) {
    var originalValueMap = buildOriginalScheduleItemPropValue()
    doUpdate(helper)
    for (key in originalValueMap.Keys) {
      if (_scheduledItem[key] != originalValueMap.get(key)) {
        _isChanged = true
        break
      }
    }
  }

  override function doUpdate(helper: JobWizardHelperDisplay) {
    var isAvailable: boolean

    _scheduledItem.ScheduleParent.PropertyInfos.each( \ propInfo -> {
      if (_propertyName.equals(ScheduleItemPropertyUtil.getPropertyInfoName(propInfo)) and not(propInfo typeis ScheduleAutoNumberPropertyInfo)) {
        isAvailable = LobPropertyService.Instance.isScheduledItemPropertyAvailable(_scheduledItem, propInfo)
        if (!isAvailable) {
          _scheduledItem[propInfo.PropertyInfo.ColumnName] = ScheduleItemPropertyUtil.getDefaultValue(propInfo)
        }
      }
    })
  }

  internal function buildOriginalScheduleItemPropValue() : Map<String, Object>{
    var valueMap = new HashMap<String, Object>()
    _scheduledItem.ScheduleParent.PropertyInfos.each( \ propInfo -> {
      valueMap.put(propInfo.PropertyInfo.ColumnName, _scheduledItem[propInfo.PropertyInfo.ColumnName])
    })
    return valueMap
  }

  override function getAncestor() : Coverable {
    return _scheduledItem as Coverable
  }

  override function getDependencyInfo() : DependencyInfo {
    return _dependencyInfo
  }

  override function isChanged() : boolean {
    return _isChanged
  }
}