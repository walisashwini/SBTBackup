package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_e847 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  private var EffectiveDtCLV: java.util.Date
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    EffectiveDt()
    StartofBusinessDatecannotbeafterPolicyEffectiveDate()
  
    return Error_Message
  }

  private function EffectiveDt() {
    EffectiveDtCLV = line.EffectiveDate
    if (line.EffectiveDate != null) {
      EffectiveDtCLV = line.EffectiveDate
    }
  }

  private function StartofBusinessDatecannotbeafterPolicyEffectiveDate() {
    if (ED.tempGL7SublineTypes.ExperienceBusinessStartDate != null && EffectiveDtCLV != null && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.ExperienceBusinessStartDate) > _cf.isoDateWithoutTime(EffectiveDtCLV)) {
      Error_Message = "[{0}] Start of Business Date cannot be after Policy Effective Date"
    }
  }

}