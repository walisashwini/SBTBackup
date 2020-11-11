package gw.forms.generic

uses gw.api.locale.DisplayKey
uses gw.api.productmodel.PolicyLinePattern
uses gw.api.productmodel.PolicyLinePatternLookup
uses gw.forms.FormData
uses gw.forms.FormInferenceContext
uses gw.forms.GenericFormInference
uses gw.lang.reflect.TypeSystem
uses gw.validation.PCValidationBase

abstract class AbstractMultipleValueSelectionForm extends FormData implements GenericFormInference {

  protected var _coverables : Coverable[]

  override function populateInferenceData(context : FormInferenceContext, availableStates : Set<Jurisdiction>) {
    var entityType = TypeSystem.getByRelativeName(Pattern.CoverableType)
    _coverables = context.Period.AllCoverables.where(\c -> entityType.isAssignableFrom(typeof c) and availableStates.contains(context.getCoverableState(c)))
  }

  override property get ValidPolicylines() : List<PolicyLinePattern> {
    return PolicyLinePatternLookup.getAll()
  }

  override property get PolicyLineRequired() : boolean {
    return true
  }

  override function clearCustomFields(formPattern : FormPattern) {
    formPattern.CoverableType = null
    clearAdditionalFields(formPattern)
  }

  override function validateCustomFields(formPattern: FormPattern, validation: PCValidationBase) {
    if (hasMissingRequiredFields(formPattern, validation)) {
      return
    }

    if (formPattern.PolicyLinePatternRef == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.LineDoesNotExist", formPattern.DisplayName, formPattern.PolicyLinePatternCode))
      return
    } else if (not formPattern.PolicyLinePatternRef.Pattern.AllCoverableEntityTypes*.RelativeName.contains(formPattern.CoverableType)) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.IncompatibleCoverableType", formPattern.DisplayName, formPattern.PolicyLinePatternCode, formPattern.CoverableType))
      return
    }

    validateAdditionalFields(formPattern, validation)
  }

  function hasMissingRequiredFields(formPattern : FormPattern, validation : PCValidationBase) : boolean {
    if (formPattern.PolicyLinePatternCode == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "PolicyLinePatternCode"))
      return true
    }
    if (formPattern.CoverableType == null) {
      validation.Result.addError(formPattern, TC_DEFAULT, DisplayKey.get("Validation.FormPattern.Inference.MissingRequired", formPattern.DisplayName, "CoverableType"))
      return true
    }

    return hasAdditionalMissingReqiredFields(formPattern, validation)
  }

  abstract function hasAdditionalMissingReqiredFields(formPattern : FormPattern, validation : PCValidationBase) : boolean

  abstract function validateAdditionalFields(formPattern: FormPattern, validation: PCValidationBase)

  abstract function clearAdditionalFields(formPattern: FormPattern)

}