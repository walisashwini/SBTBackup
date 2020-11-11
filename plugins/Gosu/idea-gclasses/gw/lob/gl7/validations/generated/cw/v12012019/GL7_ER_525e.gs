package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_525e extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    CG2833cannotbeattachedwhenCG0040isonthepolicy()
  
    return Error_Message
  }

  private function CG2833cannotbeattachedwhenCG0040isonthepolicy() {
    if (_cf.count(ED.tempGL7SublineTypes.GL7PollutionLiabLmtdCovFormDesigntdSites) > 0 && _cf.count(ED.tempGL7SublineTypes.GL7VoluntaryCleanUpCostsReimbursement) > 0) {
      Error_Message = "[{0}] 'Voluntary Clean-Up Costs Reimbursement' cannot be attached when 'Pollution Liability Limited Coverage Form Designated Sites' is on the policy"
    }
  }

}