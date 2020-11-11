package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedCovItemCovCostData extends GL7SchedItemClauseCostData<GL7LocSchedCovItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedCovItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedCovItemCovCost): EffDated {
    return cost.LocSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedCovItemCovCost): EffDated {
    return cost.LocSchedCovItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedCovItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedCovItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedCovItemCovCost#LocSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedCovItemCovCost#LocSchedCovItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
