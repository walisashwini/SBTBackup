package gw.lob.hop.schedule

uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration

@Export
class HOPLineScheduleCondItemCoverableAdapter extends AbstractScheduledItemAdapter {
  var _owner: HOPLineScheduleCondItem as readonly Owner

  construct(item: HOPLineScheduleCondItem) {
    _owner = item
  }

  override property get ScheduleParent(): Schedule {
    return _owner.Schedule
  }

  override property get PolicyLine(): PolicyLine {
    return _owner.Schedule.HOPLine
  }

  override property get ConditionsFromCoverable(): PolicyCondition[] {
    return _owner.ScheduledItemClause == null ? {} : {_owner.ScheduledItemClause}
  }

  override function addCondition(cond: PolicyCondition) {
    _owner.ScheduledItemClause = cond as HOPLineSchCondItemCond
  }

  override function removeCondition(cond: PolicyCondition) {
    // For HOP we currently only support one clause on ScheduledItem, so remove will remove the only clause available.
    if (hasClause()) {
      _owner.ScheduledItemClause.remove()
    }
  }

  override property get Clause(): Clause {
    var result = _owner.ScheduledItemClause
    return result
  }

  override function hasClause(): boolean {
    return (_owner.ScheduledItemClause != null)
  }

  override property get DefaultCurrency(): Currency {
    return _owner.Schedule.HOPLine.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies(): List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_HOP).AllowedCurrencies
  }

  override function hasClause(pattern: ClausePattern): boolean {
    return (getClause(pattern) != null)
  }

  override property get Clauses(): Clause[] {
    return _owner.ScheduledItemClause == null ? {} : {_owner.ScheduledItemClause}
  }

  override function getClause(pattern: ClausePattern): Clause {
    return Clauses?.firstWhere( \ clause -> clause.Pattern == pattern)
  }

  override property get AssociatedCoveragePartTypes() : CoveragePartType[] {
    return _owner.Schedule.getOwningCoverable().getAssociatedCoveragePartTypes()
  }
}
