package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_b27b extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var ProdsCompldOpsAggregateLimitCLV: java.lang.String = ""
  private var FinalProdsCompldOpsIncrdLimitTableAssignmentCLV: java.lang.String = ""
  private var ProdsCompldOpsIncrdLimitTableAssignmentCLV: java.lang.String = ""
  private var Error_Message: java.lang.String
  private var PremOpsProdsEachOccurrenceLimitCLV: java.lang.String = ""
  private var iLFProdsTemp1: java.lang.String
  private var ProdsCompldOpsIncrdLimitFactorCLV: java.math.BigDecimal = 0.0
  private var SublineCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
    private var tempGL7ProdsCompldOpsAggLimitTerm = tempSublineType.GL7Lmts.GL7ProdsCompldOpsAggLimitTerm.OptionValue
    private var tempGL7PremOpsProdsEachOccurrenceLimitTerm = tempSublineType.GL7Lmts.GL7PremOpsProdsEachOccurrenceLimitTerm.OptionValue
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    Subline()
    ProdsCompldOpsIncrdLimitTableAssignment()
    FinalProdsCompldOpsIncrdLimitTableAssignment()
    ProdsCompldOpsAggregateLimit()
    PremOpsProdsEachOccurrenceLimit()
    ProdsCompldOpsIncrdLimitFactor()
    TheProdsCompldOpsBIDeductibleFactorcannotexceedtheIncreasedLimitsFactor()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
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

  private function ProdsCompldOpsAggregateLimit() {
    if (_cf.exists(ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName) && (ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName != null && ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName != "")) {
      ProdsCompldOpsAggregateLimitCLV = ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName
    } else {
      ProdsCompldOpsAggregateLimitCLV = ""
    }
  }

  private function PremOpsProdsEachOccurrenceLimit() {
    if (_cf.exists(ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName) && (ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName != null && ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName != "")) {
      PremOpsProdsEachOccurrenceLimitCLV = ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName
    } else {
      PremOpsProdsEachOccurrenceLimitCLV = ""
    }
  }

  private function ProdsCompldOpsIncrdLimitFactor() {
    if (SublineCLV == "Products/Completed Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") {
      if ((FinalProdsCompldOpsIncrdLimitTableAssignmentCLV != "" && FinalProdsCompldOpsIncrdLimitTableAssignmentCLV != null) && (PremOpsProdsEachOccurrenceLimitCLV != "" && PremOpsProdsEachOccurrenceLimitCLV != null) && (ProdsCompldOpsAggregateLimitCLV != "" && ProdsCompldOpsAggregateLimitCLV != null) && ProdsCompldOpsAggregateLimitCLV != "Not Applicable") {
        iLFProdsTemp1 = _cf.readSystemTable(entity.GL7ILFProdsRT, { SysTableReadParam.of("IncreasedLmtsTableAssignmentPr", "ExactMatch", FinalProdsCompldOpsIncrdLimitTableAssignmentCLV), SysTableReadParam.of("EachOccurrenceLim", "ExactMatch", PremOpsProdsEachOccurrenceLimitCLV), SysTableReadParam.of("GeneralAggLim", "ExactMatch", ProdsCompldOpsAggregateLimitCLV) }, jurisdiction, referenceDate)
        ProdsCompldOpsIncrdLimitFactorCLV = _cf.makeBigDecimalFrom(iLFProdsTemp1)
      } else {
        ProdsCompldOpsIncrdLimitFactorCLV = 0.0
      }
    } else {
      ProdsCompldOpsIncrdLimitFactorCLV = 0
    }
  }

  private function TheProdsCompldOpsBIDeductibleFactorcannotexceedtheIncreasedLimitsFactor() {
    if ((SublineCLV == "Products/Completed Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && (coverable.ProdsCompldOpsBIDeductible == "250 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "500 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "750 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "1,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "2,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "3,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "4,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "5,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "10,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "15,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "20,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "25,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "50,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "75,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "100,000 Per Claim") && coverable.ProdsCompldOpsBIDeductibleFactorOverride > ProdsCompldOpsIncrdLimitFactorCLV) {
      Error_Message = "[{0}] The Prods Compld Ops BI Deductible Factor cannot exceed the Increased Limits Factor"
    }
  }

}