package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7UAircrSchedCovItemMatcher extends AbstractScheduledItemMatcher<GL7UAircrSchedCovItem> {

  construct(owner : GL7UAircrSchedCovItem) {
    super(owner, "Schedule")
  }
}