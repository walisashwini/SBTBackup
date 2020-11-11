package gw.lob.gl7.rating

uses entity.GL7Cost
uses entity.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.Key
uses typekey.Currency

abstract class GL7SchedItemClauseCostData<R extends GL7Cost> extends GL7CostData<R> {
  protected var _scheduledItemID: Key as readonly ScheduledItemID
  protected var _scheduledItemClauseID: Key as readonly ScheduledItemClauseID

  construct(
      effDate : Date,
      expDate : Date,
      scheduleItemId : Key,
      scheduleItemCovId : Key,
      c : Currency,
      rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
    _scheduledItemID = scheduleItemId
    _scheduledItemClauseID = scheduleItemCovId
  }

  construct(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    this(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.FixedId, clause.FixedId, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
  }

  construct(cost : R, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    var costSlice = cost.getSlice(cost.EffectiveDate) as R
    _scheduledItemID = getScheduleItem(costSlice).FixedId
    _scheduledItemClauseID = getScheduleItemClause(costSlice).FixedId
  }

  function getScheduleItem(cost: R): EffDated {
    return null
  }

  function getScheduleItemClause(cost: R): EffDated {
    return null
  }

  protected function isCostForThisCostData(costSlice: R): boolean {
    return this.ScheduledItemID == getScheduleItem(costSlice).FixedId and
           this.ScheduledItemClauseID == getScheduleItemClause(costSlice).FixedId
  }

  protected override property get KeyValues(): List<Object> {
    return {_scheduledItemID, _scheduledItemClauseID}
  }

  override function toString(): String {
    return "Covered Sched Cov Item : ${_scheduledItemID} Item Coverage : ${_scheduledItemClauseID}"
  }
}