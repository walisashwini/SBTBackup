package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCondItemCovCostData extends GL7SchedItemClauseCostData<GL7ExpSchedCondItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedCondItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCondItemCovCost): EffDated {
    return cost.ExpSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedCondItemCovCost): EffDated {
    return cost.ExpSchedCondItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCondItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCondItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCondItemCovCost#ExpSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedCondItemCovCost#ExpSchedCondItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
