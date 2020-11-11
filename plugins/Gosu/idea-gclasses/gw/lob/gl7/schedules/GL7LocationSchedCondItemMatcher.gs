package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7LocationSchedCondItemMatcher extends AbstractScheduledItemMatcher<GL7LocationSchedCondItem> {

  construct(owner : GL7LocationSchedCondItem) {
    super(owner, "ScheduleCondition")
  }

}