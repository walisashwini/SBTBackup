package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7SublineTypeSchedCondItemMatcher extends AbstractScheduledItemMatcher<GL7SublineTypeSchCondItem> {

  construct(owner : GL7SublineTypeSchCondItem) {
    super(owner, "ScheduleCondition")
  }

}