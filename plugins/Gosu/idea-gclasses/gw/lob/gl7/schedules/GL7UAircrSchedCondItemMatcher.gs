package gw.lob.gl7.schedules

uses gw.lob.common.sbt.schedules.AbstractScheduledItemMatcher

class GL7UAircrSchedCondItemMatcher extends AbstractScheduledItemMatcher<GL7UAircrSchedCondItem> {

  construct(owner : GL7UAircrSchedCondItem) {
    super(owner, "Schedule")
  }
}