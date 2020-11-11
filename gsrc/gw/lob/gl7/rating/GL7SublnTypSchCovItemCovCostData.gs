package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeSchCovItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnTypSchCovItemCovCostData extends GL7SchedItemClauseCostData<GL7SublnTypSchCovItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnTypSchCovItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnTypSchCovItemCovCost): EffDated {
    return cost.SublnTypSchCovItem
  }

  override function getScheduleItemClause(cost: GL7SublnTypSchCovItemCovCost): EffDated {
    return cost.SublnTypSchCovItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineTypeSchCovItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnTypSchCovItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnTypSchCovItemCovCost#SublnTypSchCovItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnTypSchCovItemCovCost#SublnTypSchCovItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
