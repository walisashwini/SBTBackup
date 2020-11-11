package gw.lob.gl7.schedules

uses entity.GL7SublineTypeSchCondItem
uses entity.GL7SublnTypSchCondItmCond
uses entity.GL7SublnTypSchCondItmCov
uses entity.GL7SublnTypSchCondItmExcl
uses entity.PolicyLine
uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses typekey.Currency

class GL7SublineTypeSchedCondItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7SublineTypeSchCondItem as readonly Owner

  construct(item : GL7SublineTypeSchCondItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleCondition ?: _owner.BasedOn.ScheduleCondition
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleCondition.GL7SublineType.Line
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

  override property get CoveragesFromCoverable() : Coverage[] {
    return _owner.Coverages
  }

  override function addCoverage(coverage : Coverage) {
    _owner.addToCoverages(coverage as GL7SublnTypSchCondItmCov)
  }

  override function removeCoverage(coverage : Coverage) {
    _owner.removeFromCoverages(coverage as GL7SublnTypSchCondItmCov)
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(cond: PolicyCondition) {
    _owner.addToConditions(cond as GL7SublnTypSchCondItmCond)
  }

  override function removeCondition(cond: PolicyCondition) {
    _owner.removeFromConditions(cond as GL7SublnTypSchCondItmCond)
  }

  override property get ExclusionsFromCoverable(): Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion(exclusion : Exclusion) {
    _owner.addToExclusions(exclusion as GL7SublnTypSchCondItmExcl)
  }

  override function removeExclusion(exclusion : Exclusion) {
    _owner.removeFromExclusions(exclusion as GL7SublnTypSchCondItmExcl)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.ScheduleCondition.GL7SublineType.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}