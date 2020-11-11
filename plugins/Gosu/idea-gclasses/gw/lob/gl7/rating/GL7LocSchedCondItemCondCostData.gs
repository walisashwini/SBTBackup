package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedCondItemCondCostData extends GL7SchedItemClauseCostData<GL7LocSchedCondItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedCondItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedCondItemCondCost): EffDated {
    return cost.LocSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedCondItemCondCost): EffDated {
    return cost.LocSchedCondItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedCondItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedCondItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedCondItemCondCost#LocSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedCondItemCondCost#LocSchedCondItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
