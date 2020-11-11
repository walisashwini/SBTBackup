package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7ExposureSchedExclItemMatcher extends AbstractScheduledItemMatcher<GL7ExposureSchedExclItem> {

  construct(owner : GL7ExposureSchedExclItem) {
    super(owner, "ScheduleExclusion")
  }

}