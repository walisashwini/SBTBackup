package gw.lob.common.sbt.schedules

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.IValueRangeGetter

/**
 * Default implementation for the PolicyLocation value range
 */
class ClausePolicyLocationValueRangeGetter implements IValueRangeGetter {
  var _clause: Schedule & Clause
  construct(clause: Clause & Schedule) {
    _clause = clause
  }

  override property get ValueRange(): KeyableBean[] {
    return _clause.PolicyLine.Branch.PolicyLocations
  }
}