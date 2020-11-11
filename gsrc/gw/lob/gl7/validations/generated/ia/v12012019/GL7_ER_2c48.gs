package gw.lob.gl7.validations.generated.ia.v12012019

uses gw.lob.common.util.*
class GL7_ER_2c48 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var Error_Message: java.lang.String
  private var limitNumericTemp2Temp1: java.lang.String
  private var limitNumericTemp1Temp1: java.lang.String
  private var limitNumericTemp2: java.lang.Integer
  private var limitNumericTemp1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7Lmts = tempGL7SublineTypes.GL7Lmts
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    EachCommonCauseLimitcannotexceedAggregateLimit()
  
    return Error_Message
  }

  private function EachCommonCauseLimitcannotexceedAggregateLimit() {
    if (_cf.exists(ED.tempGL7Lmts.GL7AggLimit1Term.OptionValue.DisplayName) && _cf.exists(ED.tempGL7Lmts.GL7EachCommonCauseLimitTerm.OptionValue.DisplayName) && ED.tempGL7SublineTypes.Subline == "Liquor") {
      limitNumericTemp2Temp1 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7Lmts.GL7AggLimit1Term.OptionValue.DisplayName) }, jurisdiction, referenceDate)
      limitNumericTemp2 = _cf.makeIntegerFrom(limitNumericTemp2Temp1)
      limitNumericTemp1Temp1 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7Lmts.GL7EachCommonCauseLimitTerm.OptionValue.DisplayName) }, jurisdiction, referenceDate)
      limitNumericTemp1 = _cf.makeIntegerFrom(limitNumericTemp1Temp1)
      if (limitNumericTemp1 > limitNumericTemp2) {
        Error_Message = "[{0}] Each Common Cause Limit cannot exceed Aggregate Limit"
      }
    }
  }

}