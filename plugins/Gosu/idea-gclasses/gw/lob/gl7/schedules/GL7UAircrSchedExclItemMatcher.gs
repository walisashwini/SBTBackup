package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7UAircrSchedExclItemMatcher extends AbstractScheduledItemMatcher<GL7UAircrSchedExclItem> {

  construct(owner : GL7UAircrSchedExclItem) {
    super(owner, "Schedule")
  }
}