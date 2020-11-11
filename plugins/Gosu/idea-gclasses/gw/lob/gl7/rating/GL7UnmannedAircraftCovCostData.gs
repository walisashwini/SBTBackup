package gw.lob.gl7.rating

uses entity.windowed.GL7UnmannedAircraftCovCostVersionList
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UnmannedAircraftCovCostData extends GL7CostData<GL7UnmannedAircraftCovCost> {
  var _coverage : Coverage as readonly UnmannedAircraftCov

  construct(dateInterval : DateInterval, clause : Clause, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
    _coverage = clause as Coverage
  }

  construct(cost : GL7UnmannedAircraftCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _coverage = cost.UnmannedAircraftCov
  }

  private function isMyCost(cost : GL7UnmannedAircraftCovCost) : boolean {
    return UnmannedAircraftCov.FixedId == cost.UnmannedAircraftCov.FixedId
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7UnmannedAircraftCovCostVersionList).where( \g -> isMyCost(g.AllVersions.first()) ).toList()
  }

  protected override property get KeyValues() : List<Object> {
    var result : List<Object> = {UnmannedAircraftCov}
    result.addAll(super.KeyValues)
    return result
  }

  override function setSpecificFieldsOnCost(line : GL7Line, costEntity: GL7UnmannedAircraftCovCost) {
    super.setSpecificFieldsOnCost(line, costEntity)
    costEntity.setFieldValue("UnmannedAircraftCov", UnmannedAircraftCov.FixedId)
  }
}