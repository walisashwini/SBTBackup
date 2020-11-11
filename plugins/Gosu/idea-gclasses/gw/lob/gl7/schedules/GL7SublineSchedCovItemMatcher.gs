package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7SublineSchedCovItemMatcher extends AbstractScheduledItemMatcher<GL7SublineSchedCovItem> {

  construct(owner : GL7SublineSchedCovItem) {
    super(owner, "ScheduleCoverage")
  }

}