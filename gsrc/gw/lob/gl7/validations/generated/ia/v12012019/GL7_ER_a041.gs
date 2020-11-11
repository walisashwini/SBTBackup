package gw.lob.gl7.validations.generated.ia.v12012019

uses gw.lob.common.util.*
class GL7_ER_a041 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var eachCommonCauseBodilyInjuryILimitInt_1: java.lang.Integer
  private var Error_Message: java.lang.String
  private var limitNumericTemp1Temp1: java.lang.String
  private var limitNumericTemp2: java.lang.String
  private var limitNumericTemp1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7EachCommonCauseBILimit1Term = tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7LmtsState.GL7EachCommonCauseBILimit1Term.OptionValue
  }
  

  override public function validate(_coverable : GL7Subline) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    eachCommonCauseBodilyInjuryILimitInt_1()
    EachCommonCauseBodilyInjuryLimitcannotexceedAggregateLimit()
  
    return Error_Message
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

  private function EachCommonCauseBodilyInjuryLimitcannotexceedAggregateLimit() {
    if (_cf.exists(ED.tempGL7SublineTypes.GL7Lmts.GL7AggLimit1Term.OptionValue.DisplayName) && ED.tempGL7SublineTypes.Subline == "Liquor") {
      limitNumericTemp1Temp1 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7SublineTypes.GL7Lmts.GL7AggLimit1Term.OptionValue.DisplayName) }, jurisdiction, referenceDate)
      limitNumericTemp1 = _cf.makeIntegerFrom(limitNumericTemp1Temp1)
      if (eachCommonCauseBodilyInjuryILimitInt_1 > limitNumericTemp1) {
        Error_Message = "[{0}] Each Common Cause Bodily Injury Limit cannot exceed Aggregate Limit"
      }
    }
  }

}