package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7PrincipalsProtectiveLiabCov_ER_db55 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var shouldRunValidation: java.lang.Boolean
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7PrincipalsProtectiveLiabCov = tempGL7SublineTypes.GL7PrincipalsProtectiveLiabCov
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    shouldRunValidation()
    if (!shouldRunValidation) {
      return ""
    }
    TheWorkersCompensationRatemustbeenteredforClassCode15191()
  
    return Error_Message
  }

  private function shouldRunValidation() {
    shouldRunValidation = true
    if (_cf.exists(ED.tempGL7PrincipalsProtectiveLiabCov) == false) {
      shouldRunValidation = false
    }
  }

  private function TheWorkersCompensationRatemustbeenteredforClassCode15191() {
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.OwnersContractorsClassCode == "15191" && ED.tempGL7PrincipalsProtectiveLiabCov.GL7WorkersCompensationRateTerm.Value == 0) {
          Error_Message = "[{0}] [" + ED.tempGL7PrincipalsProtectiveLiabCov.DisplayName + "] The Workers Compensation Rate must be entered for Class Code 15191"
        }
      }
    }
  }

}