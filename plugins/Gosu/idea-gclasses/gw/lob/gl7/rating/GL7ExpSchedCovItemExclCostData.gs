package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCovItemExclCostData extends GL7SchedItemClauseCostData<GL7ExpSchedCovItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedCovItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCovItemExclCost): EffDated {
    return cost.ExpSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedCovItemExclCost): EffDated {
    return cost.ExpSchedCovItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCovItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCovItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCovItemExclCost#ExpSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedCovItemExclCost#ExpSchedCovItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
