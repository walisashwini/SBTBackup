package gw.lob.common.validation

uses gw.lob.common.displayable.LobDisplayable
uses gw.policy.PolicyLineValidation
uses gw.validation.PCValidationContext

abstract class CommonLineValidation<T extends PolicyLine>  extends PolicyLineValidation<T>{

  construct(valContext : PCValidationContext, polLine : T) {
    super(valContext, polLine)
  }

  override function doValidate() {
    requiredFieldValidation()
    valueRangeFieldValidation()
  }

  function requiredFieldValidation() {
    new FieldRequiredValidation(Context, Line).validate()
  }

  function valueRangeFieldValidation() {
    new FieldValueRangeValidation(Context, Line).validate()
  }

  property get DisplayableType() : Type<LobDisplayable> {
    return LobDisplayable.Type
  }
}