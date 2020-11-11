package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_f915 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var Error_Message: java.lang.String
  private var SublineCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    Subline()
    ExposureMustBeZeroWhenIfAnyBasisIsYes()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function ExposureMustBeZeroWhenIfAnyBasisIsYes() {
    if ((SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && (coverable.IfAnyBasis == "Yes" && coverable.PremOpsExposure != 0) || SublineCLV == "Owners and Contractors" && (coverable.MiscIfAnyBasis == "Yes" && coverable.OwnersContractorsExposure != 0) || SublineCLV == "Liquor" && (coverable.MiscIfAnyBasis == "Yes" && coverable.LiquorExposure != 0) || SublineCLV == "Railroad" && (coverable.MiscIfAnyBasis == "Yes" && coverable.RailroadExposure != 0) || (SublineCLV == "Underground Storage Tank" && (coverable.MiscIfAnyBasis == "Yes" && coverable.USTExposure != 0)) || ((SublineCLV == "Products/Completed Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && (coverable.IfAnyBasisProdsCompldOps == "Yes" && coverable.ProdsCompldOpsExposure != 0))) {
      Error_Message = "[{0}] Exposure Must Be Zero When If Any Basis Is Yes"
    }
  }

}