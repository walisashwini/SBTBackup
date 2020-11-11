package gw.lob.gl7.validations.generated.ia.v12012019

uses gw.lob.common.util.*
class GL7_ER_a19f extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var eachCommonCauseBodilyInjuryILimitInt_1: java.lang.Integer
  private var Error_Message: java.lang.String
  private var eachPersonBodilyInjuryLimitInt_1: java.lang.Integer
  private var limitNumericTemp2: java.lang.String
  private var limitNumericTemp1: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7EachPersonBILimit1Term = tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7LmtsState.GL7EachPersonBILimit1Term.OptionValue
    private var tempGL7EachCommonCauseBILimit1Term = tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7LmtsState.GL7EachCommonCauseBILimit1Term.OptionValue
  }
  

  override public function validate(_coverable : GL7Subline) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    eachPersonBodilyInjuryLimitInt_1()
    eachCommonCauseBodilyInjuryILimitInt_1()
    EachPersonBodilyInjuryLimitcannotexceedEachCommonCauseBodilyInjuryLimit()
  
    return Error_Message
  }

  private function eachPersonBodilyInjuryLimitInt_1() {
    eachPersonBodilyInjuryLimitInt_1 = 0
    if (ED.tempGL7SublineTypes.Subline == "Liquor") {
      if (_cf.exists(ED.tempGL7EachPersonBILimit1Term.DisplayName) && (ED.tempGL7EachPersonBILimit1Term.DisplayName != "" && ED.tempGL7EachPersonBILimit1Term.DisplayName != null)) {
        limitNumericTemp1 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7EachPersonBILimit1Term.DisplayName) }, jurisdiction, referenceDate)
        eachPersonBodilyInjuryLimitInt_1 = _cf.makeIntegerFrom(limitNumericTemp1)
      } else {
        eachPersonBodilyInjuryLimitInt_1 = 0
      }
    }
  }

  private function eachCommonCauseBodilyInjuryILimitInt_1() {
    eachCommonCauseBodilyInjuryILimitInt_1 = 0
    if (ED.tempGL7SublineTypes.Subline == "Liquor") {
      if (_cf.exists(ED.tempGL7EachCommonCauseBILimit1Term.DisplayName) && (ED.tempGL7EachCommonCauseBILimit1Term.DisplayName != "" && ED.tempGL7EachCommonCauseBILimit1Term.DisplayName != null)) {
        limitNumericTemp2 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7EachCommonCauseBILimit1Term.DisplayName) }, jurisdiction, referenceDate)
        eachCommonCauseBodilyInjuryILimitInt_1 = _cf.makeIntegerFrom(limitNumericTemp2)
      } else {
        eachCommonCauseBodilyInjuryILimitInt_1 = 0
      }
    }
  }

  private function EachPersonBodilyInjuryLimitcannotexceedEachCommonCauseBodilyInjuryLimit() {
    if (ED.tempGL7SublineTypes.Subline == "Liquor") {
      if (eachPersonBodilyInjuryLimitInt_1 > eachCommonCauseBodilyInjuryILimitInt_1) {
        Error_Message = "[{0}] Each Person Bodily Injury Limit cannot exceed Each Common Cause Bodily Injury Limit"
      }
    }
  }

}