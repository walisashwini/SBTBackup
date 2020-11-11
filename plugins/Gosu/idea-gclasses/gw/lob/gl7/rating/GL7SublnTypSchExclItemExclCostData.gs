package gw.lob.gl7.rating

uses entity.windowed.GL7SublineTypeSchExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7SublnTypSchExclItemExclCostData extends GL7SchedItemClauseCostData<GL7SublnTypSchExclItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7SublnTypSchExclItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7SublnTypSchExclItemExclCost): EffDated {
    return cost.SublnTypSchExclItem
  }

  override function getScheduleItemClause(cost: GL7SublnTypSchExclItemExclCost): EffDated {
    return cost.SublnTypSchExclItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7SublineTypeSchExclItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7SublnTypSchExclItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7SublnTypSchExclItemExclCost#SublnTypSchExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7SublnTypSchExclItemExclCost#SublnTypSchExclItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
