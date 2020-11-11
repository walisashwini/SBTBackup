package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_4712 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var FinalProdsCompldOpsIncrdLimitTableAssignmentCLV: java.lang.String = ""
  private var LmtdProdsWithdrawalAggregateLimitCLV: java.lang.String = ""
  private var ProdsCompldOpsIncrdLimitTableAssignmentCLV: java.lang.String = ""
  private var dedFactorProdsCSLTemp1: java.lang.String
  private var Error_Message: java.lang.String
  private var LmtdProdsWithdrawalDeductibleFactorForRatingCLV: java.math.BigDecimal = 0.0
  private var LmtdProdsWithdrawalIncreasedLimitsFactorCLV: java.math.BigDecimal = 0.0
  private var LmtdProdsWithdrawalDeductibleCLV: java.lang.String = ""
  private var productWithdrawalExpensesAndLiabilityIncrdLimitFactorTemp1: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
    private var tempGL7AggLimit8Term = tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7AggLimit8Term.OptionValue
    private var tempGL7DedTerm = tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl.GL7DedTerm.OptionValue
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    LmtdProdsWithdrawalAggregateLimit()
    ProdsCompldOpsIncrdLimitTableAssignment()
    FinalProdsCompldOpsIncrdLimitTableAssignment()
    LmtdProdsWithdrawalIncreasedLimitsFactor()
    LmtdProdsWithdrawalDeductible()
    LmtdProdsWithdrawalDeductibleFactorForRating()
    LimitedProductWithdrawalDeductibleFactorcannotexceedtheLimitedProductWithdrawalIncreasedLimitsFactor()
  
    return Error_Message
  }

  private function LmtdProdsWithdrawalAggregateLimit() {
    if ((ED.tempSublineType.ProdsWithdrawalCoverage != null && ED.tempSublineType.ProdsWithdrawalCoverage != "") && ED.tempSublineType.ProdsWithdrawalCoverage == "Yes" && _cf.exists(ED.tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl)) {
      if (ED.tempGL7AggLimit8Term.DisplayName != "" && ED.tempGL7AggLimit8Term.DisplayName != null) {
        LmtdProdsWithdrawalAggregateLimitCLV = ED.tempGL7AggLimit8Term.DisplayName
      } else {
        LmtdProdsWithdrawalAggregateLimitCLV = ""
      }
    } else {
      LmtdProdsWithdrawalAggregateLimitCLV = ""
    }
  }

  private function ProdsCompldOpsIncrdLimitTableAssignment() {
    ProdsCompldOpsIncrdLimitTableAssignmentCLV = coverable.ProdsCompldOpsIncrdLimitTableAssignment
    if (coverable.ClassCode != "" && coverable.ClassCode != null) {
      ProdsCompldOpsIncrdLimitTableAssignmentCLV = _cf.readSystemTable(entity.GL7IncreasedLimitsTableA8, { SysTableReadParam.of("ClassCodeCGLProds", "ExactMatch", coverable.ClassCode) }, jurisdiction, referenceDate)
    } else {
      ProdsCompldOpsIncrdLimitTableAssignmentCLV = ""
    }
  }

  private function FinalProdsCompldOpsIncrdLimitTableAssignment() {
    if (ProdsCompldOpsIncrdLimitTableAssignmentCLV == "Refer To Co.") {
      FinalProdsCompldOpsIncrdLimitTableAssignmentCLV = coverable.ProdsCompldOpsIncrdLimitTableAssignmentOverride
    } else {
      if (ProdsCompldOpsIncrdLimitTableAssignmentCLV != "N/A") {
        FinalProdsCompldOpsIncrdLimitTableAssignmentCLV = ProdsCompldOpsIncrdLimitTableAssignmentCLV
      } else {
        FinalProdsCompldOpsIncrdLimitTableAssignmentCLV = ""
      }
    }
  }

  private function LmtdProdsWithdrawalIncreasedLimitsFactor() {
    if (LmtdProdsWithdrawalAggregateLimitCLV != "" && LmtdProdsWithdrawalAggregateLimitCLV != null) {
      if (FinalProdsCompldOpsIncrdLimitTableAssignmentCLV != "" && FinalProdsCompldOpsIncrdLimitTableAssignmentCLV != null) {
        productWithdrawalExpensesAndLiabilityIncrdLimitFactorTemp1 = _cf.readSystemTable(entity.GL7ProductWithdrawalExpen, { SysTableReadParam.of("IncreasedLmtsTableAssignmentPr", "ExactMatch", FinalProdsCompldOpsIncrdLimitTableAssignmentCLV), SysTableReadParam.of("ProdWithdrawlAggLim", "ExactMatch", LmtdProdsWithdrawalAggregateLimitCLV) }, jurisdiction, referenceDate)
        LmtdProdsWithdrawalIncreasedLimitsFactorCLV = _cf.makeBigDecimalFrom(productWithdrawalExpensesAndLiabilityIncrdLimitFactorTemp1)
      } else {
        LmtdProdsWithdrawalIncreasedLimitsFactorCLV = 0.0
      }
    } else {
      LmtdProdsWithdrawalIncreasedLimitsFactorCLV = 0
    }
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

  private function LmtdProdsWithdrawalDeductibleFactorForRating() {
    if ((ED.tempSublineType.ProdsWithdrawalCoverage != null && ED.tempSublineType.ProdsWithdrawalCoverage != "") && ED.tempSublineType.ProdsWithdrawalCoverage == "Yes" && _cf.exists(ED.tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl) && coverable.ProdsCompldOpsCov == "Products/Completed Operations") {
      if (coverable.LmtdProdsWithdrawalDeductibleFactorOverride == 0) {
        if ((FinalProdsCompldOpsIncrdLimitTableAssignmentCLV != "" && FinalProdsCompldOpsIncrdLimitTableAssignmentCLV != null) && (LmtdProdsWithdrawalDeductibleCLV != "" && LmtdProdsWithdrawalDeductibleCLV != null)) {
          dedFactorProdsCSLTemp1 = _cf.readSystemTable(entity.GL7DedFactorProdsCSLRT, { SysTableReadParam.of("IncreasedLmtsTableAssignmentPr", "ExactMatch", FinalProdsCompldOpsIncrdLimitTableAssignmentCLV), SysTableReadParam.of("ProdsCompldOpsDed", "ExactMatch", LmtdProdsWithdrawalDeductibleCLV) }, jurisdiction, referenceDate)
          LmtdProdsWithdrawalDeductibleFactorForRatingCLV = _cf.makeBigDecimalFrom(dedFactorProdsCSLTemp1)
        } else {
          LmtdProdsWithdrawalDeductibleFactorForRatingCLV = 0.0
        }
      } else {
        LmtdProdsWithdrawalDeductibleFactorForRatingCLV = coverable.LmtdProdsWithdrawalDeductibleFactorOverride
      }
    } else {
      LmtdProdsWithdrawalDeductibleFactorForRatingCLV = 0
    }
  }

  private function LimitedProductWithdrawalDeductibleFactorcannotexceedtheLimitedProductWithdrawalIncreasedLimitsFactor() {
    if (_cf.exists(ED.tempSublineType.GL7LmtdProductWithdrawalExpenseEndtPolLvl)) {
      if (LmtdProdsWithdrawalDeductibleFactorForRatingCLV > LmtdProdsWithdrawalIncreasedLimitsFactorCLV && (coverable.ClassCode != "" && coverable.ClassCode != null)) {
        Error_Message = "[{0}] Limited Product Withdrawal Deductible Factor cannot exceed the Limited Product Withdrawal Increased Limits Factor"
      }
    }
  }

}