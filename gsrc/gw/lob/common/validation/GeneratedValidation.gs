package gw.lob.common.validation

uses gw.lob.common.LobCoverable
uses gw.validation.PCValidationResult
uses org.apache.commons.lang3.StringUtils
uses java.text.MessageFormat

abstract class GeneratedValidation<T extends Coverable> {
  abstract protected function validate(coverable: T): String

  public function validate(coverable: T, pcValidationResult: PCValidationResult) {
    validate(coverable, pcValidationResult, false)
  }

  public function validate(coverable: T, pcValidationResult: PCValidationResult, includeWizardStepId: boolean) {
    var formattedErrorMessage =  replaceSingleQuotationMarkWithDisplayableMarks(validate(coverable))
    if (!StringUtils.isEmpty(formattedErrorMessage)){
      var coverableReference = coverable typeis LobCoverable ? coverable.DisplayReference : coverable.DisplayName
      formattedErrorMessage = MessageFormat.format(formattedErrorMessage, {coverableReference})
      if (includeWizardStepId) {
        pcValidationResult.addError(coverable, ValidationLevel.TC_DEFAULT, formattedErrorMessage, getWizardStepId(coverable))
      } else {
        pcValidationResult.addError(coverable, ValidationLevel.TC_DEFAULT, formattedErrorMessage)
      }
    }
  }

  private function replaceSingleQuotationMarkWithDisplayableMarks(message : String) : String {
    return message
        ?.replace(" '", " \"")
        ?.replace("' ", "\" ")
        ?.replace("'", "`")
  }

  abstract protected function getWizardStepId(coverable: T): String
}