package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_2092 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7ERPSecondLatestYearLatestValuationDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationSecondLatestYear.GL7ERPSecondLatestYearLatestValuationDateTerm
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    SecondLastestYearLatestValuationDatecannotbebeforeStartofBusinessDate()
  
    return Error_Message
  }

  private function SecondLastestYearLatestValuationDatecannotbebeforeStartofBusinessDate() {
    if (_cf.exists(ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 1 && ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceBusinessStartDate != null && _cf.isoDateWithoutTime(ED.tempGL7ERPSecondLatestYearLatestValuationDateTerm.Value) < _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.ExperienceBusinessStartDate))) {
      Error_Message = "[{0}] Second Lastest Year Latest Valuation Date cannot be before Start of Business Date"
    }
  }

}