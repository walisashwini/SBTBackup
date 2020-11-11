package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduleWithDescriptionImpl

class GL7UAircrSchedCovImpl extends AbstractScheduleWithDescriptionImpl<GL7UAircrSchedCov> {

  construct(delegateOwner : GL7UAircrSchedCov) {
    super(delegateOwner)
  }

  override property get ScheduledItems() : ScheduledItem[] {
    return Owner.ScheduledItems
  }

  override function createAndAddScheduledItem() : ScheduledItem {
    var scheduledItem = new GL7UAircrSchedCovItem(Owner.Branch)
    createAutoNumber(scheduledItem)
    Owner.addToScheduledItems(scheduledItem)
    initializeScheduledItemIfCoverable(scheduledItem)
    return scheduledItem
  }

  override function removeScheduledItem(item : ScheduledItem) {
    Owner.removeFromScheduledItems(item as GL7UAircrSchedCovItem)
    renumberAutoNumberSequence()
  }

  override property get CurrentAndFutureScheduledItems() : KeyableBean[] {
    var schedItems = Owner.ScheduledItems.toList()

    Owner.Branch.OOSSlices
      .where(\ period -> period.GL7Line != null)
      .each(\ period -> {
        var matchingSlicedScheduleCov = period.GL7Line.CoveragesFromCoverable.firstWhere(\ c -> c.FixedId == Owner.FixedId) as GL7UAircrSchedCov
        if (matchingSlicedScheduleCov != null) {
          matchingSlicedScheduleCov.ScheduledItems.each(\ s -> {
            if (!schedItems.contains(s)) {
              schedItems.add(s)
            }
          })
        }
      })
    return schedItems.toTypedArray()
  }
}