package gw.lob.gl7.schedules

uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.GL7LineSchExclItem
uses typekey.Currency
uses entity.PolicyLine

class GL7LineSchedExclItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7LineSchExclItem as readonly Owner

  construct(item : GL7LineSchExclItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleExclusion ?: _owner.BasedOn.ScheduleExclusion
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleExclusion.GL7Line
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
    return false
  }

  override function hasClause(pattern : ClausePattern) : boolean {
    return false
  }

  override property get CoveragesFromCoverable() : Coverage[] {
    return {} //_owner.Coverages
  }

  override function addCoverage(coverage : Coverage) {
    //_owner.addToCoverages(coverage as GL7LineSchExclItmCov)
  }

  override function removeCoverage(coverage : Coverage) {
    //_owner.removeFromCoverages(coverage as GL7LineSchExclItmCov)
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return {} //_owner.Conditions
  }

  override function addCondition(cond : PolicyCondition) {
    //_owner.addToConditions(cond as GL7LineSchExclItmCond)
  }

  override function removeCondition(cond : PolicyCondition) {
    //_owner.removeFromConditions(cond as GL7LineSchExclItmCond)
  }

  override property get ExclusionsFromCoverable() : Exclusion[] {
    return {} //_owner.Exclusions
  }

  override function addExclusion(exclusion : Exclusion) {
    //_owner.addToExclusions(exclusion as GL7LineSchExclItmExcl)
  }

  override function removeExclusion(exclusion : Exclusion) {
    //_owner.removeFromExclusions(exclusion as GL7LineSchExclItmExcl)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.ScheduleExclusion.GL7Line.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}