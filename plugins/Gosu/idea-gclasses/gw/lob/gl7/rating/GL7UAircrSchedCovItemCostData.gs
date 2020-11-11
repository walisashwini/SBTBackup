package gw.lob.gl7.rating

uses entity.windowed.GL7UAircrSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UAircrSchedCovItemCostData extends GL7SchedItemCostData<GL7UAircrSchedCovItemCost> {
  construct(dateInterval : DateInterval, item : Coverable, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, item, rateCache)
  }

  construct(cost : GL7UAircrSchedCovItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7UAircrSchedCovItemVersionList
    return scheduleItemVL.Costs
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function getScheduleItem(cost: GL7UAircrSchedCovItemCost): EffDated {
    return cost.UAircrSchedCovItem
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7UAircrSchedCovItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7UAircrSchedCovItemCost#UAircrSchedCovItem.PropertyInfo.Name, _scheduledItemID)
  }
}