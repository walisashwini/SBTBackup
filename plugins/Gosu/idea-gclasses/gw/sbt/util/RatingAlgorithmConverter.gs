package gw.sbt.util

uses com.thoughtworks.xstream.converters.Converter
uses com.thoughtworks.xstream.converters.MarshallingContext
uses com.thoughtworks.xstream.converters.UnmarshallingContext
uses com.thoughtworks.xstream.io.HierarchicalStreamReader
uses com.thoughtworks.xstream.io.HierarchicalStreamWriter
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Intent
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.sbt.model.rating.RatingCalcStepDefinitionArgument
uses gw.sbt.model.rating.RatingCalcStepDefinitionOperand
uses gw.sbt.model.rating.RatingCalcStepDefintion

class RatingAlgorithmConverter implements Converter {
  private static var ALGORITHM_SPLITTER = "~#"
  private static var CALC_STEP_SPLITTER = "~%"
  private static var DI_SPLITTER = "~~"
  private static var CALC_STEP_PARAM_SPLITTER = "~="
  private static var OPERAND_SPLITTER = "~*"
  private static var OPERAND_SPLITTER_ESCAPED = "~\\*"
  private static var OPERAND_PARAM_SPLITTER = "~^"
  private static var OPERAND_PARAM_SPLITTER_ESCAPED = "~\\^"
  private static var ARGUMENT_SPLITTER = "~@"
  private static var ARGUMENT_PARAM_SPLITTER = "~?"
  private static var ARGUMENT_PARAM_SPLITTER_ESCAPED = "~\\?"


  override function marshal(source : Object, writer : HierarchicalStreamWriter, context : MarshallingContext) {
    var ratingAlgorithm = source as RatingAlgorithm

    writer.startNode("RatingAlgorithm")
    writer.setValue(serialize(ratingAlgorithm))
    writer.endNode()
  }

  override function unmarshal(reader : HierarchicalStreamReader, context : UnmarshallingContext) : Object {
    reader.moveDown()
    var algorithmStr = reader.getValue()
    reader.moveUp()

    return deserializeAlgorithm(algorithmStr)
  }

  override function canConvert(type : Class) : boolean {
    return type == RatingAlgorithm
  }

  function serialize(ratingAlgorithm : RatingAlgorithm) : String {
    var serializedAlgorithm = new StringBuffer()
    serializedAlgorithm.append((ratingAlgorithm.Code ?: "") + ALGORITHM_SPLITTER)
    serializedAlgorithm.append((ratingAlgorithm.Name ?: "") + ALGORITHM_SPLITTER)
    serializedAlgorithm.append((ratingAlgorithm.Jurisdiction ?: "") + ALGORITHM_SPLITTER)
    serializedAlgorithm.append((ratingAlgorithm.Intent ?: "") + ALGORITHM_SPLITTER)
    serializedAlgorithm.append(serialize(ratingAlgorithm.DecisionAndInstructions))

    if(ratingAlgorithm.CalcSteps.HasElements) {
      serializedAlgorithm.append(ALGORITHM_SPLITTER)

      var serializedCalcSteps = new StringBuffer()
      ratingAlgorithm.CalcSteps.each(\calcStep -> {
        if(serializedCalcSteps.length() > 0) {
          serializedCalcSteps.append(CALC_STEP_SPLITTER)
        }
        serializedCalcSteps.append(serialize(calcStep))
      })
      serializedAlgorithm.append(serializedCalcSteps)
    }

    return serializedAlgorithm.toString()
  }

  function deserializeAlgorithm(algorithmStr : String) : RatingAlgorithm {
    var algorithmParams = algorithmStr.split(ALGORITHM_SPLITTER, -1)

    var algorithm = new RatingAlgorithm() {
      :Code = algorithmParams[0],
      :Name = algorithmParams[1],
      :Jurisdiction = algorithmParams[2],
      :Intent = algorithmParams[3].HasContent ? Intent.fromString(algorithmParams[3]) : null,
      :DecisionAndInstructions = deserializeDecisionAndInstructions(algorithmParams[4]),
      :CalcSteps = {}
    }

    if(algorithmParams.length > 5 and algorithmParams[5].HasContent) {
      algorithmParams[5].split(CALC_STEP_SPLITTER, -1).toList()
          .each(\ calcStepStr -> {
            if (calcStepStr.HasContent) {
              algorithm.CalcSteps.add(deserializeCalcStep(calcStepStr))
            }
          })
    }
    return algorithm
  }

  private function serialize(decisionAndInstructions : DecisionAndInstructions) : StringBuffer {
    var serializedDI = new StringBuffer()
    serializedDI.append((decisionAndInstructions.GwDocumentation ?: "") + DI_SPLITTER)
    serializedDI.append((decisionAndInstructions.ConfigInstructions ?: "") + DI_SPLITTER)
    serializedDI.append((decisionAndInstructions.ManualConfigInstructions ?: "") + DI_SPLITTER)
    serializedDI.append((decisionAndInstructions.FilingInstructions ?: "") + DI_SPLITTER)
    serializedDI.append(decisionAndInstructions.Decision ?: "")

    return serializedDI
  }

  private function deserializeDecisionAndInstructions(decisionAndInstructionsStr : String) : DecisionAndInstructions {
    var diParams = decisionAndInstructionsStr.split(DI_SPLITTER, -1)
    var decisionAndInstructions = new DecisionAndInstructions() {
      :GwDocumentation = diParams[0],
      :ConfigInstructions = diParams[1],
      :ManualConfigInstructions = diParams[2],
      :FilingInstructions = diParams[3],
      :Decision = diParams[4].HasContent ? UpdateDecision.fromString(diParams[4]) : null
    }

    return decisionAndInstructions
  }

  private function serialize(calcStep : RatingCalcStepDefintion) : StringBuffer {
    var serializedCalcStep = new StringBuffer()
    serializedCalcStep.append((calcStep.InScopeParam ?: "") + CALC_STEP_PARAM_SPLITTER)
    serializedCalcStep.append((calcStep.InScopeValue ?: "") + CALC_STEP_PARAM_SPLITTER)
    serializedCalcStep.append(calcStep.SortOrder + CALC_STEP_PARAM_SPLITTER)
    serializedCalcStep.append((calcStep.StepType ?: "") + CALC_STEP_PARAM_SPLITTER)
    serializedCalcStep.append((calcStep.StoreLocation ?: "") + CALC_STEP_PARAM_SPLITTER)
    serializedCalcStep.append(calcStep.StoreType ?: "")

    if(calcStep.Operands.HasElements) {
      serializedCalcStep.append(CALC_STEP_PARAM_SPLITTER)

      var serializedOperands = new StringBuffer()
      calcStep.Operands.each(\operand -> {
        if(serializedOperands.length() > 0) {
          serializedOperands.append(OPERAND_SPLITTER)
        }
        serializedOperands.append(serialize(operand))
      })
      serializedCalcStep.append(serializedOperands)
    }

    return serializedCalcStep
  }

  private function deserializeCalcStep(calcStepStr : String) : RatingCalcStepDefintion {
    var calcStepParams = calcStepStr.split(CALC_STEP_PARAM_SPLITTER, -1)
    var calcStep = new RatingCalcStepDefintion(calcStepParams[2]) {
      :InScopeParam = calcStepParams[0],
      :InScopeValue = calcStepParams[1],
      :StepType = calcStepParams[3],
      :StoreLocation = calcStepParams[4],
      :StoreType = calcStepParams[5],
      :Operands = {}
    }

    if(calcStepParams.length > 6 and calcStepParams[6].HasContent) {
      calcStepParams[6].split(OPERAND_SPLITTER_ESCAPED, -1).toList()
          .each(\ operandStr -> {
            if (operandStr.HasContent) {
              calcStep.Operands.add(deserializeOperand(operandStr))
            }
          })
    }
    return calcStep
  }

  private function serialize(operand : RatingCalcStepDefinitionOperand) : StringBuffer {
    var serializedOperand = new StringBuffer()
    serializedOperand.append((operand.ConstantValue ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.InScopeParam ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.InScopeValue ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.InScopeValueIsModifier ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.InScopeValueType ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append(operand.OperandOrder + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.OperandType ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.OperatorType ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.TableCode ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.CovTermCode ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.FunctionName ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.LeftParenthesisGroup ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.LogicalNot ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.ReturnFactorColumns ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.RightParenthesisGroup ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.RoundingScaleType ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.VariableFieldName ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append((operand.VariableName ?: "") + OPERAND_PARAM_SPLITTER)
    serializedOperand.append(operand.ArgumentSourceSetCode ?: "")

    if(operand.ArgumentSources.HasElements) {
      serializedOperand.append(OPERAND_PARAM_SPLITTER)

      var serializedArgs = new StringBuffer()
      operand.ArgumentSources.each(\argument -> {
        if (serializedArgs.length() > 0) {
          serializedArgs.append(ARGUMENT_SPLITTER)
        }
        serializedArgs.append(serialize(argument))
      })
      serializedOperand.append(serializedArgs)
    }

    return serializedOperand
  }

  private function deserializeOperand(operandStr : String) : RatingCalcStepDefinitionOperand {
    var operandParams = operandStr.split(OPERAND_PARAM_SPLITTER_ESCAPED, -1)
    var operand = new RatingCalcStepDefinitionOperand(operandParams[5]) {
      :ConstantValue = operandParams[0],
      :InScopeParam = operandParams[1],
      :InScopeValue = operandParams[2],
      :InScopeValueIsModifier = operandParams[3],
      :InScopeValueType = operandParams[4],
      :OperandType = operandParams[6],
      :OperatorType = operandParams[7],
      :TableCode = operandParams[8],
      :CovTermCode = operandParams[9],
      :FunctionName = operandParams[10],
      :LeftParenthesisGroup = operandParams[11],
      :LogicalNot = operandParams[12],
      :ReturnFactorColumns = operandParams[13],
      :RightParenthesisGroup = operandParams[14],
      :RoundingScaleType = operandParams[15],
      :VariableFieldName = operandParams[16],
      :VariableName = operandParams[17],
      :ArgumentSourceSetCode = operandParams[18],
      :ArgumentSources = {}
    }

    if(operandParams.length > 19 and operandParams[19].HasContent) {
      operandParams[19].split(ARGUMENT_SPLITTER, -1).toList()
         .each(\argumentStr -> {
           if (argumentStr.HasContent) {
             operand.ArgumentSources.add(deserializeArgument(argumentStr))
           }
         })
    }

    return operand
  }

  private function serialize(argument : RatingCalcStepDefinitionArgument) : StringBuffer {
    var serializedArgument = new StringBuffer()
    serializedArgument.append((argument.ConstantValue ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.InScopeParam ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.InScopeValue ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.InScopeValueIsModifier ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.InScopeValueType ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.OverrideSource ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.OperandType ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.Parameter ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.ParameterType ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.CovTermCode ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append((argument.VariableFieldName ?: "") + ARGUMENT_PARAM_SPLITTER)
    serializedArgument.append(argument.VariableName ?: "")

    return serializedArgument
  }

  private function deserializeArgument(argumentStr : String) : RatingCalcStepDefinitionArgument {
    var argumentParams = argumentStr.split(ARGUMENT_PARAM_SPLITTER_ESCAPED, -1)

    return new RatingCalcStepDefinitionArgument() {
      :ConstantValue = argumentParams[0],
      :InScopeParam = argumentParams[1],
      :InScopeValue = argumentParams[2],
      :InScopeValueIsModifier = argumentParams[3],
      :InScopeValueType = argumentParams[4],
      :OverrideSource = argumentParams[5],
      :OperandType = argumentParams[6],
      :Parameter = argumentParams[7],
      :ParameterType = argumentParams[8],
      :CovTermCode = argumentParams[9],
      :VariableFieldName = argumentParams[10],
      :VariableName = argumentParams[11]
    }
  }
}