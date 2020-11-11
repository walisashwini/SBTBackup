package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_ba21 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
    private var tempGL7ERPLatestYearLatestValuationDateTerm = tempGL7SublineTypes.GL7ExperienceRatingModificationLatestYear.GL7ERPLatestYearLatestValuationDateTerm
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    LastestYearLatestValuationDatecannotbebeforeStartofBusinessDate()
  
    return Error_Message
  }

  private function LastestYearLatestValuationDatecannotbebeforeStartofBusinessDate() {
    if (_cf.exists(ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value) && (ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > 0 && ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value != null && ED.tempGL7SublineTypes.ExperienceBusinessStartDate != null && _cf.isoDateWithoutTime(ED.tempGL7ERPLatestYearLatestValuationDateTerm.Value) < _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.ExperienceBusinessStartDate))) {
      Error_Message = "[{0}] Lastest Year Latest Valuation Date cannot be before Start of Business Date"
    }
  }

}