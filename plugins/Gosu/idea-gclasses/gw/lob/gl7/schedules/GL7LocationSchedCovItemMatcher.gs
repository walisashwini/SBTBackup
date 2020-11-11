package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7LocationSchedCovItemMatcher extends AbstractScheduledItemMatcher<GL7LocationSchedCovItem> {

  construct(owner : GL7LocationSchedCovItem) {
    super(owner, "ScheduleCoverage")
  }

}