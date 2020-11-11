package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7LocationSchedExclItemMatcher extends AbstractScheduledItemMatcher<GL7LocationSchedExclItem> {

  construct(owner : GL7LocationSchedExclItem) {
    super(owner, "ScheduleExclusion")
  }

}