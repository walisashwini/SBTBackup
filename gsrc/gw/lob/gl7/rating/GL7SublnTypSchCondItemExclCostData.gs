package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeSchCondItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnTypSchCondItemExclCostData extends GL7SchedItemClauseCostData<GL7SublnTypSchCondItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnTypSchCondItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnTypSchCondItemExclCost): EffDated {
    return cost.SublnTypSchCondItem
  }

  override function getScheduleItemClause(cost: GL7SublnTypSchCondItemExclCost): EffDated {
    return cost.SublnTypSchCondItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineTypeSchCondItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnTypSchCondItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnTypSchCondItemExclCost#SublnTypSchCondItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnTypSchCondItemExclCost#SublnTypSchCondItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
