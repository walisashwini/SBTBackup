package gw.lob.gl7.rating

uses entity.windowed.GL7ExposureSchedExclItemVersionList
uses gw.api.effdate.EffDatedUtil
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.effdate.EffDatedVersionList

class GL7ExpSchedExclItemExclCostData extends GL7SchedItemClauseCostData<GL7ExpSchedExclItemExclCost> {

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval, clause, rateCache)
  }

  construct(cost : GL7ExpSchedExclItemExclCost, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function getScheduleItem(cost: GL7ExpSchedExclItemExclCost): EffDated {
    return cost.ExpSchedExclItem
  }

  override function getScheduleItemClause(cost: GL7ExpSchedExclItemExclCost): EffDated {
    return cost.ExpSchedExclItemExcl
  }

  override function getVersionedCosts(line: GL7Line): List<EffDatedVersionList> {
    var scheduleItemVL = EffDatedUtil.createVersionList(line.Branch, _scheduledItemID) as GL7ExposureSchedExclItemVersionList
    return scheduleItemVL.ExclusionCosts
        .where(\costVL -> { return isCostForThisCostData(costVL.AllVersions.first()) })
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost: GL7ExpSchedExclItemExclCost ) : void  {
    super.setSpecificFieldsOnCost(line, cost)
    cost.setFieldValue(GL7ExpSchedExclItemExclCost#ExpSchedExclItem.PropertyInfo.Name, _scheduledItemID)
    cost.setFieldValue(GL7ExpSchedExclItemExclCost#ExpSchedExclItemExcl.PropertyInfo.Name, _scheduledItemClauseID)
  }
}
