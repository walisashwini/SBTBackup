package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeSchCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnTypSchCondItemCovCostData extends GL7SchedItemClauseCostData<GL7SublnTypSchCondItemCovCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnTypSchCondItemCovCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnTypSchCondItemCovCost): EffDated {
    return cost.SublnTypSchCondItem
  }

  override function getScheduleItemClause(cost: GL7SublnTypSchCondItemCovCost): EffDated {
    return cost.SublnTypSchCondItemCov
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineTypeSchCondItemVersionList
    return scheduleItemVL.CoverageCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnTypSchCondItemCovCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnTypSchCondItemCovCost#SublnTypSchCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnTypSchCondItemCovCost#SublnTypSchCondItemCov.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
