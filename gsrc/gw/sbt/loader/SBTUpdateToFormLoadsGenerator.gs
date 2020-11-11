package gw.sbt.loader

uses gw.sbt.artifacts.forms.FormPatternModel
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.goal.AvailabilityGoal
uses gw.sbt.loader.goal.AvailabilityGoalGeneratorFactory
uses gw.sbt.loader.io.LoadGenerator
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.builder.CurrentFormBuilder
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.pca.analysis.EffectiveAvailabilityHelper
uses gw.sbt.util.ProductCodeToAbbreviationMapper
uses org.slf4j.LoggerFactory

class SBTUpdateToFormLoadsGenerator {
  var _messageReporter : MessageReporter
  var _currentFormBuilder: CurrentFormBuilder
  var _currentConfigFormPatterns : List<PolicyFormPattern> = {}

  construct(messageReporter : MessageReporter) {
    _messageReporter = messageReporter
  }

  function createLoads(sbtUpdate : SBTUpdate,
                                adoptedUpdate : SBTUpdate,
                                updateContents: SBTUpdateContents,
                                currentContents : CurrentConfigContents,
                                adoptedContents : SBTUpdateContents,
                                entityReader : LoaderEntityReader) : List<Load> {
    LoggerFactory.getLogger("PCA").info("[Form loading] - generate availability goals")
    var availabilityGoalsMap = generateAvailabilityGoals(sbtUpdate, adoptedUpdate, currentContents, entityReader)
    LoggerFactory.getLogger("PCA").info("[Form loading] - convert from goals to load ops")
    var availabilityGoalsMapForMissingForms : Map<String, AvailabilityGoal> = {}
    var loads = availabilityGoalToLoads(availabilityGoalsMap, sbtUpdate, updateContents, currentContents, adoptedContents, entityReader, availabilityGoalsMapForMissingForms)
    if (not availabilityGoalsMapForMissingForms.Empty) { //handle the special case: after bring in 'state-replacement' form, also need to bring in 'countrywide' form if not yet.
      var loadsForMissingForms = availabilityGoalToLoads(availabilityGoalsMapForMissingForms, sbtUpdate, updateContents, currentContents, adoptedContents, entityReader)
      loads.addAll(loadsForMissingForms)
    }
    loads = loads.where(\load -> load.LoadOps.HasOps)
    return loads
  }


  private function availabilityGoalToLoads(availabilityGoalsMap: Map<String, AvailabilityGoal>, sbtUpdate : SBTUpdate,
                               updateContents: SBTUpdateContents,
                               currentContents : CurrentConfigContents,
                               adoptedContents : SBTUpdateContents,
                               entityReader : LoaderEntityReader,
                               availabilityGoalsMapForMissingForms : Map<String, AvailabilityGoal> = null) : List<Load> {
    var policyLine = sbtUpdate.MetaData.Line.Code
    var jurisdiction = sbtUpdate.MetaData.Jurisdiction
    var loads = availabilityGoalsMap.keySet().map(\formNumber -> {
      var availabilityGoal = availabilityGoalsMap.get(formNumber)
      var formCode = availabilityGoal.Subject.PublicId  // The formcode from Forms in new or adopted package.
      var newFormPattern = updateContents.getPolicyFormPattern(formCode) // read from filesystem, could be null if the form pattern has been completely removed
      var currentFormPattern : PolicyFormPattern = null
      var adoptedFormPattern : PolicyFormPattern = null

      //for state-update: find the corresponding form pattern by Form Number
      //(Edition might be changed between current and new packages for same form, current and adopted should have same edition)
      currentFormPattern = _currentConfigFormPatterns.firstWhere(\form -> form.FormNumber == formNumber)
      if (currentFormPattern != null) {
        adoptedFormPattern = adoptedContents?.getPolicyFormPattern(currentFormPattern.Code)   // current and adopted should have same form code.
      }


      var policyForm = sbtUpdate.Forms.firstWhere(\form -> form.Code == formCode)
      if (policyForm == null) { // policy form in new package could be null if the pattern is removed.
        if (currentFormPattern == null) {  // the form does not exist in either current or new, only exists in adopted, we don't need to anything.
          return new EmptyLoad()
        } else { // get from current config
          policyForm = _currentFormBuilder.toFormModel(currentFormPattern)
        }
      }

      var currentCustomFormInference = currentContents.CustomFormInferences?.getFormInference(formCode)
      var newCustomFormInference = updateContents.CustomFormInferences?.getFormInference(formCode)
      var adoptedCustomFormInference = adoptedContents.CustomFormInferences?.getFormInference(formCode)

      var currentFormPatternModel = new FormPatternModel(currentFormPattern, currentCustomFormInference)
      var newFormPatternModel = new FormPatternModel(newFormPattern, newCustomFormInference)
      var adoptedFormPatternModel = new FormPatternModel(adoptedFormPattern, adoptedCustomFormInference)

      var resultFormPatternModel = new AvailabilityGoalAnalyzer(_messageReporter, policyLine)
          .createResultFormPatternModel(availabilityGoal, currentFormPatternModel, newFormPatternModel, adoptedFormPatternModel,
              sbtUpdate.AdoptionDate, jurisdiction, entityReader, sbtUpdate.MetaData.isIndependentState, availabilityGoalsMapForMissingForms, sbtUpdate)

      return new LoadGenerator(_messageReporter)
          .generateLoad(policyForm, resultFormPatternModel, currentFormPatternModel, currentContents,
              updateContents, policyLine, jurisdiction, sbtUpdate.ProcessedDate)
    })
    return loads
  }


  private function currentConfigFormsFor(formNumbers: Set<String>) : List<PolicyForm> {
    _currentConfigFormPatterns = formNumbers.map(\ formNumber -> _currentFormBuilder.getMostCurrentFormPattern(formNumber))
        .where(\ form -> form != null)
    return _currentConfigFormPatterns.map(\formPattern -> _currentFormBuilder.toFormModel(formPattern))
  }

  function generateAvailabilityGoals(sbtUpdate : SBTUpdate,
                                     adoptedUpdate : SBTUpdate,
                                     currentContents : CurrentConfigContents,
                                     entityReader : LoaderEntityReader
  ) : Map<String, AvailabilityGoal> { //return a Map, Key: FormNumber, Value: AvailabilityGoal
    var newForms = sbtUpdate.Forms
    var availabilityGoalsMap : Map<String, AvailabilityGoal> = {}

    var lineCode = sbtUpdate.MetaData.Line.Code
    var productAbbreviation = ProductCodeToAbbreviationMapper.getProductAbbreviation(lineCode)
    _currentFormBuilder = new CurrentFormBuilder(lineCode, productAbbreviation, sbtUpdate.MetaData.Jurisdiction, currentContents, null, sbtUpdate.AdoptionDate, entityReader)
    var adoptedForms = adoptedUpdate.Forms
    var unionOfFormNumbers = adoptedForms*.Number.union(newForms*.Number)
    var missingFormsInIndependentState = {} as List<String>
    if (sbtUpdate.MetaData.isIndependentState) {
      missingFormsInIndependentState = entityReader.findAllFormPatternNumbersWithCWLookup(lineCode)
      missingFormsInIndependentState.removeWhere(\formNumber -> unionOfFormNumbers.contains(formNumber))
      unionOfFormNumbers.addAll(missingFormsInIndependentState)
    }

    var currentConfigForms = currentConfigFormsFor(unionOfFormNumbers)
    unionOfFormNumbers.each(\formNumber -> {
      var currentForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(currentConfigForms, formNumber)
      var adoptedForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(adoptedForms, formNumber)
      var newForm = EffectiveAvailabilityHelper.getEffectivePolicyForm(newForms, formNumber)

      var comparison = Comparison.forPolicyForm(currentForm, newForm, adoptedForm, ComparisonDecisionSource.create(sbtUpdate))
      sbtUpdate.registerComparison(comparison)
      if (sbtUpdate.MetaData.isIndependentState) {
        var availabilityGoal = AvailabilityGoalGeneratorFactory.forIndependentStateAddForForm().goalFor(comparison)
        availabilityGoalsMap.put(formNumber, availabilityGoal)
        if (missingFormsInIndependentState.contains(formNumber) and availabilityGoal.Outcome == AvailabilityGoal.Outcome.UNAVAILABLE) {
          _messageReporter.ConflictReporter.reportWarningForIndependentState(currentForm.Description + " (" + formNumber + ")", MessageReporter.ReportMessageSourceType.POLICY_FORM)
        }
      } else {
        var availabilityGoal = AvailabilityGoalGeneratorFactory.forStateUpdateForForm().goalFor(comparison)
        availabilityGoalsMap.put(formNumber, availabilityGoal)
      }
    })

    return availabilityGoalsMap
  }
}