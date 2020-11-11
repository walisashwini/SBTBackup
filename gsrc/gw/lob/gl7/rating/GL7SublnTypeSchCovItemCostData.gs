package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeSchCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnTypeSchCovItemCostData extends GL7SchedItemCostData<GL7SublnTypSchCovItemCost> {

  construct(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, coverable, rateCache)
  }

  construct(cost : GL7SublnTypSchCovItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnTypSchCovItemCost): EffDated {
    return cost.SublnTypSchCovItem
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineTypeSchCovItemVersionList
    return scheduleItemVL.ScheduleItemCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnTypSchCovItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnTypSchCovItemCost#SublnTypSchCovItem.PropertyInfo.Name, _scheduledItemID)
  }
}