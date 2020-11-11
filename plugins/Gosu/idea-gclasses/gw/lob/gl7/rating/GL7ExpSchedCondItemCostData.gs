package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCondItemCostData extends GL7SchedItemCostData<GL7ExpSchedCondItemCost> {

  construct(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, coverable, rateCache)
  }

  construct(cost : GL7ExpSchedCondItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCondItemCost): EffDated {
    return cost.ExpSchedCondItem
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCondItemVersionList
    return scheduleItemVL.ScheduleItemCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCondItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCondItemCost#ExpSchedCondItem.PropertyInfo.Name, _scheduledItemID)
  }
}