package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_de2d extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var Error_Message: java.lang.String
  private var prodsWithdrawalCoverage_1: java.lang.String
  private var SublineCLV: java.lang.String = ""
  private var LmtdProdsWithdrawalDeductibleCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
    private var tempGL7DedTerm = tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7DedTerm.OptionValue
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    LmtdProdsWithdrawalDeductible()
    Subline()
    prodsWithdrawalCoverage_1()
    MustenterLimitedProductWithdrawalDeductibleFactorOverride()
  
    return Error_Message
  }

  private function LmtdProdsWithdrawalDeductible() {
    if ((ED.tempSublineType.ProdsWithdrawalCoverage != null && ED.tempSublineType.ProdsWithdrawalCoverage != "") && ED.tempSublineType.ProdsWithdrawalCoverage == "Yes" && _cf.exists(ED.tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl)) {
      if (ED.tempGL7DedTerm.DisplayName != "" && ED.tempGL7DedTerm.DisplayName != null) {
        LmtdProdsWithdrawalDeductibleCLV = ED.tempGL7DedTerm.DisplayName
      } else {
        LmtdProdsWithdrawalDeductibleCLV = ""
      }
    } else {
      LmtdProdsWithdrawalDeductibleCLV = ""
    }
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function prodsWithdrawalCoverage_1() {
    if (ED.tempSublineType.ProdsWithdrawalCoverage != null && ED.tempSublineType.ProdsWithdrawalCoverage != "") {
      prodsWithdrawalCoverage_1 = ED.tempSublineType.ProdsWithdrawalCoverage
    } else {
      prodsWithdrawalCoverage_1 = ""
    }
  }

  private function MustenterLimitedProductWithdrawalDeductibleFactorOverride() {
    if ((SublineCLV == "Products/Completed Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && prodsWithdrawalCoverage_1 == "Yes" && (LmtdProdsWithdrawalDeductibleCLV == "250 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "500 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "750 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "1,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "2,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "3,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "4,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "5,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "10,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "15,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "20,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "25,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "50,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "75,000 Per Claim" || LmtdProdsWithdrawalDeductibleCLV == "100,000 Per Claim") && coverable.IfAnyBasisProdsCompldOps == "No" && coverable.LmtdProdsWithdrawalDeductibleFactorOverride == 0) {
      Error_Message = "[{0}] Must enter Limited Product Withdrawal Deductible Factor Override"
    }
  }

}