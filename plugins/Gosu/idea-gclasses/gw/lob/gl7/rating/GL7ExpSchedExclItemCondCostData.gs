package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedExclItemCondCostData extends GL7SchedItemClauseCostData<GL7ExpSchedExclItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedExclItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedExclItemCondCost): EffDated {
    return cost.ExpSchedExclItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedExclItemCondCost): EffDated {
    return cost.ExpSchedExclItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedExclItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedExclItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedExclItemCondCost#ExpSchedExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedExclItemCondCost#ExpSchedExclItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
