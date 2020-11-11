package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedExclItemExclCostData extends GL7SchedItemClauseCostData<GL7LocSchedExclItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7LocSchedExclItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedExclItemExclCost): EffDated {
    return cost.LocSchedExclItem
  }

  override function getScheduleItemClause(cost: GL7LocSchedExclItemExclCost): EffDated {
    return cost.LocSchedExclItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedExclItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedExclItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedExclItemExclCost#LocSchedExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7LocSchedExclItemExclCost#LocSchedExclItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
