package gw.lob.common.sbt.schedules

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.IValueRangeGetter

class ClauseNamedInsuredValueRangeGetter implements IValueRangeGetter {
  var _clause: Schedule & Clause
  construct(cov: Schedule & Clause) {
    _clause = cov
  }

  override property get ValueRange(): KeyableBean[] {
    return _clause.PolicyLine.Branch.NamedInsureds
  }
}