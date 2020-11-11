package gw.lob.common.schedules

uses entity.PolicyContactRole
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lob.common.displayable.Displayable
uses gw.lob.common.displayable.SchedulePropertyInfoDisplayableFactoryV2

interface ScheduledItemColumnHelper {
  function intitializeContactDisplayable(displayableFactory : SchedulePropertyInfoDisplayableFactoryV2, clause : gw.api.domain.Clause, scheduledItem : ScheduledItem, schedulePropertyInfo : SchedulePropertyInfo) : Displayable
  function getScheduleItemPolicyContactRole(scheduledItem : ScheduledItem) : PolicyContactRole
  function getContactDisplayableValue(displayable : Displayable) : PolicyContactRole
  function setPolicyContactProperty(scheduleItem : ScheduledItem, name: String, value: PolicyContactDetail)
  function getPolicyContactProperty(scheduleItem : ScheduledItem) : PolicyContactDetail
}