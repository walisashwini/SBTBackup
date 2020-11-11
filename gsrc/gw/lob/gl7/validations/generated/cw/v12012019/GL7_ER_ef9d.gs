package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_ef9d extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    CG2296andCG2138cannotbeattachedtothesamepolicyTheclasscodesselectedhaveaconflict()
  
    return Error_Message
  }

  private function CG2296andCG2138cannotbeattachedtothesamepolicyTheclasscodesselectedhaveaconflict() {
    if (_cf.count(ED.tempGL7SublineTypes.GL7LmtdExclPersonalAdvertisingInjLawyers) > 0 && _cf.count(ED.tempGL7SublineTypes.GL7ExclPersonalAdvertisingInjury) > 0) {
      Error_Message = "[{0}] 'Limited Exclusion - Personal And Advertising Injury - Lawyers' and 'Exclusion - Personal And Advertising Injury' cannot be attached to the same policy. The class codes selected have a conflict."
    }
  }

}