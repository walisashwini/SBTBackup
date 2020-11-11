package gw.sbt.loader.stateupdate

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.forms.FormPatternModel
uses gw.sbt.loader.reporter.MessageReporter

class FormUpdateValidator {

  function validate(currentForm : FormPatternModel, newForm : FormPatternModel, adoptedForm : FormPatternModel) : Result {
    var canonicalForm = { currentForm, newForm }.firstWhere(\ form -> form != null)
    var isUpdatingExistingEdition = currentForm != null and currentForm.FormPattern.Code == newForm.FormPattern.Code
    var isAvailable = newForm.FormPattern.EffectiveStateCwAvailability.IsAvailable
    var conflictMessages : List<String> = {}
    if (isUpdatingExistingEdition and isAvailable) {
      if (hasConflict(currentForm.FormInference.InferenceClass, newForm.FormInference.InferenceClass, adoptedForm.FormInference.InferenceClass)) {
        conflictMessages.add("Custom form inference")
      } else if (hasConflict(currentForm.FormPattern.GenericInferenceClass, newForm.FormPattern.GenericInferenceClass, adoptedForm.FormPattern.GenericInferenceClass)) {
        conflictMessages.add("Generic form inference, " + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Form.GenericFormInference.Conflict"))
      }
    }

    var validationResult = new Result(canonicalForm, conflictMessages)

    if (validationResult.NoConflict) { // if there is no conflicts, check if it is necessary to update the custom inference class.
      //updation required only if:
      //1. new is not null
      //2. current is different from new
      //3. current is same as adopted or adopted is null
      if (newForm.FormInference != null
          and (not currentForm?.customFormInferenceMatches(newForm))
          and (adoptedForm == null or currentForm?.customFormInferenceMatches(adoptedForm))
          ) {
        validationResult.CustomFormInferenceUpdateRequired = true
      }
    }

    return validationResult
  }

  function hasConflict(currentVersion : String, newVersion : String, adoptedVersion : String) : boolean {
    if (currentVersion == newVersion) {
      return false
    } else {
      if (newVersion == adoptedVersion) {  // current!=(new==adopted)
        return false
      } else if (currentVersion == adoptedVersion) { //new!=(current==adopted)
        return false
      }
      return true
    }
  }

  static class Result {
    var _form : FormPatternModel
    var _conflictMessages : List<String>
    var _customFormInferenceUpdateRequired : boolean as CustomFormInferenceUpdateRequired

    construct(form : FormPatternModel, conflictMessages : List<String>) {
      _form = form
      _conflictMessages = conflictMessages
    }

    property get NoConflict() : boolean {
      return _conflictMessages.Empty
    }

    function reportOn(reporter : MessageReporter) {
      _conflictMessages.each(\ message -> reporter.ConflictReporter.reportFormPattern(_form.FormPattern, message))
    }
  }
}