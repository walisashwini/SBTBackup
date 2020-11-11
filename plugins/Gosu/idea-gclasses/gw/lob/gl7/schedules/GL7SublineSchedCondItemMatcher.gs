package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7SublineSchedCondItemMatcher extends AbstractScheduledItemMatcher<GL7SublineSchedCondItem> {

  construct(owner : GL7SublineSchedCondItem) {
    super(owner, "ScheduleCondition")
  }

}