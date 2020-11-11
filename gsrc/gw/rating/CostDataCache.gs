package gw.rating

uses entity.PolicyLine
uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.interval.DateInterval

/**
 * Use this cache to retrieve a unique instance of the CostData for coverable, primary clause or rating clause
 *
 * For the same slice (date interval), base rating engine only allows one CostData for each coverable or clause.
 * If multiple routines write to the same cost, the cache ensures that the same CostData instance is used
 */
class CostDataCache {
  var _rateCache: PolicyPeriodFXRateCache
  var _numDaysInCoverageRatedTerm: int
  var _addCosts : boolean as readonly AddCosts = true

  var _cache: Map<CostDataKey, LobCachedCostData> = new HashMap<CostDataKey, LobCachedCostData>()

  construct(rateCache: PolicyPeriodFXRateCache, numDaysInCoverageRatedTerm: int) {
    _rateCache = rateCache
    _numDaysInCoverageRatedTerm = numDaysInCoverageRatedTerm
  }

  construct(rateCache : PolicyPeriodFXRateCache, numDaysInCoverageRatedTerm : int, addCosts : boolean) {
    _rateCache = rateCache
    _numDaysInCoverageRatedTerm = numDaysInCoverageRatedTerm
    _addCosts = addCosts
  }

  property get AllCostData() : Collection<LobCachedCostData> {
    return _cache.Values
  }

  function getCostData(effDated : EffDated, clauseId: String = null, dateInterval: DateInterval = null): LobCachedCostData {
    if (dateInterval == null) {
      return null
    }

    var costKey = new CostDataKey(effDated, clauseId)
    var costData = _cache.get(costKey)
    if (costData == null) {
      costData = createCostData(effDated, clauseId, dateInterval)
      _cache.put(costKey, costData)
    }
    return costData
  }

  private function createCostData(effDated : EffDated, clauseId: String, dateInterval: DateInterval): LobCachedCostData {
    var costData: LobCachedCostData
    if (effDated typeis Clause) {
      if (effDated.OwningCoverable typeis CoverableWithRatingBasisType) {
        costData = createClauseCostData(dateInterval, effDated, clauseId, effDated.OwningCoverable.IsBasisScalable)
      } else {
        costData = createClauseCostData(dateInterval, effDated, clauseId)
      }
    } else if (effDated typeis Coverable){
      if (effDated typeis CoverableWithRatingBasisType) {
        costData = createCoverableCostData(dateInterval, effDated, clauseId, effDated.IsBasisScalable)
      } else {
        costData = createCoverableCostData(dateInterval, effDated, clauseId)
      }
    }
    return costData
  }

  private function createClauseCostData(dateInterval: DateInterval, clause : Clause, clauseId: String, basisScalable : Boolean = null): LobCachedCostData {
    var policyLine = clause.PolicyLine
    var cachedCostData = LobCachedCostData.createCostData(dateInterval, clause, _rateCache, basisScalable)
    initializeCostData(cachedCostData, policyLine, clauseId)
    return cachedCostData
  }

  private function createCoverableCostData(dateInterval: DateInterval, coverable : Coverable, clauseId: String, basisScalable : Boolean = null): LobCachedCostData {
    var policyLine = coverable.PolicyLine
    var cachedCostData = LobCachedCostData.createCostData(dateInterval, coverable, _rateCache, basisScalable)
    initializeCostData(cachedCostData, policyLine, clauseId)
    return cachedCostData
  }

  private function initializeCostData(cachedCostData: LobCachedCostData, policyLine: PolicyLine, clauseId: String) {
    var costData = cachedCostData.CostData
    // All cost key attributes must be set before cost data initialization
    if (clauseId != null && costData typeis LobCostData) {
      costData.CostId = clauseId
    }
    init(costData, policyLine)
    costData.NumDaysInRatedTerm = _numDaysInCoverageRatedTerm
  }

  public function init(costData : CostDataWithOverrideSupport, line : PolicyLine) {
    var existingCost: Cost
    if(line.Branch.Job typeis Reinstatement or line.Branch.Job typeis Rewrite)
    {
      var vl = costData.getVersionedCosts(line.BasedOn.BasedOn)
      if(vl.size() == 1){
        existingCost = vl.single().getVersionAsOf(costData.EffectiveDate) as Cost
      }
    }
    if (existingCost == null) {
      existingCost = costData.getExistingCost(line)
    }

    costData.init(costData.createCostDataInitWrapper(existingCost),
        line.Branch.Policy.Product.QuoteRoundingLevel,
        line.Branch.Policy.Product.QuoteRoundingMode)
  }

  private class CostDataKey {
    var _effDated: EffDated as readonly EffDated
    var _clauseId: String as readonly ClauseId

    construct(effDated: EffDated, clauseId: String) {
      _effDated = effDated
      _clauseId = clauseId
    }

    override function equals(obj : Object) : boolean {
      return obj typeis CostDataKey and obj._effDated == _effDated and obj._clauseId == _clauseId
    }

    override function hashCode() : int {
      return Objects.hash({_effDated, _clauseId})
    }
  }
}