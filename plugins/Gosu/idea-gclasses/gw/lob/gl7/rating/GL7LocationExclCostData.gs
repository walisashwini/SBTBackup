package gw.lob.gl7.rating

uses entity.windowed.GL7LocationExclCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7LocationExclCostData extends GL7CostData<GL7LocationExclCost> {
  var _exclusion : Exclusion as readonly LocationExcl

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = clause as Exclusion
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7LocationExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _exclusion = cost.LocationExclusion
  }

  construct(effDate : Date, expDate : Date, excl: Exclusion, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, excl.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _exclusion = excl
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7LocationExclCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7LocationExclCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7LocationExclCost) : boolean {
    return LocationExcl.FixedId == cost.LocationExclusion.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7LocationExclCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("LocationExclusion", LocationExcl.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {LocationExcl}
    result.addAll(super.KeyValues)
    return result
  }
}