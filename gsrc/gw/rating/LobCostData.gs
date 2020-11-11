package gw.rating

uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.pl.persistence.core.Key

abstract class LobCostData<R extends Cost & LobCost, T extends PolicyLine> extends CostDataWithOverrideSupport<R, T>{
  protected var _ownerId : Key
  protected var _costId: String as CostId
  protected var _hasParent: boolean as HasParent
  protected var _details : String as Details

  construct(dateInterval : DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, clause.OwningCoverable.PreferredCoverageCurrency, rateCache)
    _ownerId = clause.FixedId
  }

  construct(dateInterval : DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache) {
    super(dateInterval.LeftEndpoint, dateInterval.RightEndpoint, coverable.PreferredCoverageCurrency, rateCache)
    _ownerId = coverable.FixedId
  }

  construct(cost: R, ownerID: Key, rateCache: PolicyPeriodFXRateCache) {
    super(cost, rateCache)
    _ownerId = ownerID
    if (cost typeis LobCost) {
      _hasParent = cost.HasParent
      _details = cost.Details
      _costId = cost.CostId
    }
  }

  override function setSpecificFieldsOnCost(line: T, cost: R) {
    cost.CostId = CostId
    cost.HasParent = HasParent
    cost.Details = Details
  }

  protected override property get KeyValues(): List<Object> {
    return {_ownerId, _costId}
  }

  abstract protected function getOwnerID(cost: R) : Key

  abstract protected function setOwnerID(cost: R, ownerID : Key)
}