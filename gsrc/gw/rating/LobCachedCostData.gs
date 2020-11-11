package gw.rating

uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval
uses gw.lob.common.costdata.CostDataMappingSupport

class LobCachedCostData {

  var _costData : CostDataWithOverrideSupport as CostData
  var _merged : boolean as Merged

  private construct(costData : CostDataWithOverrideSupport) {
    _costData = costData
    _merged = false
  }

  static public function createCostData(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean) : LobCachedCostData {
    var costData = basisScalable != null
          ? CostDataMappingSupport.createBlankClauseCostData(dateInterval, clause, rateCache, basisScalable)
          : CostDataMappingSupport.createBlankClauseCostData(dateInterval, clause, rateCache)

    return new LobCachedCostData(costData)
  }

  static public function createCostData(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean) : LobCachedCostData {
    var costData = basisScalable != null
        ? CostDataMappingSupport.createBlankClauseCostData(dateInterval, coverable, rateCache, basisScalable)
        : CostDataMappingSupport.createBlankClauseCostData(dateInterval, coverable, rateCache)

    return new LobCachedCostData(costData)
  }

  @Override
  public function equals(o : Object) : boolean {
    if (this == o) {
      return true
    }
    if (o == null or Class != o.Class) {
      return false
    }

    var that = o as LobCachedCostData

    return (_costData != null) and (that._costData != null) and (_costData == that._costData)
  }

  @Override
  public function hashCode() : int {
    return _costData != null ? _costData.hashCode() : 0
  }
}