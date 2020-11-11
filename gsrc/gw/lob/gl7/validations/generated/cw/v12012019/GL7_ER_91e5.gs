package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_91e5 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var ERPMaturityThirdLatestYearCLV: java.lang.Integer = 0
  private var Error_Message: java.lang.String
  private var eRPMaturityThirdLatestYearTemp2: java.math.BigDecimal
  private var daysDifThirdLatestYearPolicyEffectiveAndLatestValuation_1: gw.rating.flow.TimeSpan
  private var eRPMaturityThirdLatestYearTemp1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7ERPThirdLatestYearLatestValuationDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationThirdLatestYear.GL7ERPThirdLatestYearLatestValuationDateTerm
    private var tempGL7ERPThirdLatestYearEffectiveDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationThirdLatestYear.GL7ERPThirdLatestYearEffectiveDateTerm
    private var tempGL7ERPThirdLatestYearWithSameCarrierTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationThirdLatestYear.GL7ERPThirdLatestYearWithSameCarrierTerm.OptionValue
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    daysDifThirdLatestYearPolicyEffectiveAndLatestValuation_1()
    ERPMaturityThirdLatestYear()
    ThirdLatestYearLatestValuationDatemustbeatleast18monthsafterThirdLatestYearEffectiveDate()
  
    return Error_Message
  }

  private function daysDifThirdLatestYearPolicyEffectiveAndLatestValuation_1() {
    if (_cf.exists(ED.tempGL7ERPThirdLatestYearEffectiveDateTerm.Value) && _cf.exists(ED.tempGL7ERPThirdLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7ERPThirdLatestYearEffectiveDateTerm.Value != null && ED.tempGL7ERPThirdLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 1)) {
      daysDifThirdLatestYearPolicyEffectiveAndLatestValuation_1 = _cf.subtractDates(ED.tempGL7ERPThirdLatestYearLatestValuationDateTerm.Value,ED.tempGL7ERPThirdLatestYearEffectiveDateTerm.Value)
    }
  }

  private function ERPMaturityThirdLatestYear() {
    if (_cf.exists(ED.tempGL7ERPThirdLatestYearEffectiveDateTerm.Value) && _cf.exists(ED.tempGL7ERPThirdLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7ERPThirdLatestYearEffectiveDateTerm.Value != null && ED.tempGL7ERPThirdLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 1)) {
      eRPMaturityThirdLatestYearTemp1 = _cf.days(daysDifThirdLatestYearPolicyEffectiveAndLatestValuation_1)
      eRPMaturityThirdLatestYearTemp2 = _cf.RoundUsingScale(0, (eRPMaturityThirdLatestYearTemp1 / 30.0) - 0.499)
      ERPMaturityThirdLatestYearCLV = _cf.makeIntegerFrom(eRPMaturityThirdLatestYearTemp2)
    } else {
      ERPMaturityThirdLatestYearCLV = 0
    }
  }

  private function ThirdLatestYearLatestValuationDatemustbeatleast18monthsafterThirdLatestYearEffectiveDate() {
    if (_cf.exists(ED.tempGL7ERPThirdLatestYearWithSameCarrierTerm.DisplayName) && ((ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 2 && ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && ERPMaturityThirdLatestYearCLV < 18 && ED.tempGL7ERPThirdLatestYearWithSameCarrierTerm.DisplayName == "Yes")) {
      Error_Message = "[{0}] Third Latest Year Latest Valuation Date must be at least 18 months after Third Latest Year Effective Date"
    }
  }

}