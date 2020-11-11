package gw.sbt.reader.content.rating.xml

uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.sbt.model.rating.RatingCalcStepDefinitionArgument
uses gw.sbt.model.rating.RatingCalcStepDefinitionOperand
uses gw.sbt.model.rating.RatingCalcStepDefintion
uses gw.xml.XmlElement

uses javax.xml.namespace.QName
uses java.util.Collection

class RatingAlgorithmReader {

  function read(namespace : String, calcRoutineDefXmls: Collection<XmlElement>, cwBook : RateBookContent): Collection<RatingAlgorithm> {
    var stateRoutines = calcRoutineDefXmls.map(\calcRoutineDefXml ->
      new RatingAlgorithm() {
        :Intent =STATE_ADD,
        :Name = calcRoutineDefXml.getChild(new QName(namespace, "Name"))?.$Text ?: "",
        :Code = calcRoutineDefXml.getChild(new QName(namespace, "Code"))?.$Text ?: "",
        :Jurisdiction = calcRoutineDefXml.getChild(new QName(namespace, "Jurisdiction"))?.$Text ?: "",
        :CalcSteps = readRatingCalcStepDefintions(namespace, calcRoutineDefXml.getChild(new QName(namespace, "Steps")))
      })

    if(cwBook != null) {
      stateRoutines.addAll(cwBook.Algorithms)
    }

    return stateRoutines
  }

  private function readRatingCalcStepDefintions(namespace : String, stepsXml : XmlElement) : List<RatingCalcStepDefintion> {
    if(stepsXml != null) {
      return stepsXml.getChildren(new QName(namespace, "CalcStepDefinition"))
          .map(\calcStepDefinitionXml ->
              new RatingCalcStepDefintion(calcStepDefinitionXml.getChild(new QName(namespace, "SortOrder"))?.$Text) {
                :InScopeParam = calcStepDefinitionXml.getChild(new QName(namespace, "InScopeParam"))?.$Text ?: "",
                :InScopeValue = calcStepDefinitionXml.getChild(new QName(namespace, "InScopeValue"))?.$Text ?: "",
                :StepType = calcStepDefinitionXml.getChild(new QName(namespace, "StepType"))?.$Text ?: "",
                :StoreLocation = calcStepDefinitionXml.getChild(new QName(namespace, "StoreLocation"))?.$Text ?: "",
                :StoreType = calcStepDefinitionXml.getChild(new QName(namespace, "StoreType"))?.$Text ?: "",
                :Operands = readRatingCalcStepDefinitionOperands(namespace, calcStepDefinitionXml.getChild(new QName(namespace, "Operands")))
              })
    }

    return Collections.emptyList()
  }

  private function readRatingCalcStepDefinitionOperands(namespace : String, operandsXml : XmlElement) : List<RatingCalcStepDefinitionOperand> {
    if(operandsXml != null) {
      return operandsXml.getChildren(new QName(namespace, "CalcStepDefinitionOperand"))
          .map(\calcStepDefinitionOperandXml ->
              new RatingCalcStepDefinitionOperand(calcStepDefinitionOperandXml.getChild(new QName(namespace, "OperandOrder"))?.$Text) {
                :ConstantValue = calcStepDefinitionOperandXml.getChild(new QName(namespace, "ConstantValue"))?.$Text ?: "",
                :InScopeParam = calcStepDefinitionOperandXml.getChild(new QName(namespace, "InScopeParam"))?.$Text ?: "",
                :InScopeValue = calcStepDefinitionOperandXml.getChild(new QName(namespace, "InScopeValue"))?.$Text ?: "",
                :InScopeValueIsModifier = calcStepDefinitionOperandXml.getChild(new QName(namespace, "InScopeValueIsModifier"))?.$Text ?: "",
                :InScopeValueType = calcStepDefinitionOperandXml.getChild(new QName(namespace, "InScopeValueType"))?.$Text ?: "",
                :OperandType = calcStepDefinitionOperandXml.getChild(new QName(namespace, "OperandType"))?.$Text ?: "",
                :OperatorType = calcStepDefinitionOperandXml.getChild(new QName(namespace, "OperatorType"))?.$Text ?: "",
                :TableCode = calcStepDefinitionOperandXml.getChild(new QName(namespace, "TableCode"))?.$Text ?: "",
                :CovTermCode = calcStepDefinitionOperandXml.getChild(new QName(namespace, "CovTermCode"))?.$Text ?: "",
                :FunctionName = calcStepDefinitionOperandXml.getChild(new QName(namespace, "FunctionName"))?.$Text ?: "",
                :LeftParenthesisGroup = calcStepDefinitionOperandXml.getChild(new QName(namespace, "LeftParenthesisGroup"))?.$Text ?: "",
                :LogicalNot = calcStepDefinitionOperandXml.getChild(new QName(namespace, "LogicalNot"))?.$Text ?: "",
                :ReturnFactorColumns = calcStepDefinitionOperandXml.getChild(new QName(namespace, "ReturnFactorColumns"))?.$Text ?: "",
                :RightParenthesisGroup = calcStepDefinitionOperandXml.getChild(new QName(namespace, "RightParenthesisGroup"))?.$Text ?: "",
                :RoundingScaleType = calcStepDefinitionOperandXml.getChild(new QName(namespace, "RoundingScaleType"))?.$Text ?: "",
                :VariableFieldName = calcStepDefinitionOperandXml.getChild(new QName(namespace, "VariableFieldName"))?.$Text ?: "",
                :VariableName = calcStepDefinitionOperandXml.getChild(new QName(namespace, "VariableName"))?.$Text ?: "",
                :ArgumentSourceSetCode = calcStepDefinitionOperandXml.getChild(new QName(namespace, "ArgumentSourceSetCode"))?.$Text ?: "",
                :ArgumentSources = readRatingCalcStepDefinitionArgument(namespace, calcStepDefinitionOperandXml.getChild(new QName(namespace, "ArgumentSources")))
              })
    }

    return Collections.emptyList()
  }

  private function readRatingCalcStepDefinitionArgument(namespace : String, argumentSourcesXml : XmlElement) : List<RatingCalcStepDefinitionArgument> {
    if(argumentSourcesXml != null) {
      return argumentSourcesXml.getChildren(new QName(namespace, "CalcStepDefinitionArgument"))
          .map(\calcStepDefinitionArgumentXml ->
              new RatingCalcStepDefinitionArgument() {
                :ConstantValue = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "ConstantValue"))?.$Text ?: "",
                :InScopeParam = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "InScopeParam"))?.$Text ?: "",
                :InScopeValue = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "InScopeValue"))?.$Text ?: "",
                :InScopeValueIsModifier = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "InScopeValueIsModifier"))?.$Text ?: "",
                :InScopeValueType = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "InScopeValueType"))?.$Text ?: "",
                :OperandType = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "OperandType"))?.$Text ?: "",
                :OverrideSource = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "OverrideSource"))?.$Text ?: "",
                :Parameter = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "Parameter"))?.$Text ?: "",
                :ParameterType = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "ParameterType"))?.$Text ?: "",
                :CovTermCode = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "CovTermCode"))?.$Text ?: "",
                :VariableFieldName = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "VariableFieldName"))?.$Text ?: "",
                :VariableName = calcStepDefinitionArgumentXml.getChild(new QName(namespace, "VariableName"))?.$Text ?: ""
              })
    }

    return Collections.emptyList()
  }
}