package gw.lob.gl7.rating

uses entity.windowed.GL7UAircrSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7UAircrSchedCondItemCostData extends GL7SchedItemCostData<GL7UAircrSchedCondItemCost> {
  construct(dateInterval : DateInterval, item : Coverable, rateCache : PolicyPeriodFXRateCache) {
    super(dateInterval, item, rateCache)
  }

  construct(cost : GL7UAircrSchedCondItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7UAircrSchedCondItemVersionList
    return scheduleItemVL.Costs
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function getScheduleItem(cost: GL7UAircrSchedCondItemCost): EffDated {
    return cost.UAircrSchedCondItem
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7UAircrSchedCondItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7UAircrSchedCondItemCost#UAircrSchedCondItem.PropertyInfo.Name, _scheduledItemID)
  }
}