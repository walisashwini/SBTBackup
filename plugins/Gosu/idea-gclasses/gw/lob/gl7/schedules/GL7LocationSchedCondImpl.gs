package gw.lob.gl7.schedules

uses gw.api.productmodel.ClauseSchedulePattern

class GL7LocationSchedCondImpl extends gw.lob.common.sbt.schedules.AbstractScheduleWithDescriptionImpl<entity.GL7LocationSchedCond>{

  construct(delegateOwner : entity.GL7LocationSchedCond) {
    super(delegateOwner)
  }

  override property get ScheduledItems() : ScheduledItem[] {
    return Owner.GL7ScheduledItems
  }

  override function createAndAddScheduledItem() : ScheduledItem {
    var scheduledItem = new GL7LocationSchedCondItem(Owner.Branch)
    createAutoNumber(scheduledItem)
    Owner.addToGL7ScheduledItems(scheduledItem)
    return scheduledItem
  }

  override function removeScheduledItem(item : ScheduledItem) {
    Owner.removeFromGL7ScheduledItems(item as GL7LocationSchedCondItem)
    renumberAutoNumberSequence()
  }

  override property get CurrentAndFutureScheduledItems() : KeyableBean[] {
    var schedItems = Owner.GL7ScheduledItems.toList()

    Owner.Branch.OOSSlices
        .where(\ p ->  p.GL7Line != null)
        .each(\ p ->  {
      var matchingSlicedScheduleCond = p.GL7Line.ConditionsFromCoverable.firstWhere(\ c -> c.FixedId == Owner.FixedId) as GL7LocationSchedCond
      if (matchingSlicedScheduleCond != null) {
        matchingSlicedScheduleCond.GL7ScheduledItems.each(\ s -> {
          if (!schedItems.contains(s)) {
            schedItems.add(s)
          }
        })
      }
    })
    return schedItems.toTypedArray()
  }

}