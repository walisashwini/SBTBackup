package gw.lob.gl7.rating

uses entity.windowed.GL7SublineSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnSchedCondItemCovCostData extends GL7SchedItemClauseCostData<GL7SublnSchedCondItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnSchedCondItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnSchedCondItemCovCost): EffDated {
    return cost.SublnSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7SublnSchedCondItemCovCost): EffDated {
    return cost.SublnSchedCondItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineSchedCondItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnSchedCondItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnSchedCondItemCovCost#SublnSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnSchedCondItemCovCost#SublnSchedCondItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
