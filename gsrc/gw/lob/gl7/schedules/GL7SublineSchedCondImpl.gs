package gw.lob.gl7.schedules

uses gw.api.productmodel.ClauseSchedulePattern
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.lob.common.sbt.schedules.AbstractScheduleWithDescriptionImpl

class GL7SublineSchedCondImpl extends AbstractScheduleWithDescriptionImpl<GL7SublineSchedCond> {

  construct(delegateOwner : entity.GL7SublineSchedCond) {
    super(delegateOwner)
  }

  override property get ScheduledItems() : ScheduledItem[] {
    return Owner.GL7ScheduledItems
  }

  override property get MostDescriptivePropertyInfo() : SchedulePropertyInfo {
    switch (typeof Owner) {
      default:
        return super.MostDescriptivePropertyInfo
    }
  }

  override function createAndAddScheduledItem() : ScheduledItem {
    var scheduledItem = new GL7SublineSchedCondItem(Owner.Branch)
    createAutoNumber(scheduledItem)
    Owner.addToGL7ScheduledItems(scheduledItem)

    return scheduledItem
  }

  override function removeScheduledItem(item : ScheduledItem) {
    Owner.removeFromGL7ScheduledItems(item as GL7SublineSchedCondItem)
    renumberAutoNumberSequence()
  }

  override property get CurrentAndFutureScheduledItems() : KeyableBean[] {
    var schedItems = Owner.ScheduledItems.toList()

    Owner.Branch.OOSSlices
      .where(\ p ->  p.GL7Line != null)
      .each(\ p ->  {
        var matchingSlicedScheduleCond = p.GL7Line.ConditionsFromCoverable.firstWhere(\ c -> c.FixedId == Owner.FixedId) as GL7SublineSchedCond
        if (matchingSlicedScheduleCond != null) {
          matchingSlicedScheduleCond.ScheduledItems.each(\ s -> {
            if (!schedItems.contains(s)) {
              schedItems.add(s)
            }
          })
        }
      })

    return schedItems.map(\ item -> item as GL7SublineSchedCondItem).toTypedArray()
  }

}