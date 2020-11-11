package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_7752 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    TheTRIAexpirationdateshouldnotbegreaterthanthepolicyexpirationdate()
  
    return Error_Message
  }

  private function TheTRIAexpirationdateshouldnotbegreaterthanthepolicyexpirationdate() {
    if (ED.tempGL7SublineTypes.Subline != "Product Withdrawal" && ED.tempGL7SublineTypes.Subline != "Electronic Data Liability") {
      if (ED.tempGL7SublineTypes.TerrorismCoverage == "Yes" && ED.tempGL7SublineTypes.TRIPTerminatesBeforeExpirationDate == "Yes" && ED.tempGL7SublineTypes.TRIAExtended == "No" && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.TRIAExpirationDate) >= _cf.isoDateWithoutTime(line.ExpirationDate)) {
        Error_Message = "[{0}] The TRIA expiration date should not be greater than the policy expiration date"
      }
    }
  }

}