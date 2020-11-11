package gw.lob.gl7.rating

uses entity.windowed.GL7UAircrSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UAircrSchedExclItemCostData extends GL7SchedItemCostData<GL7UAircrSchedExclItemCost> {
  construct(dateInterval : DateInterval, item : Coverable, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, item, rateCache)
  }

  construct(cost : GL7UAircrSchedExclItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7UAircrSchedExclItemVersionList
    return scheduleItemVL.Costs
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function getScheduleItem(cost: GL7UAircrSchedExclItemCost): EffDated {
    return cost.UAircrSchedExclItem
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7UAircrSchedExclItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7UAircrSchedExclItemCost#UAircrSchedExclItem.PropertyInfo.Name, _scheduledItemID)
  }
}