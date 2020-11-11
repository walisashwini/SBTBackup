package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCovItemCovCostData extends GL7SchedItemClauseCostData<GL7ExpSchedCovItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedCovItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCovItemCovCost): EffDated {
    return cost.ExpSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedCovItemCovCost): EffDated {
    return cost.ExpSchedCovItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCovItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCovItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCovItemCovCost#ExpSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedCovItemCovCost#ExpSchedCovItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
