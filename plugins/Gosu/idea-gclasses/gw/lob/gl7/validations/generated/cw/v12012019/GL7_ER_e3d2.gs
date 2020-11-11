package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_e3d2 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  private var noMedExclCheck_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    noMedExclCheck_1()
    MedicalPaymentsExclusionmustbeNoifCG2135isnotattachedatalllocationsandclassifications()
  
    return Error_Message
  }

  private function noMedExclCheck_1() {
    noMedExclCheck_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (_cf.exists(element1.GL7ExclCovCMedPayLocClassLvl1) == false && _cf.exists(element.GL7ExclCovCMedPayLocClassLvl) == false) {
          noMedExclCheck_1 = noMedExclCheck_1 + 1
        }
      }
    }
  }

  private function MedicalPaymentsExclusionmustbeNoifCG2135isnotattachedatalllocationsandclassifications() {
    if (noMedExclCheck_1 > 0 && ED.tempGL7SublineTypes.MedicalPaymentsExcl == "Yes") {
      Error_Message = "[{0}] Medical Payments Exclusion must be No if 'Exclusion - Coverage C - Medical Payments' is not attached at all locations and classifications"
    }
  }

}