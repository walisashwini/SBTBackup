package gw.lob.gl7.schedules

uses gw.api.domain.Clause
uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.PolicyLine
uses entity.GL7SublineSchedCovItem
uses typekey.Currency

class GL7SublineSchedCovItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7SublineSchedCovItem as readonly Owner

  construct(item : GL7SublineSchedCovItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleCoverage ?: _owner.BasedOn.ScheduleCoverage
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleCoverage.GL7Subline.PolicyLine
  }

  override property get Clause() : entity.Clause {
    return Clauses.first()
  }

  override property get Clauses() : entity.Clause[] {
    return CoveragesFromCoverable.where(\cov -> cov.Pattern == ScheduleParent.ScheduledItemMultiPatterns?.first())
  }

  override function getClause(pattern : ClausePattern) : entity.Clause {
    return Clauses?.firstWhere(\clause -> clause.Pattern == pattern)
  }

  override function hasClause() : boolean {
    return Clause != null
  }

  override function hasClause(pattern : ClausePattern) : boolean {
    return getClause(pattern) != null
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Branch.GL7Line.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}