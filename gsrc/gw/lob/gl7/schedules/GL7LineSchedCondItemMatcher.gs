package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7LineSchedCondItemMatcher extends AbstractScheduledItemMatcher<GL7LineSchCondItem> {

  construct(owner : GL7LineSchCondItem) {
    super(owner, "ScheduleCondition")
  }

}