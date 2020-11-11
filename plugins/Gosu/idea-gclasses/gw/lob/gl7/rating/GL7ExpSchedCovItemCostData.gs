package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedCovItemCostData extends GL7SchedItemCostData<GL7ExpSchedCovItemCost> {

  construct(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, coverable, rateCache)
  }

  construct(cost : GL7ExpSchedCovItemCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedCovItemCost): EffDated {
    return cost.ExpSchedCovItem
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedCovItemVersionList
    return scheduleItemVL.ScheduleItemCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedCovItemCost) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedCovItemCost#ExpSchedCovItem.PropertyInfo.Name, _scheduledItemID)
  }
}