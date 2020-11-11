package gw.lob.common.schedules

uses gw.api.domain.Clause
uses gw.api.domain.Schedule
uses gw.api.productmodel.IValueRangeGetter

/**
 * @deprecated This is for BP backward compatibility. Replaced by {@link gw.lob.common.sbt.schedules.ClauseNamedInsuredValueRangeGetter}
 */
class ClauseNamedInsuredValueRangeGetter implements IValueRangeGetter {
  var _clause: Schedule & Clause
  construct(cov: Schedule & Clause) {
    _clause = cov
  }

  override property get ValueRange(): KeyableBean[] {
    return _clause.PolicyLine.Branch.NamedInsureds
  }
}
