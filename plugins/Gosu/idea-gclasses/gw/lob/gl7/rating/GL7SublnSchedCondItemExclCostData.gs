package gw.lob.gl7.rating

uses entity.windowed.GL7SublineSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnSchedCondItemExclCostData extends GL7SchedItemClauseCostData<GL7SublnSchedCondItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnSchedCondItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnSchedCondItemExclCost): EffDated {
    return cost.SublnSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7SublnSchedCondItemExclCost): EffDated {
    return cost.SublnSchedCondItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineSchedCondItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnSchedCondItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnSchedCondItemExclCost#SublnSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnSchedCondItemExclCost#SublnSchedCondItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
