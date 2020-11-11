package gw.lob.common.validation

uses gw.lob.common.LobPropertyReference
uses gw.lob.common.LobPropertyService
uses gw.lob.common.displayable.LobDisplayable
uses gw.lob.common.displayable.LobFieldMetaSupport
uses gw.validation.PCValidationBase
uses gw.validation.PCValidationContext
uses gw.api.locale.DisplayKey

class FieldRequiredValidation<T extends LobDisplayable> extends PCValidationBase {

  private var _policyLine : PolicyLine

  construct(valContext : PCValidationContext, policyLine: PolicyLine) {
    super(valContext)
    this._policyLine = policyLine
  }

  override function validateImpl() {
    validateCoverableRequiredField()
  }

  function validateCoverableRequiredField() {
    Context.addToVisited(this, "validateCoverableRequiredField")
    if(Context.isAtLeast(ValidationLevel.TC_QUOTABLE)){
      this._policyLine.AllCoverables.each( \ cov -> {
        this.fieldRequiredValidation(cov)
      })
    }
  }

  function fieldRequiredValidation(coverable : Coverable) {
    var entityProperties = LobFieldMetaSupport.Instance.findEntityProperties(coverable)
    entityProperties.each(\ propName -> {
      var fieldMeta = LobFieldMetaSupport.Instance.findFieldMeta(coverable, propName)
      var propRef = new LobPropertyReference(coverable, propName)

      var isAvailable = LobPropertyService.Instance.isEntityColumnAvailable(propRef, fieldMeta)
      var isRequired = LobPropertyService.Instance.isEntityColumnRequired(propRef, fieldMeta)

      if(isAvailable and isRequired and coverable.getFieldValue(propName) == null){
        Result.addError(coverable, ValidationLevel.TC_QUOTABLE, DisplayKey.get("Web.Policy.Validation.RequiredField", DisplayKey.get(fieldMeta.Label), coverable.DisplayName))
      }
    })
  }
}