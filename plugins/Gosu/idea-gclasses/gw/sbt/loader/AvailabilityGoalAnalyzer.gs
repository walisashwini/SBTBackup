package gw.sbt.loader

uses gw.sbt.artifacts.clauses.ClauseProductModel
uses gw.sbt.artifacts.forms.FormPatternModel
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.loader.goal.AvailabilityGoal
uses gw.sbt.loader.merger.ClauseEntityExtensionMerger
uses gw.sbt.loader.merger.LookupsMerger
uses gw.sbt.loader.merger.ClausePatternMerger
uses gw.sbt.loader.merger.FormPatternMerger
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateupdate.FormUpdateValidator
uses gw.sbt.model.SBTUpdate

class AvailabilityGoalAnalyzer {
  var _messageReporter : MessageReporter
  var _policyLine: String

  construct(messageReporter : MessageReporter, policyLine: String) {
    _messageReporter = messageReporter
    _policyLine = policyLine
  }

  function createResultFormPatternModel(availabilityGoal : AvailabilityGoal,
                                        currentFormPatternModel : FormPatternModel,
                                        newFormPatternModel : FormPatternModel,
                                        adoptedFormPatternModel: FormPatternModel,
                                        adoptionDate : Date,
                                        jurisdiction : String,
                                        entityReader : LoaderEntityReader,
                                        isIndependentState : boolean,
                                        availabilityGoalsMapForMissingForms : Map<String, AvailabilityGoal>,
                                        sbtUpdate : SBTUpdate) : FormPatternModel {
    var resultFormPatternModel = FormPatternModel.newInstance()

    resultFormPatternModel.FormPattern = new FormPatternMerger(_messageReporter, _policyLine).merge(
        availabilityGoal,
        currentFormPatternModel,
        newFormPatternModel,
        jurisdiction,
        adoptionDate,
        entityReader,
        isIndependentState,
        availabilityGoalsMapForMissingForms,
        sbtUpdate
    )

    var validationResult = new FormUpdateValidator().validate(currentFormPatternModel, newFormPatternModel, adoptedFormPatternModel)

    if (validationResult.CustomFormInferenceUpdateRequired) {
      resultFormPatternModel.FormInference = newFormPatternModel.FormInference
    }
    if (not validationResult.NoConflict) {
      validationResult.reportOn(_messageReporter)
    }


    return resultFormPatternModel
  }

  function createResultClauseProductModel(availabilityGoal : AvailabilityGoal,
                                          currentClauseProductModel : ClauseProductModel,
                                          newClauseProductModel : ClauseProductModel,
                                          adoptedClauseProductModel : ClauseProductModel,
                                          adoptionDate : Date,
                                          jurisdiction : String,
                                          cwEdition : String) : ClauseProductModel {

    var resultClauseProductModel = ClauseProductModel.newInstance()

    resultClauseProductModel.Lookups = LookupsMerger.forClause(_messageReporter).merge(
          availabilityGoal,
          currentClauseProductModel.Lookups ?: ClausePatternLookups.Empty,  //current Lookups could be null
          newClauseProductModel.Lookups ?: ClausePatternLookups.Empty,      //new Lookups could be null
          adoptionDate,
          jurisdiction,
          cwEdition)

    resultClauseProductModel.ClausePattern = currentClauseProductModel.ClausePattern

    //following merging is for StateUpdate and StateAdd
    var updateMerger = new ClausePatternMerger(_messageReporter, jurisdiction)
    resultClauseProductModel.ClausePattern = updateMerger
        .merge(resultClauseProductModel.ClausePattern, newClauseProductModel.ClausePattern, adoptedClauseProductModel.ClausePattern)

    //To add new columns for covTerms into ETX, if needed.
    resultClauseProductModel.ClauseEntityExtension = new ClauseEntityExtensionMerger().merge(
        currentClauseProductModel.ClauseEntity,
        currentClauseProductModel.ClauseEntityExtension,
        currentClauseProductModel.ClauseRootEntityExtension,
        newClauseProductModel.ClauseEntity,
        newClauseProductModel.ClauseEntityExtension,
        resultClauseProductModel.ClausePattern
    )

    if (not updateMerger.PatternModified) {
      resultClauseProductModel.ClausePattern = null
    }

    return resultClauseProductModel
  }

}