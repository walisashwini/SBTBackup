package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7SublineSchedExclItemMatcher extends AbstractScheduledItemMatcher<GL7SublineSchedExclItem> {

  construct(owner : GL7SublineSchedExclItem) {
    super(owner, "ScheduleExclusion")
  }

}