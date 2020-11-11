package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_c668 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var PremOpsIncrdLimitTableAssignmentCLV: java.lang.String = ""
  private var PremOpsIncrdLimitFactorCLV: java.math.BigDecimal = 0.0
  private var FinalPremOpsIncrdLimitTableAssignmentCLV: java.lang.String = ""
  private var Error_Message: java.lang.String
  private var PremOpsProdsEachOccurrenceLimitCLV: java.lang.String = ""
  private var FinalPremOpsIncrdLimitTableAssignmentIntCLV: java.lang.Integer = 0
  private var SublineCLV: java.lang.String = ""
  private var iLFPremOpsTemp1: java.lang.String
  private var GeneralAggregateLimitCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
    private var tempGL7PremOpsProdsEachOccurrenceLimitTerm = tempSublineType.GL7Lmts.GL7PremOpsProdsEachOccurrenceLimitTerm.OptionValue
    private var tempGL7GeneralAggLimit1Term = tempSublineType.GL7Lmts.GL7GeneralAggLimit1Term.OptionValue
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    Subline()
    PremOpsIncrdLimitTableAssignment()
    FinalPremOpsIncrdLimitTableAssignment()
    FinalPremOpsIncrdLimitTableAssignmentInt()
    GeneralAggregateLimit()
    PremOpsProdsEachOccurrenceLimit()
    PremOpsIncrdLimitFactor()
    ThePremOpsBIandPDDeductibleFactorcannotexceedtheIncreasedLimitsFactor()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function PremOpsIncrdLimitTableAssignment() {
    PremOpsIncrdLimitTableAssignmentCLV = coverable.PremOpsIncrdLimitTableAssignment
    if (coverable.ClassCode != "" && coverable.ClassCode != null) {
      PremOpsIncrdLimitTableAssignmentCLV = _cf.readSystemTable(entity.GL7PremOpsIncrdLimitTable, { SysTableReadParam.of("ClassCodeCGLProds", "ExactMatch", coverable.ClassCode) }, jurisdiction, referenceDate)
    } else {
      PremOpsIncrdLimitTableAssignmentCLV = ""
    }
  }

  private function FinalPremOpsIncrdLimitTableAssignment() {
    if (PremOpsIncrdLimitTableAssignmentCLV == "Refer To Co.") {
      FinalPremOpsIncrdLimitTableAssignmentCLV = coverable.PremOpsIncrdLimitTableAssignmentOverride
    } else {
      FinalPremOpsIncrdLimitTableAssignmentCLV = PremOpsIncrdLimitTableAssignmentCLV
    }
  }

  private function FinalPremOpsIncrdLimitTableAssignmentInt() {
    if (FinalPremOpsIncrdLimitTableAssignmentCLV != null && FinalPremOpsIncrdLimitTableAssignmentCLV != "") {
      FinalPremOpsIncrdLimitTableAssignmentIntCLV = _cf.makeIntegerFrom(FinalPremOpsIncrdLimitTableAssignmentCLV)
    } else {
      FinalPremOpsIncrdLimitTableAssignmentIntCLV = 0
    }
  }

  private function GeneralAggregateLimit() {
    if (_cf.exists(ED.tempGL7GeneralAggLimit1Term.DisplayName) && (ED.tempGL7GeneralAggLimit1Term.DisplayName != null && ED.tempGL7GeneralAggLimit1Term.DisplayName != "")) {
      GeneralAggregateLimitCLV = ED.tempGL7GeneralAggLimit1Term.DisplayName
    } else {
      GeneralAggregateLimitCLV = ""
    }
  }

  private function PremOpsProdsEachOccurrenceLimit() {
    if (_cf.exists(ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName) && (ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName != null && ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName != "")) {
      PremOpsProdsEachOccurrenceLimitCLV = ED.tempGL7PremOpsProdsEachOccurrenceLimitTerm.DisplayName
    } else {
      PremOpsProdsEachOccurrenceLimitCLV = ""
    }
  }

  private function PremOpsIncrdLimitFactor() {
    if (SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") {
      if ((FinalPremOpsIncrdLimitTableAssignmentCLV != "" && FinalPremOpsIncrdLimitTableAssignmentCLV != null) && (PremOpsProdsEachOccurrenceLimitCLV != "" && PremOpsProdsEachOccurrenceLimitCLV != null) && (GeneralAggregateLimitCLV != "" && GeneralAggregateLimitCLV != null)) {
        iLFPremOpsTemp1 = _cf.readSystemTable(entity.GL7ILFPremOpsRT, { SysTableReadParam.of("IncreasedLmtsTableAssignmentPr", "ExactMatch", FinalPremOpsIncrdLimitTableAssignmentIntCLV), SysTableReadParam.of("EachOccurrenceLim", "ExactMatch", PremOpsProdsEachOccurrenceLimitCLV), SysTableReadParam.of("GeneralAggLim", "ExactMatch", GeneralAggregateLimitCLV) }, jurisdiction, referenceDate)
        PremOpsIncrdLimitFactorCLV = _cf.makeBigDecimalFrom(iLFPremOpsTemp1)
      } else {
        PremOpsIncrdLimitFactorCLV = 0.0
      }
    } else {
      PremOpsIncrdLimitFactorCLV = 0
    }
  }

  private function ThePremOpsBIandPDDeductibleFactorcannotexceedtheIncreasedLimitsFactor() {
    if ((SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && (coverable.PremOpsBIPDDeductible == "250 Per Claim" || coverable.PremOpsBIPDDeductible == "500 Per Claim" || coverable.PremOpsBIPDDeductible == "750 Per Claim" || coverable.PremOpsBIPDDeductible == "1,000 Per Claim" || coverable.PremOpsBIPDDeductible == "2,000 Per Claim" || coverable.PremOpsBIPDDeductible == "3,000 Per Claim" || coverable.PremOpsBIPDDeductible == "4,000 Per Claim" || coverable.PremOpsBIPDDeductible == "5,000 Per Claim" || coverable.PremOpsBIPDDeductible == "10,000 Per Claim" || coverable.PremOpsBIPDDeductible == "15,000 Per Claim" || coverable.PremOpsBIPDDeductible == "20,000 Per Claim" || coverable.PremOpsBIPDDeductible == "25,000 Per Claim" || coverable.PremOpsBIPDDeductible == "50,000 Per Claim" || coverable.PremOpsBIPDDeductible == "75,000 Per Claim" || coverable.PremOpsBIPDDeductible == "100,000 Per Claim") && coverable.PremOpsBIPDDeductibleFactorOverride > PremOpsIncrdLimitFactorCLV) {
      Error_Message = "[{0}] The Prem Ops BI and PD Deductible Factor cannot exceed the Increased Limits Factor"
    }
  }

}