package gw.lob.gl7.rating

uses entity.windowed.GL7LocationSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7LocSchedCovItemCostData extends GL7SchedItemCostData<GL7LocSchedCovItemCost> {

  construct(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, coverable, rateCache)
  }

  construct(cost : GL7LocSchedCovItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7LocSchedCovItemCost): EffDated {
    return cost.LocSchedCovItem
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7LocationSchedCovItemVersionList
    return scheduleItemVL.ScheduleItemCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7LocSchedCovItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7LocSchedCovItemCost#LocSchedCovItem.PropertyInfo.Name, _scheduledItemID)
  }
}