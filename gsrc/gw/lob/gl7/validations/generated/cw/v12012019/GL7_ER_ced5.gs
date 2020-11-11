package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_ced5 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var ERPMaturitySecondLatestYearCLV: java.lang.Integer = 0
  private var Error_Message: java.lang.String
  private var daysDifSecondLatestYearPolicyEffectiveAndLatestValuation_1: gw.rating.flow.TimeSpan
  private var eRPMaturitySecondLatestYearTemp2: java.math.BigDecimal
  private var eRPMaturitySecondLatestYearTemp1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7ERPSecondLatestYearEffectiveDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationSecondLatestYear.GL7ERPSecondLatestYearEffectiveDateTerm
    private var tempGL7ERPSecondLatestYearLatestValuationDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationSecondLatestYear.GL7ERPSecondLatestYearLatestValuationDateTerm
    private var tempGL7ERPSecondLatestYearWithSameCarrierTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationSecondLatestYear.GL7ERPSecondLatestYearWithSameCarrierTerm.OptionValue
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    daysDifSecondLatestYearPolicyEffectiveAndLatestValuation_1()
    ERPMaturitySecondLatestYear()
    SecondLatestYearLatestValuationDatemustbeatleast18monthsafterSecondLatestYearEffectiveDate()
  
    return Error_Message
  }

  private function daysDifSecondLatestYearPolicyEffectiveAndLatestValuation_1() {
    if (_cf.exists(ED.tempGL7ERPSecondLatestYearEffectiveDateTerm.Value) && _cf.exists(ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7ERPSecondLatestYearEffectiveDateTerm.Value != null && ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 1)) {
      daysDifSecondLatestYearPolicyEffectiveAndLatestValuation_1 = _cf.subtractDates(ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value,ED.tempGL7ERPSecondLatestYearEffectiveDateTerm.Value)
    }
  }

  private function ERPMaturitySecondLatestYear() {
    if (_cf.exists(ED.tempGL7ERPSecondLatestYearEffectiveDateTerm.Value) && _cf.exists(ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7ERPSecondLatestYearEffectiveDateTerm.Value != null && ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 1)) {
      eRPMaturitySecondLatestYearTemp1 = _cf.days(daysDifSecondLatestYearPolicyEffectiveAndLatestValuation_1)
      eRPMaturitySecondLatestYearTemp2 = _cf.RoundUsingScale(0, (eRPMaturitySecondLatestYearTemp1 / 30.0) - 0.499)
      ERPMaturitySecondLatestYearCLV = _cf.makeIntegerFrom(eRPMaturitySecondLatestYearTemp2)
    } else {
      ERPMaturitySecondLatestYearCLV = 0
    }
  }

  private function SecondLatestYearLatestValuationDatemustbeatleast18monthsafterSecondLatestYearEffectiveDate() {
    if (_cf.exists(ED.tempGL7ERPSecondLatestYearWithSameCarrierTerm.DisplayName) && ((ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 1 && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && ERPMaturitySecondLatestYearCLV < 18 && ED.tempGL7ERPSecondLatestYearWithSameCarrierTerm.DisplayName == "Yes")) {
      Error_Message = "[{0}] Second Latest Year Latest Valuation Date must be at least 18 months after Second Latest Year Effective Date"
    }
  }

}