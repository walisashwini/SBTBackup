package gw.sbt.model.rating

class RatingCalcStepDefinitionArgument {
  // NOTE: changes to any of these properties MUST BE ALSO MADE IN RatingAlgorithmConverter.gs as well.
  // This is part of a less-ideal workaround to increase performance of (de)serialization of rating algorithms.
  var _constantValue : String as ConstantValue
  var _inScopeParam : String as InScopeParam
  var _inScopeValue : String as InScopeValue
  var _inScopeValueIsModifier : String as InScopeValueIsModifier
  var _inScopeValueType : String as InScopeValueType
  var _overrideSource :  String as OverrideSource
  var _operandType : String as OperandType
  var _parameter : String as Parameter
  var _parameterType : String as ParameterType
  var _covTermCode : String as CovTermCode
  var _variableFieldName : String as VariableFieldName
  var _variableName : String as VariableName


  override function equals(other : Object) : boolean {
    return other != null and other typeis RatingCalcStepDefinitionArgument and
        ConstantValue == other.ConstantValue and
        InScopeParam == other.InScopeParam and
        InScopeValue == other.InScopeValue and
        InScopeValueIsModifier == other.InScopeValueIsModifier and
        InScopeValueType == other.InScopeValueType and
        OverrideSource == other.OverrideSource and
        OperandType == other.OperandType and
        Parameter == other.Parameter and
        ParameterType == other.ParameterType and
        CovTermCode == other.CovTermCode and
        VariableFieldName == other.VariableFieldName and
        VariableName == other.VariableName
  }

  override function hashCode() : int {
    return Objects.hash({ConstantValue, InScopeParam, InScopeValue, InScopeValueIsModifier, InScopeValueType,
        OverrideSource, OperandType, Parameter, ParameterType, CovTermCode, VariableFieldName, VariableName})
  }
}