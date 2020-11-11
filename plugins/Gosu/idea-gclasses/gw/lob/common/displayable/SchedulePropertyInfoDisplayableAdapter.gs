package gw.lob.common.displayable

uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.ClausePattern
uses java.util.List

interface SchedulePropertyInfoDisplayableAdapter {

  function isMatch(pattern : ClausePattern) : boolean

  reified function isVisible<T>(scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo<T>) : boolean
  reified function isEditable<T>(scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo<T>) : boolean
  reified function getValueRange<T>(scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo<T>) : List<T>
  reified function getValidValue<T>(scheduledItem : ScheduledItem, propertyInfo : SchedulePropertyInfo<T>, value : T)  : T
}