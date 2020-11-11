package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_9d9f extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var Error_Message: java.lang.String
  private var PremOpsELPCLV: java.lang.String = ""
  private var SublineCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    PremOpsELP()
    Subline()
    MustenterEstimatedLossPotentialOverrideforPremisesOperations()
  
    return Error_Message
  }

  private function PremOpsELP() {
    if (coverable.ClassCode != "" && coverable.ClassCode != null) {
      PremOpsELPCLV = _cf.readSystemTable(entity.GL7PremOpsELPTextRT, { SysTableReadParam.of("ClassCodeCGLProds", "ExactMatch", coverable.ClassCode) }, jurisdiction, referenceDate)
    } else {
      PremOpsELPCLV = ""
    }
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function MustenterEstimatedLossPotentialOverrideforPremisesOperations() {
    if ((SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && PremOpsELPCLV == "Company" && coverable.IfAnyBasis == "No" && coverable.PremOpsELPOverride == 0) {
      Error_Message = "[{0}] Must enter Estimated Loss Potential Override for Premises/Operations"
    }
  }

}