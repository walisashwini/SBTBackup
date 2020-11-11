package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_827f extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
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
    MustenterDeductibleFactorOverride()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function MustenterDeductibleFactorOverride() {
    if (SublineCLV == "Product Withdrawal" && (coverable.ProductWithdrawalDeductible == "250 Per Claim" || coverable.ProductWithdrawalDeductible == "500 Per Claim" || coverable.ProductWithdrawalDeductible == "750 Per Claim" || coverable.ProductWithdrawalDeductible == "1,000 Per Claim" || coverable.ProductWithdrawalDeductible == "2,000 Per Claim" || coverable.ProductWithdrawalDeductible == "3,000 Per Claim" || coverable.ProductWithdrawalDeductible == "4,000 Per Claim" || coverable.ProductWithdrawalDeductible == "5,000 Per Claim" || coverable.ProductWithdrawalDeductible == "10,000 Per Claim" || coverable.ProductWithdrawalDeductible == "15,000 Per Claim" || coverable.ProductWithdrawalDeductible == "20,000 Per Claim" || coverable.ProductWithdrawalDeductible == "25,000 Per Claim" || coverable.ProductWithdrawalDeductible == "50,000 Per Claim" || coverable.ProductWithdrawalDeductible == "75,000 Per Claim" || coverable.ProductWithdrawalDeductible == "100,000 Per Claim") && coverable.ProductWithdrawalDeductibleFactorOverride == 0) {
      Error_Message = "[{0}] Must enter Deductible Factor Override"
    }
    if (SublineCLV == "Liquor" && (coverable.LiquorDeductible == "250 Per Claim" || coverable.LiquorDeductible == "500 Per Claim" || coverable.LiquorDeductible == "750 Per Claim" || coverable.LiquorDeductible == "1,000 Per Claim" || coverable.LiquorDeductible == "2,500 Per Claim" || coverable.LiquorDeductible == "5,000 Per Claim" || coverable.LiquorDeductible == "10,000 Per Claim" || coverable.LiquorDeductible == "15,000 Per Claim" || coverable.LiquorDeductible == "20,000 Per Claim" || coverable.LiquorDeductible == "25,000 Per Claim") && coverable.MiscIfAnyBasis == "No" && coverable.LiquorDedFactorOverride == 0) {
      Error_Message = "[{0}] Must enter Deductible Factor Override"
    }
  }

}