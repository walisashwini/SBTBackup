package gw.lob.gl7.rating

uses entity.windowed.GL7SublineSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnSchedExclItemCondCostData extends GL7SchedItemClauseCostData<GL7SublnSchedExclItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnSchedExclItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnSchedExclItemCondCost): EffDated {
    return cost.SublnSchedExclItem
  }

  override function getScheduleItemClause(cost: GL7SublnSchedExclItemCondCost): EffDated {
    return cost.SublnSchedExclItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineSchedExclItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnSchedExclItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnSchedExclItemCondCost#SublnSchedExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnSchedExclItemCondCost#SublnSchedExclItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
