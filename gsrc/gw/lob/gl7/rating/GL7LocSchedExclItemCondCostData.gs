package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedExclItemCondCostData extends GL7SchedItemClauseCostData<GL7LocSchedExclItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedExclItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedExclItemCondCost): EffDated {
    return cost.LocSchedExclItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedExclItemCondCost): EffDated {
    return cost.LocSchedExclItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedExclItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedExclItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedExclItemCondCost#LocSchedExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedExclItemCondCost#LocSchedExclItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
