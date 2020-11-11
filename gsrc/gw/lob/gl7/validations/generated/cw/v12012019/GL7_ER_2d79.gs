package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_2d79 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var percentageConversionTemp8: java.lang.String
  private var percentageConversionTemp5: java.lang.String
  private var SRPLocationExposureOutsidePremisesPctConvertedCLV: java.math.BigDecimal = 0.0
  private var percentageConversionTemp4: java.lang.String
  private var percentageConversionTemp7: java.lang.String
  private var SRPTotalModificationPctCLV: java.math.BigDecimal = 0.0
  private var percentageConversionTemp6: java.lang.String
  private var SRPLocationExposureInsidePremisesPctConvertedCLV: java.math.BigDecimal = 0.0
  private var SRPEmployeesPctConvertedCLV: java.math.BigDecimal = 0.0
  private var scheduleRatingMaximumDebitTemp1: java.lang.String
  private var SRPClassificationPctConvertedCLV: java.math.BigDecimal = 0.0
  private var SRPCooperationMedicalFacilitiesPctConvertedCLV: java.math.BigDecimal = 0.0
  private var SRPCooperationSafetyProgramPctConvertedCLV: java.math.BigDecimal = 0.0
  private var scheduleRatingMaximumCreditTemp1: java.lang.String
  private var SRPEquipmentPctConvertedCLV: java.math.BigDecimal = 0.0
  private var percentageConversionTemp1: java.lang.String
  private var Error_Message: java.lang.String
  private var percentageConversionTemp3: java.lang.String
  private var percentageConversionTemp2: java.lang.String
  private var SRPPremisesPctConvertedCLV: java.math.BigDecimal = 0.0
  private var SRPMaximumDebitCLV: java.math.BigDecimal = 0.0
  private var SRPMaximumCreditCLV: java.math.BigDecimal = 0.0
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7ScheduleRatingModification1 = tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7ScheduleRatingModification1
  }
  

  override public function validate(_coverable : GL7Subline) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    SRPLocationExposureOutsidePremisesPctConverted()
    SRPClassificationPctConverted()
    SRPCooperationSafetyProgramPctConverted()
    SRPLocationExposureInsidePremisesPctConverted()
    SRPEquipmentPctConverted()
    SRPEmployeesPctConverted()
    SRPCooperationMedicalFacilitiesPctConverted()
    SRPPremisesPctConverted()
    SRPTotalModificationPct()
    SRPMaximumDebit()
    SRPMaximumCredit()
    ScheduleRatingModificationcreditordebitcannotexceed25percent()
  
    return Error_Message
  }

  private function SRPLocationExposureOutsidePremisesPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "zksje6ffke6v1fisq3khcv5s9db").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "zksje6ffke6v1fisq3khcv5s9db").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp1 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "zksje6ffke6v1fisq3khcv5s9db").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPLocationExposureOutsidePremisesPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp1)
    } else {
      SRPLocationExposureOutsidePremisesPctConvertedCLV = 0.0
    }
  }

  private function SRPClassificationPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z3ciaepmj3vco2t0sddiilueqd8").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z3ciaepmj3vco2t0sddiilueqd8").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp2 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z3ciaepmj3vco2t0sddiilueqd8").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPClassificationPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp2)
    } else {
      SRPClassificationPctConvertedCLV = 0.0
    }
  }

  private function SRPCooperationSafetyProgramPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z50gqg667m3j31nmfdq85qcc6f8").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z50gqg667m3j31nmfdq85qcc6f8").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp3 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z50gqg667m3j31nmfdq85qcc6f8").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPCooperationSafetyProgramPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp3)
    } else {
      SRPCooperationSafetyProgramPctConvertedCLV = 0.0
    }
  }

  private function SRPLocationExposureInsidePremisesPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "zrkjcc7ku8t92fpvg4lomf54ob8").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "zrkjcc7ku8t92fpvg4lomf54ob8").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp4 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "zrkjcc7ku8t92fpvg4lomf54ob8").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPLocationExposureInsidePremisesPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp4)
    } else {
      SRPLocationExposureInsidePremisesPctConvertedCLV = 0.0
    }
  }

  private function SRPEquipmentPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z7pjue0oplhdrdfa6dvdhrimlaa").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z7pjue0oplhdrdfa6dvdhrimlaa").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp5 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z7pjue0oplhdrdfa6dvdhrimlaa").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPEquipmentPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp5)
    } else {
      SRPEquipmentPctConvertedCLV = 0.0
    }
  }

  private function SRPEmployeesPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z5ui01g4l12mm53fapr4sdtt09a").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z5ui01g4l12mm53fapr4sdtt09a").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp6 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z5ui01g4l12mm53fapr4sdtt09a").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPEmployeesPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp6)
    } else {
      SRPEmployeesPctConvertedCLV = 0.0
    }
  }

  private function SRPCooperationMedicalFacilitiesPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z3ugmaus5jisk9h3fmtluv7963b").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z3ugmaus5jisk9h3fmtluv7963b").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp7 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z3ugmaus5jisk9h3fmtluv7963b").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPCooperationMedicalFacilitiesPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp7)
    } else {
      SRPCooperationMedicalFacilitiesPctConvertedCLV = 0.0
    }
  }

  private function SRPPremisesPctConverted() {
    if ((ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z2sh4e06amsa9200143fd0gviqb").Assessment?.intValue()+"%" != "" && ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z2sh4e06amsa9200143fd0gviqb").Assessment?.intValue()+"%" != null) && ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      percentageConversionTemp8 = _cf.readSystemTable(entity.GL7PercentageConversionRT, { SysTableReadParam.of("PercentageText", "ExactMatch", ED.tempGL7ScheduleRatingModification1.RateFactors?.firstWhere(\ r -> r.PatternCode == "z2sh4e06amsa9200143fd0gviqb").Assessment?.intValue()+"%") }, jurisdiction, referenceDate)
      SRPPremisesPctConvertedCLV = _cf.makeBigDecimalFrom(percentageConversionTemp8)
    } else {
      SRPPremisesPctConvertedCLV = 0.0
    }
  }

  private function SRPTotalModificationPct() {
    SRPTotalModificationPctCLV = SRPLocationExposureInsidePremisesPctConvertedCLV + SRPLocationExposureOutsidePremisesPctConvertedCLV + SRPPremisesPctConvertedCLV + SRPEquipmentPctConvertedCLV + SRPClassificationPctConvertedCLV + SRPEmployeesPctConvertedCLV + SRPCooperationMedicalFacilitiesPctConvertedCLV + SRPCooperationSafetyProgramPctConvertedCLV
  }

  private function SRPMaximumDebit() {
    scheduleRatingMaximumDebitTemp1 = _cf.readSystemTable(entity.GL7ScheduleRatingMaximumD, { SysTableReadParam.of("Constant", "ExactMatch", "Y") }, jurisdiction, referenceDate)
    SRPMaximumDebitCLV = _cf.makeBigDecimalFrom(scheduleRatingMaximumDebitTemp1)
  }

  private function SRPMaximumCredit() {
    scheduleRatingMaximumCreditTemp1 = _cf.readSystemTable(entity.GL7ScheduleRatingMaximumC, { SysTableReadParam.of("Constant", "ExactMatch", "Y") }, jurisdiction, referenceDate)
    SRPMaximumCreditCLV = _cf.makeBigDecimalFrom(scheduleRatingMaximumCreditTemp1)
  }

  private function ScheduleRatingModificationcreditordebitcannotexceed25percent() {
    if (SRPTotalModificationPctCLV > SRPMaximumDebitCLV || SRPTotalModificationPctCLV < SRPMaximumCreditCLV) {
      Error_Message = "[{0}] Schedule Rating Modification credit or debit cannot exceed 25 percent"
    }
  }

}