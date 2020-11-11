package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCovItemCondCostData extends GL7SchedItemClauseCostData<GL7ExpSchedCovItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedCovItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCovItemCondCost): EffDated {
    return cost.ExpSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedCovItemCondCost): EffDated {
    return cost.ExpSchedCovItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCovItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCovItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCovItemCondCost#ExpSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedCovItemCondCost#ExpSchedCovItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
