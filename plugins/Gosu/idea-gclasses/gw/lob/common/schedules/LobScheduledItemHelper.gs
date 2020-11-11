package gw.lob.common.schedules

uses gw.api.domain.Schedule

class LobScheduledItemHelper implements ScheduledItemHelper {
  override function addScheduledItem(schedule: Schedule): ScheduledItem {
    return schedule.createAndAddScheduledItem()
  }

  override function removeScheduledItem(schedule : Schedule, scheduledItem : ScheduledItem) {
    schedule.removeScheduledItem(scheduledItem)
  }
}