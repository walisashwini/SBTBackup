package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedExclItemCostData extends GL7SchedItemCostData<GL7ExpSchedExclItemCost> {

  construct(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, coverable, rateCache)
  }

  construct(cost : GL7ExpSchedExclItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedExclItemCost): EffDated {
    return cost.ExpSchedExclItem
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedExclItemVersionList
    return scheduleItemVL.ScheduleItemCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedExclItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedExclItemCost#ExpSchedExclItem.PropertyInfo.Name, _scheduledItemID)
  }
}