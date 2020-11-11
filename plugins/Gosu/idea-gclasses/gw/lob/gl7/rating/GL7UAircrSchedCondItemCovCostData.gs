package gw.lob.gl7.rating

uses entity.windowed.GL7UAircrSchedCondItemCovVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UAircrSchedCondItemCovCostData extends GL7SchedItemClauseCostData<GL7UAircrSchedCondItemCovCost> {
  construct(dateInterval : DateInterval, clause : Clause, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7UAircrSchedCondItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7UAircrSchedCondItemCovCost): EffDated {
    return cost.UAircrSchedCondItem
  }

  override function getScheduleItemClause(cost: GL7UAircrSchedCondItemCovCost): EffDated {
    return cost.UAircrSchedCondItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7UAircrSchedCondItemCovVersionList
    return scheduleItemVL.Costs
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7UAircrSchedCondItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7UAircrSchedCondItemCovCost#UAircrSchedCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7UAircrSchedCondItemCovCost#UAircrSchedCondItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }

}