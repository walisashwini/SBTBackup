package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedCondItemCovCostData extends GL7SchedItemClauseCostData<GL7LocSchedCondItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedCondItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedCondItemCovCost): EffDated {
    return cost.LocSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedCondItemCovCost): EffDated {
    return cost.LocSchedCondItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedCondItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedCondItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedCondItemCovCost#LocSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedCondItemCovCost#LocSchedCondItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
