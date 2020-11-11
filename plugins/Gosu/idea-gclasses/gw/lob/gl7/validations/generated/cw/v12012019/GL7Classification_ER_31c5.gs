package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_31c5 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var ProdsCompldOpsELPCLV: java.lang.String = ""
  private var Error_Message: java.lang.String
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
  
    ProdsCompldOpsELP()
    Subline()
    MustenterEstimatedLossPotentialOverrideforProductsCompletedOperations()
  
    return Error_Message
  }

  private function ProdsCompldOpsELP() {
    if (coverable.ClassCode != "" && coverable.ClassCode != null) {
      ProdsCompldOpsELPCLV = _cf.readSystemTable(entity.GL7ProdsCompldOpsELPTextR, { SysTableReadParam.of("ClassCodeCGLProds", "ExactMatch", coverable.ClassCode) }, jurisdiction, referenceDate)
    } else {
      ProdsCompldOpsELPCLV = ""
    }
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function MustenterEstimatedLossPotentialOverrideforProductsCompletedOperations() {
    if ((SublineCLV == "Products/Completed Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && ProdsCompldOpsELPCLV == "Company" && coverable.IfAnyBasisProdsCompldOps == "No" && coverable.ProdsCompldOpsELPOverride == 0 && (coverable.ProdsCompldOpsCov != "" && coverable.ProdsCompldOpsCov != null) && coverable.ProdsCompldOpsCov != "Included") {
      Error_Message = "[{0}] Must enter Estimated Loss Potential Override for Products/Completed Operations"
    }
  }

}