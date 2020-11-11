package gw.lob.gl7.rating

uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.Key
uses entity.GL7Cost
uses typekey.Currency

abstract class GL7SchedItemCostData<R extends GL7Cost> extends GL7CostData<R> {
  protected var _scheduledItemID: Key as readonly ScheduledItemID

  construct(
      effDate : Date,
      expDate : Date,
      scheduleItemId : Key,
      scheduleItemCovId : Key,
      c : Currency,
      rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
    _scheduledItemID = scheduleItemId
  }

  construct(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    this(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, coverable.FixedId, null, coverable.PreferredCoverageCurrency, rateCache)
  }

  construct(cost : R, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    var costSlice = cost.getSlice(cost.EffectiveDate) as R
    _scheduledItemID = getScheduleItem(costSlice).FixedId
  }

  function getScheduleItem(cost: R): EffDated {
    return null
  }

  protected function isCostForThisCostData(costSlice: R): boolean {
    return this.ScheduledItemID == getScheduleItem(costSlice).FixedId
  }

  protected override property get KeyValues(): List<Object> {
    return {_scheduledItemID}
  }

  override function toString(): String {
    return "Covered Sched Cov Item : ${_scheduledItemID}"
  }
}