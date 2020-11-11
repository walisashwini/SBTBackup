package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_9904 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var Error_Message: java.lang.String
  private var ProductWithdrawalELPCLV: java.lang.String = ""
  private var OwnersContractorsELPCLV: java.lang.String = ""
  private var SublineCLV: java.lang.String = ""
  private var LiquorELPCLV: java.lang.String = ""
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
  
    OwnersContractorsELP()
    LiquorELP()
    ProductWithdrawalELP()
    Subline()
    MustenterEstimatedLossPotentialOverride()
  
    return Error_Message
  }

  private function OwnersContractorsELP() {
    if (coverable.OwnersContractorsClassCode != "" && coverable.OwnersContractorsClassCode != null) {
      OwnersContractorsELPCLV = _cf.readSystemTable(entity.GL7OwnersContractorsELPTe, { SysTableReadParam.of("ClassCodeOwnersContrctrs", "ExactMatch", coverable.OwnersContractorsClassCode) }, jurisdiction, referenceDate)
    } else {
      OwnersContractorsELPCLV = ""
    }
  }

  private function LiquorELP() {
    if (coverable.LiquorClassCode != "" && coverable.LiquorClassCode != null) {
      LiquorELPCLV = _cf.readSystemTable(entity.GL7LiquorELPTextRT, { SysTableReadParam.of("ClassCodeLiquor", "ExactMatch", coverable.LiquorClassCode) }, jurisdiction, referenceDate)
    } else {
      LiquorELPCLV = ""
    }
  }

  private function ProductWithdrawalELP() {
    if (coverable.ClassCode != "" && coverable.ClassCode != null) {
      ProductWithdrawalELPCLV = _cf.readSystemTable(entity.GL7ProdsCompldOpsELPTextR, { SysTableReadParam.of("ClassCodeCGLProds", "ExactMatch", coverable.ClassCode) }, jurisdiction, referenceDate)
    } else {
      ProductWithdrawalELPCLV = ""
    }
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function MustenterEstimatedLossPotentialOverride() {
    if (SublineCLV == "Owners and Contractors" && OwnersContractorsELPCLV == "Company" && coverable.MiscIfAnyBasis == "No" && coverable.OwnersContractorsELPOverride == 0 || (SublineCLV == "Liquor" && LiquorELPCLV == "Company" && coverable.MiscIfAnyBasis == "No" && coverable.LiquorELPOverride == 0) || (SublineCLV == "Product Withdrawal" && ProductWithdrawalELPCLV == "Company" && coverable.MiscIfAnyBasis == "No" && coverable.ProductWithdrawalELPOverride == 0)) {
      Error_Message = "[{0}] Must enter Estimated Loss Potential Override"
    }
  }

}