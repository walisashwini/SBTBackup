package gw.lob.common.costdata

uses gw.api.domain.Schedule
uses gw.api.system.logging.LOBLoggerCategory
uses gw.lang.parser.StandardCoercionManager
uses gw.lang.reflect.IType
uses gw.lob.common.financials.LobCostMethods
uses gw.rating.CostDataWithOverrideSupport
uses gw.util.concurrent.LockingLazyVar

class CostDataMappingConfiguration {
  static var _instance = LockingLazyVar.make(\-> new CostDataMappingConfiguration())

  var costToCostDataTypeMap: Map<IType, IType> = {}
  var clauseToCostDataTypeMap: Map<IType, IType> = {}
  var coverableToCostDataTypeMap: Map<IType, IType> = {}

  static property get Instance(): CostDataMappingConfiguration {
    return _instance.get()
  }

  private construct() {
    initConfig()
  }

  function findCostDataTypeName(clause: Clause): String {
    var costDataType = clauseToCostDataTypeMap[clause.IntrinsicType]
    if (costDataType == null and clause typeis Schedule) {
      costDataType = clauseToCostDataTypeMap[clause.IntrinsicType.Supertype]
    }
    if (costDataType == null) {
      throw new CostNotSupportedException("No cost support for the clause ${clause.IntrinsicType.Name}")
    }
    return costDataType.Name
  }

  function findCostDataTypeName(coverable: Coverable): String {
    var costDataType = coverableToCostDataTypeMap[coverable.IntrinsicType]
    if (costDataType == null) {
      throw new CostNotSupportedException("No cost support for the coverable ${coverable.IntrinsicType.Name}")
    }
    return costDataType.Name
  }

  function findCostDataTypeName(cost: Cost): String {
    var costDataType = costToCostDataTypeMap[cost.IntrinsicType]
    if (costDataType == null) {
      throw new CostNotSupportedException("No cost data support for the cost ${cost.IntrinsicType.Name}")
    }
    return costDataType.Name
  }

  private function initConfig() {
    CostDataWithOverrideSupport.Type.Subtypes.where( \ d -> not d.Abstract).each( \ costData -> {
      var cost = costData.Supertype.TypeParameters.firstWhere( \ t ->
          not t.Abstract and not t.Interface and Cost.Type.isAssignableFrom(t) and StandardCoercionManager.isStructurallyAssignable(LobCostMethods.Type, t))
      if (costData != null and cost != null) {
        costToCostDataTypeMap.put(cost, costData)
        var clauseType = cost.TypeInfo.Properties*.FeatureType.firstWhere( \ p -> not p.Interface and not p.Abstract and Clause.Type.isAssignableFrom(p))
        if (clauseType != null) {
          clauseToCostDataTypeMap.put(clauseType, costData)
        } else {
          var coverableType = cost.TypeInfo.Properties?.where( \ p -> p.OwnersType == cost)*.FeatureType?.firstWhere( \ p -> not p.Interface and not p.Abstract and Coverable.Type.isAssignableFrom(p))
          if (coverableType != null) {
            coverableToCostDataTypeMap.put(coverableType, costData)
          } else {
            LOBLoggerCategory.RATING.warn("No coverable for cost ${cost.Name}" )
          }
        }
      }
    })
  }
}