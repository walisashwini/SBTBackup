package gw.lob.gl7.rating

uses entity.windowed.GL7UnmannedAircraftCondCostVersionList
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UnmannedAircraftCondCostData extends GL7CostData<GL7UnmannedAircraftCondCost> {
  var _condition : PolicyCondition as readonly UnmannedAircraftCond

  construct(dateInterval : DateInterval, clause : Clause, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7UnmannedAircraftCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _condition = cost.UnmannedAircraftCond
  }

  private function isMyCost(cost : GL7UnmannedAircraftCondCost) : boolean {
    return UnmannedAircraftCond.FixedId == cost.UnmannedAircraftCond.FixedId
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var gl7CostVLs = line.VersionList.GL7Costs
    return gl7CostVLs.whereTypeIs(GL7UnmannedAircraftCondCostVersionList).where( \g -> isMyCost(g.AllVersions.first()) ).toList()
  }
}