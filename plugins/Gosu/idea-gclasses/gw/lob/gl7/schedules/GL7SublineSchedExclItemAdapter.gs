package gw.lob.gl7.schedules

uses gw.api.domain.Clause
uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.GL7SublineSchedExclItem
uses typekey.Currency
uses entity.PolicyLine

class GL7SublineSchedExclItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7SublineSchedExclItem as readonly Owner

  construct(item : GL7SublineSchedExclItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleExclusion ?: _owner.BasedOn.ScheduleExclusion
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleExclusion.PolicyLine
  }

  override function hasClause() : boolean {
    return false
  }

  override function hasClause(pattern : ClausePattern) : boolean {
    return false
  }

  override property get Clause() : entity.Clause {
    return null
  }

  override property get Clauses() : entity.Clause[] {
    return new entity.Clause[0]
  }

  override function getClause(pattern : ClausePattern) : entity.Clause {
    return null
  }

  override property get DefaultCurrency() : Currency {
    return _owner.Branch.GL7Line.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}