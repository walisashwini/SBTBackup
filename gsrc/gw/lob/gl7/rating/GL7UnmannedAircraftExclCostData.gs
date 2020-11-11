package gw.lob.gl7.rating

uses entity.windowed.GL7UnmannedAircraftExclCostVersionList
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UnmannedAircraftExclCostData extends GL7CostData<GL7UnmannedAircraftExclCost> {
  var _exclusion : Exclusion as readonly UnmannedAircraftExcl

  construct(dateInterval : DateInterval, clause : Clause, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7UnmannedAircraftExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _exclusion = cost.UnmannedAircraftExcl
  }

  private function isMyCost(cost : GL7UnmannedAircraftExclCost) : boolean {
    return UnmannedAircraftExcl.FixedId == cost.UnmannedAircraftExcl.FixedId
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7UnmannedAircraftExclCostVersionList).where( \g -> isMyCost(g.AllVersions.first()) ).toList()
  }
}