package gw.lob.gl7.schedules

uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses typekey.Currency
uses entity.PolicyLine
uses entity.GL7SublineSchedCondItem

class GL7SublineSchedCondItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7SublineSchedCondItem as readonly Owner

  construct(item : GL7SublineSchedCondItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleCondition ?: _owner.BasedOn.ScheduleCondition
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleCondition.GL7Subline.PolicyLine
  }

  override property get Clause() : entity.Clause {
    return Clauses.first()
  }

  override property get Clauses() : entity.Clause[] {
    return ConditionsFromCoverable.where(\cov -> cov.Pattern == ScheduleParent.ScheduledItemMultiPatterns?.first())
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