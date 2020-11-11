package gw.lob.common.costdata

uses gw.financials.PolicyPeriodFXRateCache
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem
uses gw.lang.reflect.interval.DateInterval
uses gw.rating.CostDataWithOverrideSupport

final class CostDataMappingSupport {
  static var _configuration = CostDataMappingConfiguration.Instance

  private construct() {
  }

  static function createBlankClauseCostData(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache): CostDataWithOverrideSupport {
    var costDataTypeName = _configuration.findCostDataTypeName(clause)
    return createCostDataInstance(costDataTypeName, {DateInterval, Clause, PolicyPeriodFXRateCache}, {dateInterval, clause, rateCache})
  }

  static function createBlankClauseCostData(dateInterval: DateInterval, clause: Clause, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean): CostDataWithOverrideSupport {
    var costDataTypeName = _configuration.findCostDataTypeName(clause)
    return createCostDataInstance(costDataTypeName, {DateInterval, Clause, PolicyPeriodFXRateCache, Boolean}, {dateInterval, clause, rateCache, basisScalable})
  }

  static function createBlankClauseCostData(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache): CostDataWithOverrideSupport {
    var costDataTypeName = _configuration.findCostDataTypeName(coverable)
    return createCostDataInstance(costDataTypeName, {DateInterval, Coverable, PolicyPeriodFXRateCache}, {dateInterval, coverable, rateCache})
  }

  static function createBlankClauseCostData(dateInterval: DateInterval, coverable: Coverable, rateCache: PolicyPeriodFXRateCache, basisScalable: Boolean): CostDataWithOverrideSupport {
    var costDataTypeName = _configuration.findCostDataTypeName(coverable)
    return createCostDataInstance(costDataTypeName, {DateInterval, Coverable, PolicyPeriodFXRateCache, Boolean}, {dateInterval, coverable, rateCache, basisScalable})
  }

  static function createCostDataFromCost(cost: Cost, rateCache: PolicyPeriodFXRateCache): CostDataWithOverrideSupport {
    var costDataTypeName = _configuration.findCostDataTypeName(cost)
    return createCostDataInstance(costDataTypeName, {typeof cost, PolicyPeriodFXRateCache}, {cost, rateCache})
  }

  internal static property set Configuration(configuration: CostDataMappingConfiguration) {
    _configuration = configuration
  }

  private static function createCostDataInstance(typeName: String, constructorArgTypes: IType[], constructorArgs: Object[]): CostDataWithOverrideSupport {
    var type = TypeSystem.getByFullName(typeName)
    try {
      var instance = type.TypeInfo.getCallableConstructor(constructorArgTypes).Constructor.newInstance(constructorArgs)
      return instance as CostDataWithOverrideSupport
    } catch (e: Exception) {
      throw new IllegalStateException("Failed to initialize cost data '" + type + "' with arguments { " + constructorArgs.join(',') + " }")
    }
  }
}