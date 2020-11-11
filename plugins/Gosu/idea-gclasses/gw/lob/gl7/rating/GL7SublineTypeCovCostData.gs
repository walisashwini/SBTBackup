package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeCovCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7SublineTypeCovCostData extends GL7CostData<GL7SublineTypeCovCost> {
  var _coverage : Coverage as readonly SublineTypeCov

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _coverage = clause as Coverage
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7SublineTypeCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _coverage = cost.SublineTypeCoverage
  }

  construct(effDate : Date, expDate : Date, cov : Coverage, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, cov.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _coverage = cov
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7SublineTypeCovCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7SublineTypeCovCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7SublineTypeCovCost) : boolean {
    return SublineTypeCov.FixedId == cost.SublineTypeCoverage.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7SublineTypeCovCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("SublineTypeCoverage", SublineTypeCov.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {SublineTypeCov}
    result.addAll(super.KeyValues)
    return result
  }
}