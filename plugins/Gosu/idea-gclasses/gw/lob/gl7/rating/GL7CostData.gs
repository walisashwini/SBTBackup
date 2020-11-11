package gw.lob.gl7.rating

uses gw.api.domain.Clause
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.util.BigDecimalUtil
uses gw.rating.CostData
uses gw.rating.CostDataWithOverrideSupport

uses java.math.BigDecimal
uses java.math.RoundingMode
uses java.util.Date

abstract class GL7CostData<R extends GL7Cost> extends CostDataWithOverrideSupport<R, GL7Line> {

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
  }

  construct(effDate : Date, expDate : Date) {
    super(effDate, expDate)
  }

  construct(effDate : Date, expDate : Date, c : Currency, rateCache : PolicyPeriodFXRateCache) {
    super(effDate, expDate, c, rateCache)
  }

  construct(c : R) {
    super(c)  
  }
  
  construct(cost : R, rateCache : PolicyPeriodFXRateCache) {
    super(cost, rateCache)
  }

  override function setSpecificFieldsOnCost(line : GL7Line, cost : R) {
    cost.setFieldValue("GL7Line", line.FixedId)
  }

  protected override property get KeyValues() : List<Object> {
    return { }  // Return an empty list
  }

}
