package gw.lob.gl7.schedules

uses gw.api.productmodel.ClausePattern
uses gw.api.domain.Schedule
uses gw.lob.common.AbstractScheduledItemAdapter
uses gw.policy.PolicyLineConfiguration
uses entity.GL7ExpSchedCondItemCov
uses entity.PolicyLine
uses entity.GL7ExpSchedCondItemExcl
uses entity.GL7ExposureSchedCondItem
uses entity.GL7ExpSchedCondItemCond
uses typekey.Currency

class GL7ExposureSchedCondItemAdapter extends AbstractScheduledItemAdapter {

  var _owner : GL7ExposureSchedCondItem as readonly Owner

  construct(item : GL7ExposureSchedCondItem) {
    _owner = item
  }

  override property get ScheduleParent() : Schedule {
    return _owner.ScheduleCondition ?: _owner.BasedOn.ScheduleCondition
  }

  override property get PolicyLine() : PolicyLine {
    return _owner.ScheduleCondition.GL7Exposure.GL7Location.SublineType.Line
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
    _owner.addToCoverages(coverage as GL7ExpSchedCondItemCov)
  }

  override function removeCoverage(coverage : Coverage) {
    _owner.removeFromCoverages(coverage as GL7ExpSchedCondItemCov)
  }

  override property get ConditionsFromCoverable() : PolicyCondition[] {
    return _owner.Conditions
  }

  override function addCondition(cond: PolicyCondition) {
    _owner.addToConditions(cond as GL7ExpSchedCondItemCond)
  }

  override function removeCondition(cond: PolicyCondition) {
    _owner.removeFromConditions(cond as GL7ExpSchedCondItemCond)
  }

  override property get ExclusionsFromCoverable(): Exclusion[] {
    return _owner.Exclusions
  }

  override function addExclusion(exclusion : Exclusion) {
    _owner.addToExclusions(exclusion as GL7ExpSchedCondItemExcl)
  }

  override function removeExclusion(exclusion : Exclusion) {
    _owner.removeFromExclusions(exclusion as GL7ExpSchedCondItemExcl)
  }

  override property get DefaultCurrency() : Currency {
    return _owner.ScheduleCondition.GL7Exposure.PreferredCoverageCurrency
  }

  override property get AllowedCurrencies() : List<Currency> {
    return PolicyLineConfiguration.getByLine(InstalledPolicyLine.TC_GL7).AllowedCurrencies
  }

}