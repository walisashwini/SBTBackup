package gw.lob.gl7.rating

uses entity.windowed.GL7SublineCovCostVersionList
uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList
uses gw.rating.worksheet.domain.WorksheetEntry

uses java.util.Date

class GL7SublineCovCostData extends GL7CostData<GL7SublineCovCost> {
  var _coverage : Coverage as readonly SublineCov

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _coverage = clause as Coverage
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(cost : GL7SublineCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _coverage = cost.SublineCoverage
  }

  construct(effDate : Date, expDate : Date, cov : Coverage, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, cov.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _coverage = cov
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(cost : GL7SublineCovCost) {
    super(cost)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7SublineCovCostVersionList).where( \ g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  private function isMyCost(cost : GL7SublineCovCost) : boolean {
    return SublineCov.FixedId == cost.SublineCoverage.FixedId
  }

  override property get WorksheetEntries(): List<WorksheetEntry> {
    return null
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7SublineCovCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("SublineCoverage", SublineCov.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {SublineCov}
    result.addAll(super.KeyValues)
    return result
  }
}