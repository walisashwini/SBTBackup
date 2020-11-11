package gw.lob.gl7.validations.generated.ia.v12012019

uses gw.lob.common.util.*
class GL7_ER_7444 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var Error_Message: java.lang.String
  private var limitNumericTemp2: java.lang.String
  private var eachPersonLossOfMeansOfSupportLimitInt_1: java.lang.Integer
  private var eachCommonCauseLossOfMeansOfSupportLimitInt_1: java.lang.Integer
  private var limitNumericTemp1: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7EachPersonLossOfMeansOfSupportLimit1Term = tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7LmtsState.GL7EachPersonLossOfMeansOfSupportLimit1Term.OptionValue
    private var tempGL7EachCommonCauseLossOfMeansOfSupportLimit1Term = tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7LmtsState.GL7EachCommonCauseLossOfMeansOfSupportLimit1Term.OptionValue
  }
  

  override public function validate(_coverable : GL7Subline) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    eachPersonLossOfMeansOfSupportLimitInt_1()
    eachCommonCauseLossOfMeansOfSupportLimitInt_1()
    EachPersonLossofMeansofSupportLimitcannotexceedEachCommonCauseLossofMeansofSupportLimit()
  
    return Error_Message
  }

  private function eachPersonLossOfMeansOfSupportLimitInt_1() {
    eachPersonLossOfMeansOfSupportLimitInt_1 = 0
    if (ED.tempGL7SublineTypes.Subline == "Liquor") {
      if (_cf.exists(ED.tempGL7EachPersonLossOfMeansOfSupportLimit1Term.DisplayName) && (ED.tempGL7EachPersonLossOfMeansOfSupportLimit1Term.DisplayName != "" && ED.tempGL7EachPersonLossOfMeansOfSupportLimit1Term.DisplayName != null)) {
        limitNumericTemp1 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7EachPersonLossOfMeansOfSupportLimit1Term.DisplayName) }, jurisdiction, referenceDate)
        eachPersonLossOfMeansOfSupportLimitInt_1 = _cf.makeIntegerFrom(limitNumericTemp1)
      } else {
        eachPersonLossOfMeansOfSupportLimitInt_1 = 0
      }
    }
  }

  private function eachCommonCauseLossOfMeansOfSupportLimitInt_1() {
    eachCommonCauseLossOfMeansOfSupportLimitInt_1 = 0
    if (ED.tempGL7SublineTypes.Subline == "Liquor") {
      if (_cf.exists(ED.tempGL7EachCommonCauseLossOfMeansOfSupportLimit1Term.DisplayName) && (ED.tempGL7EachCommonCauseLossOfMeansOfSupportLimit1Term.DisplayName != "" && ED.tempGL7EachCommonCauseLossOfMeansOfSupportLimit1Term.DisplayName != null)) {
        limitNumericTemp2 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7EachCommonCauseLossOfMeansOfSupportLimit1Term.DisplayName) }, jurisdiction, referenceDate)
        eachCommonCauseLossOfMeansOfSupportLimitInt_1 = _cf.makeIntegerFrom(limitNumericTemp2)
      } else {
        eachCommonCauseLossOfMeansOfSupportLimitInt_1 = 0
      }
    }
  }

  private function EachPersonLossofMeansofSupportLimitcannotexceedEachCommonCauseLossofMeansofSupportLimit() {
    if (ED.tempGL7SublineTypes.Subline == "Liquor") {
      if (eachPersonLossOfMeansOfSupportLimitInt_1 > eachCommonCauseLossOfMeansOfSupportLimitInt_1) {
        Error_Message = "[{0}] Each Person Loss of Means of Support Limit cannot exceed Each Common Cause Loss of Means of Support Limit"
      }
    }
  }

}