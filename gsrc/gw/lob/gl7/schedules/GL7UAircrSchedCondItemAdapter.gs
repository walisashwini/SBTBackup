 package gw.lob.gl7.schedules

uses entity.Clause
uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration

class GL7UAircrSchedCondItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7UAircrSchedCondItem as readonly Owner

  construct(item : GL7UAircrSchedCondItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.Schedule
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.Schedule.PolicyLine
  }

  // processed by the coverable generator - made the scheduled item a coverable

  override property get Clause() : Clause {
    return Clauses.single()
  }

  override function getClause(pattern : ClausePattern) : entity.Clause {
    return Clauses?.firstWhere(\clause -> clause.Pattern == pattern)
  }

  override property get Clauses() : entity.Clause[] {
    return CoveragesFromCoverable.where(\cov -> cov.Pattern == ScheduleParent.ScheduledItemMultiPatterns?.first())
  }

  override function hasClause() : boolean {
    return Clause != null
  }

  override function hasClause(pattern : ClausePattern) : boolean {
    return getClause(pattern) != null
  }

  override property get CoveragesFromCoverable() : Coverage[] {
    return _owner.Coverages == null ? {} : _owner.Coverages
  }

  override function addCoverage(clause : Coverage) {
   _owner.addToCoverages(clause as GL7UAircrSchedCondItemCov)
  }

  override function removeCoverage(clause : Coverage) {
    _owner.removeFromCoverages(clause as GL7UAircrSchedCondItemCov)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Branch.GL7Line.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }
}