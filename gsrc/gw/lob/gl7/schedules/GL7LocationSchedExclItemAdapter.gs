package gw.lob.gl7.schedules

uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.GL7LocSchedExclItemExcl
uses entity.GL7LocSchedExclItemCov
uses entity.PolicyLine
uses entity.GL7LocSchedExclItemCond
uses entity.GL7LocationSchedExclItem
uses typekey.Currency

class GL7LocationSchedExclItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7LocationSchedExclItem as readonly Owner

  construct(item : GL7LocationSchedExclItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleExclusion ?: _owner.BasedOn.ScheduleExclusion
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleExclusion.GL7Location.SublineType.Line
  }

  override property get Clause() : entity.Clause {
    return Clauses.first()
  }

  override property get Clauses() : entity.Clause[] {
    return ExclusionsFromCoverable.where(\cov -> cov.Pattern == ScheduleParent.ScheduledItemMultiPatterns?.first())
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

  override property get CoveragesFromCoverable() : Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage(coverage : Coverage) {
    _owner.addToCoverages(coverage as GL7LocSchedExclItemCov)
  }

  override function removeCoverage(coverage : Coverage) {
    _owner.removeFromCoverages(coverage as GL7LocSchedExclItemCov)
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(cond: PolicyCondition) {
    _owner.addToConditions(cond as GL7LocSchedExclItemCond)
  }

  override function removeCondition(cond: PolicyCondition) {
    _owner.removeFromConditions(cond as GL7LocSchedExclItemCond)
  }

  override property get ExclusionsFromCoverable(): Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion(exclusion : Exclusion) {
    _owner.addToExclusions(exclusion as GL7LocSchedExclItemExcl)
  }

  override function removeExclusion(exclusion : Exclusion) {
    _owner.removeFromExclusions(exclusion as GL7LocSchedExclItemExcl)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.ScheduleExclusion.GL7Location.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}