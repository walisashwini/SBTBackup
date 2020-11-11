package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_caa9 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var Error_Message: java.lang.String
  private var SublineCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
  }
  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    Subline()
    AseparatePremisesOperationsBIDeductiblecannotbeselectedwhenacombinationBIandPDDeductiblehasbeenselected()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function AseparatePremisesOperationsBIDeductiblecannotbeselectedwhenacombinationBIandPDDeductiblehasbeenselected() {
    if ((SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && (coverable.PremOpsBIDeductible != "No Deductible" && coverable.PremOpsBIPDDeductible != "No Deductible")) {
      Error_Message = "[{0}] A separate Premises/Operations BI Deductible cannot be selected when a combination BI and PD Deductible has been selected"
    }
  }

}