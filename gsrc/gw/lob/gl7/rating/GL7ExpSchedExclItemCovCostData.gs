package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedExclItemCovCostData extends GL7SchedItemClauseCostData<GL7ExpSchedExclItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedExclItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedExclItemCovCost): EffDated {
    return cost.ExpSchedExclItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedExclItemCovCost): EffDated {
    return cost.ExpSchedExclItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedExclItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedExclItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedExclItemCovCost#ExpSchedExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedExclItemCovCost#ExpSchedExclItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
