package gw.apd

uses gw.api.locale.DisplayKey
uses gw.policy.PolicyLineValidation
uses gw.validation.PCValidationContext

@Export
class APDLineValidation extends PolicyLineValidation<entity.APDManualPolicyLine> {
  
  property get apdLine(): entity.APDManualPolicyLine {
    return Line
  }

  construct(valContext: PCValidationContext, polLine: entity.APDManualPolicyLine) {
    super(valContext, polLine)
  }
  
  override function doValidate() {
    // Add line-specific validation logic here
  }

  /**
   * Validation for Audit is not supported
   */
  override function validateLineForAudit() {
    throw new UnsupportedOperationException(DisplayKey.get("Validator.UnsupportedAuditLineError"))
  }
}