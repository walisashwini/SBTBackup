package gw.sbt.model.rating

class RatingCalcStepDefinitionOperand {
  // NOTE: changes to any of these properties MUST BE ALSO MADE IN RatingAlgorithmConverter.gs as well.
  // This is part of a less-ideal workaround to increase performance of (de)serialization of rating algorithms.
  var _constantValue : String as ConstantValue
  var _inScopeParam : String as InScopeParam
  var _inScopeValue : String as InScopeValue
  var _inScopeValueIsModifier : String as InScopeValueIsModifier
  var _inScopeValueType : String as InScopeValueType
  var _operandOrder :  int as OperandOrder
  var _operandType : String as OperandType
  var _operatorType : String as OperatorType
  var _tableCode : String as TableCode
  var _covTermCode : String as CovTermCode
  var _functionName : String as FunctionName
  var _leftParenthesisGroup : String as LeftParenthesisGroup
  var _logicalNot : String as LogicalNot
  var _returnFactorColumns : String as ReturnFactorColumns
  var _rightParenthesisGroup : String as RightParenthesisGroup
  var _roundingScaleType : String as RoundingScaleType
  var _variableFieldName : String as VariableFieldName
  var _variableName : String as VariableName
  var _argumentSourceSetCode : String as ArgumentSourceSetCode
  var _argumentSources : List<RatingCalcStepDefinitionArgument>

  construct(operandOrder : String) {
    setOperandOrder(operandOrder)
  }

  private function setOperandOrder(operandOrder : String) {
    if(operandOrder.HasContent) {
      _operandOrder = operandOrder.toInt()
    } else {
      _operandOrder = -1
    }
  }

  property set ArgumentSources(argumentSources : List<RatingCalcStepDefinitionArgument>) {
    // Mostly there is only one CalcStepDefinitionArgument but a bit more defensive here
    _argumentSources = argumentSources.sortBy(\argumentSource -> argumentSource.OperandType)
  }

  property get ArgumentSources() : List<RatingCalcStepDefinitionArgument> {
    return _argumentSources
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis RatingCalcStepDefinitionOperand and
        ConstantValue == other.ConstantValue and
        InScopeParam == other.InScopeParam and
        InScopeValue == other.InScopeValue and
        InScopeValueIsModifier == other.InScopeValueIsModifier and
        InScopeValueType == other.InScopeValueType and
        OperandOrder == other.OperandOrder and
        OperandType == other.OperandType and
        OperatorType == other.OperatorType and
        TableCode == other.TableCode and
        CovTermCode == other.CovTermCode and
        FunctionName == other.FunctionName and
        LeftParenthesisGroup == other.LeftParenthesisGroup and
        LogicalNot == other.LogicalNot and
        ReturnFactorColumns == other.ReturnFactorColumns and
        RightParenthesisGroup == other.RightParenthesisGroup and
        RoundingScaleType == other.RoundingScaleType and
        VariableFieldName == other.VariableFieldName and
        VariableName == other.VariableName and
        ArgumentSourceSetCode == other.ArgumentSourceSetCode and
        Arrays.equals(ArgumentSources?.toArray(), other.ArgumentSources?.toArray())
  }

  override function hashCode() : int {
    return Objects.hash({ConstantValue, InScopeParam, InScopeValue, InScopeValueIsModifier, InScopeValueType,
        OperandOrder, OperandType, OperatorType, TableCode, CovTermCode, FunctionName, LeftParenthesisGroup,
        LogicalNot, ReturnFactorColumns, RightParenthesisGroup, RoundingScaleType, VariableFieldName,
        VariableName, ArgumentSourceSetCode,
        Arrays.hashCode(ArgumentSources?.toArray())})
  }
}