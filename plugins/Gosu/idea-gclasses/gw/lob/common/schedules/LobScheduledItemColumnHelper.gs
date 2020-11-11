package gw.lob.common.schedules

uses gw.api.domain.Clause
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.lob.common.displayable.Displayable
uses gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2
uses gw.lob.common.sbt.schedules.ScheduleConfigSource
uses gw.lob.common.service.sbt.ServiceLocator

class LobScheduledItemColumnHelper implements ScheduledItemColumnHelper {

  protected property get ConfigSrc() : ScheduleConfigSource {
    return ServiceLocator.get(ScheduleConfigSource)
  }

  protected function getScheduledItemValueProvider<T>(name : String, scheduleItem : ScheduledItem) : SchedulePropertyValueProvider<T> {
    return ServiceLocator.get(ScheduleConfigSource).getScheduledItemValueProvider<T>(name, scheduleItem)
  }

  override function intitializeContactDisplayable(displayableFactory : SchedulePropertyInfoDisplayableFactoryV2, clause : Clause, scheduledItem : ScheduledItem, schedulePropertyInfo : SchedulePropertyInfo<Object>) : Displayable<Object> {
    return null
  }

  override function getScheduleItemPolicyContactRole(scheduledItem : ScheduledItem) : PolicyContactRole {
    return null
  }

  override function getContactDisplayableValue(displayable : Displayable<Object>) : PolicyContactRole {
    return null
  }

  override function setPolicyContactProperty(scheduleItem : ScheduledItem, name : String, value : PolicyContactDetail) {

  }

  override function getPolicyContactProperty(scheduleItem : ScheduledItem) : PolicyContactDetail {
    return null
  }
}