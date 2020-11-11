package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7LineSchedExclItemMatcher extends AbstractScheduledItemMatcher<GL7LineSchExclItem> {

  construct(owner : GL7LineSchExclItem) {
    super(owner, "ScheduleExclusion")
  }

}