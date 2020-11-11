package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedCovItemCondCostData extends GL7SchedItemClauseCostData<GL7LocSchedCovItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedCovItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedCovItemCondCost): EffDated {
    return cost.LocSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedCovItemCondCost): EffDated {
    return cost.LocSchedCovItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedCovItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedCovItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedCovItemCondCost#LocSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedCovItemCondCost#LocSchedCovItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
