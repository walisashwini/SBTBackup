package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_7e47 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var ERPMaturityLatestYearCLV: java.lang.Integer = 0
  private var Error_Message: java.lang.String
  private var daysDifLatestYearPolicyEffectiveAndLatestValuation_1: gw.rating.flow.TimeSpan
  private var eRPMaturityLatestYearTemp2: java.math.BigDecimal
  private var eRPMaturityLatestYearTemp1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7ERPLatestYearEffectiveDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationLatestYear.GL7ERPLatestYearEffectiveDateTerm
    private var tempGL7ERPLatestYearLatestValuationDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationLatestYear.GL7ERPLatestYearLatestValuationDateTerm
    private var tempGL7ERPLatestYearWithSameCarrierTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationLatestYear.GL7ERPLatestYearWithSameCarrierTerm.OptionValue
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    daysDifLatestYearPolicyEffectiveAndLatestValuation_1()
    ERPMaturityLatestYear()
    LatestYearLatestValuationDatemustbeatleast18monthsafterLatestYearEffectiveDate()
  
    return Error_Message
  }

  private function daysDifLatestYearPolicyEffectiveAndLatestValuation_1() {
    if (_cf.exists(ED.tempGL7ERPLatestYearEffectiveDateTerm.Value) && _cf.exists(ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7ERPLatestYearEffectiveDateTerm.Value != null && ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 0)) {
      daysDifLatestYearPolicyEffectiveAndLatestValuation_1 = _cf.subtractDates(ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value,ED.tempGL7ERPLatestYearEffectiveDateTerm.Value)
    }
  }

  private function ERPMaturityLatestYear() {
    if (_cf.exists(ED.tempGL7ERPLatestYearEffectiveDateTerm.Value) && _cf.exists(ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7ERPLatestYearEffectiveDateTerm.Value != null && ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 0)) {
      eRPMaturityLatestYearTemp1 = _cf.days(daysDifLatestYearPolicyEffectiveAndLatestValuation_1)
      eRPMaturityLatestYearTemp2 = _cf.RoundUsingScale(0, (eRPMaturityLatestYearTemp1 / 30.0) - 0.499)
      ERPMaturityLatestYearCLV = _cf.makeIntegerFrom(eRPMaturityLatestYearTemp2)
    } else {
      ERPMaturityLatestYearCLV = 0
    }
  }

  private function LatestYearLatestValuationDatemustbeatleast18monthsafterLatestYearEffectiveDate() {
    if (_cf.exists(ED.tempGL7ERPLatestYearWithSameCarrierTerm.DisplayName) && ((ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 0 && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && ERPMaturityLatestYearCLV < 18 && ED.tempGL7ERPLatestYearWithSameCarrierTerm.DisplayName == "Yes")) {
      Error_Message = "[{0}] Latest Year Latest Valuation Date must be at least 18 months after Latest Year Effective Date"
    }
  }

}