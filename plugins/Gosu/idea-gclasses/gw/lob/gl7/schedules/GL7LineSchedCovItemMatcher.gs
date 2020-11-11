package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7LineSchedCovItemMatcher extends AbstractScheduledItemMatcher<GL7LineSchCovItem> {

  construct(owner : GL7LineSchCovItem) {
    super(owner, "ScheduleCoverage")
  }

}