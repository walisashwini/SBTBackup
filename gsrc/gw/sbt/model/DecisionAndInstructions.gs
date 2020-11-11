package gw.sbt.model

class DecisionAndInstructions {
  // NOTE: changes to any of these properties MUST BE ALSO MADE IN RatingAlgorithmConverter.gs as well.
  // This is part of a less-ideal workaround to increase performance of (de)serialization of rating algorithms.
  var _gwDocumentation : String as GwDocumentation
  var _configInstructions : String as ConfigInstructions
  var _manualConfigInstructions : String as ManualConfigInstructions
  var _filingInstructions : String as FilingInstructions
  var _decision : UpdateDecision as Decision

  property get HasInstructions(): boolean {
    return ManualConfigInstructions.HasContent || FilingInstructions.HasContent
  }

  property set GwDocumentation(documentation : String) {
    _gwDocumentation = (documentation == null or documentation.trim().Empty) ? null : documentation
  }

  function updateFrom(template: DecisionAndInstructions) {
    GwDocumentation = template.GwDocumentation
    ConfigInstructions = template.ConfigInstructions
    ManualConfigInstructions = template.ManualConfigInstructions
    FilingInstructions = template.FilingInstructions
    Decision = template.Decision
  }
}