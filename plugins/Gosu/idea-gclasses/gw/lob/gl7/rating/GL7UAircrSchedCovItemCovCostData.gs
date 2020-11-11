package gw.lob.gl7.rating

uses entity.windowed.GL7UAircrSchedCovItemCovVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UAircrSchedCovItemCovCostData extends GL7SchedItemClauseCostData<GL7UAircrSchedCovItemCovCost> {
  construct(dateInterval : DateInterval, clause : Clause, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7UAircrSchedCovItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7UAircrSchedCovItemCovCost): EffDated {
    return cost.UAircrSchedCovItem
  }

  override function getScheduleItemClause(cost: GL7UAircrSchedCovItemCovCost): EffDated {
    return cost.UAircrSchedCovItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7UAircrSchedCovItemCovVersionList
    return scheduleItemVL.Costs
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7UAircrSchedCovItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7UAircrSchedCovItemCovCost#UAircrSchedCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7UAircrSchedCovItemCovCost#UAircrSchedCovItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}