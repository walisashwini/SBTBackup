package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7SublineTypeSchedExclItemMatcher extends AbstractScheduledItemMatcher<GL7SublineTypeSchExclItem> {

  construct(owner : GL7SublineTypeSchExclItem) {
    super(owner, "ScheduleExclusion")
  }

}