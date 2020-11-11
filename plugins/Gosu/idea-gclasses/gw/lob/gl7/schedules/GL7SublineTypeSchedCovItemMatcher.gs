package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7SublineTypeSchedCovItemMatcher extends AbstractScheduledItemMatcher<GL7SublineTypeSchCovItem> {

  construct(owner : GL7SublineTypeSchCovItem) {
    super(owner, "ScheduleCoverage")
  }

}