package gw.sbt.model.rating

class RatingCalcStepDefintion {
  // NOTE: changes to any of these properties MUST BE ALSO MADE IN RatingAlgorithmConverter.gs as well.
  // This is part of a less-ideal workaround to increase performance of (de)serialization of rating algorithms.
  var _inScopeParam : String as InScopeParam
  var _inScopeValue : String as InScopeValue
  var _sortOrder :  int as SortOrder
  var _stepType : String as StepType
  var _storeLocation : String as StoreLocation
  var _storeType : String as StoreType
  var _operands : List<RatingCalcStepDefinitionOperand>

  construct(sortOrder : String) {
    setSortOrder(sortOrder)
  }

  private function setSortOrder(sortOrder : String) {
    if(sortOrder.HasContent) {
      _sortOrder = sortOrder.toInt()
    } else {
      _sortOrder = -1
    }
  }

  property set Operands(operands : List<RatingCalcStepDefinitionOperand>) {
    _operands = operands.sortBy(\operand -> operand.OperandOrder)
  }

  property get Operands() : List<RatingCalcStepDefinitionOperand> {
    return _operands
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis RatingCalcStepDefintion and
        InScopeParam == other.InScopeParam and
        InScopeValue == other.InScopeValue and
        SortOrder == other.SortOrder and
        StepType == other.StepType and
        StoreLocation == other.StoreLocation and
        StoreType == other.StoreType and
        Arrays.equals(Operands?.toArray(), other.Operands?.toArray())
  }

  override function hashCode() : int {
    return Objects.hash({InScopeParam, InScopeValue, SortOrder, StepType, StoreLocation, StoreType,
        Arrays.hashCode(Operands?.toArray())})
  }

}