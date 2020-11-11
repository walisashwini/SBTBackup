package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedCovItemExclCostData extends GL7SchedItemClauseCostData<GL7LocSchedCovItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedCovItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedCovItemExclCost): EffDated {
    return cost.LocSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedCovItemExclCost): EffDated {
    return cost.LocSchedCovItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedCovItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedCovItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedCovItemExclCost#LocSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedCovItemExclCost#LocSchedCovItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
