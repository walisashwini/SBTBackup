package gw.lob.gl7.rating

uses entity.windowed.GL7SublineSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnSchedCovItemExclCostData extends GL7SchedItemClauseCostData<GL7SublnSchedCovItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnSchedCovItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnSchedCovItemExclCost): EffDated {
    return cost.SublnSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7SublnSchedCovItemExclCost): EffDated {
    return cost.SublnSchedCovItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineSchedCovItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnSchedCovItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnSchedCovItemExclCost#SublnSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnSchedCovItemExclCost#SublnSchedCovItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
