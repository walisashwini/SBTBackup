package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCondItemCondCostData extends GL7SchedItemClauseCostData<GL7ExpSchedCondItemCondCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedCondItemCondCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCondItemCondCost): EffDated {
    return cost.ExpSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedCondItemCondCost): EffDated {
    return cost.ExpSchedCondItemCond
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCondItemVersionList
    return scheduleItemVL.ConditionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCondItemCondCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCondItemCondCost#ExpSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedCondItemCondCost#ExpSchedCondItemCond.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
