package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7ExposureSchedCovItemMatcher extends AbstractScheduledItemMatcher<GL7ExposureSchedCovItem> {

  construct(owner : GL7ExposureSchedCovItem) {
    super(owner, "ScheduleCoverage")
  }

}