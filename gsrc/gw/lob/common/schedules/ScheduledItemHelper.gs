package gw.lob.common.schedules

uses gw.api.domain.Schedule

interface ScheduledItemHelper {

  function addScheduledItem(schedule: Schedule): ScheduledItem

  function removeScheduledItem(schedule: Schedule, scheduledItem: ScheduledItem)
}