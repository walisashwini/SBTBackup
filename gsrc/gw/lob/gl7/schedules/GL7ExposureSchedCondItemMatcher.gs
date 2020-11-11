package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7ExposureSchedCondItemMatcher extends AbstractScheduledItemMatcher<GL7ExposureSchedCondItem> {

  construct(owner : GL7ExposureSchedCondItem) {
    super(owner, "ScheduleCondition")
  }

}