package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_ca01 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
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
    MustenterPremOpsBIandPDDeductibleFactorOverride()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function MustenterPremOpsBIandPDDeductibleFactorOverride() {
    if ((SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations") && (coverable.PremOpsBIPDDeductible == "250 Per Claim" || coverable.PremOpsBIPDDeductible == "500 Per Claim" || coverable.PremOpsBIPDDeductible == "750 Per Claim" || coverable.PremOpsBIPDDeductible == "1,000 Per Claim" || coverable.PremOpsBIPDDeductible == "2,000 Per Claim" || coverable.PremOpsBIPDDeductible == "3,000 Per Claim" || coverable.PremOpsBIPDDeductible == "4,000 Per Claim" || coverable.PremOpsBIPDDeductible == "5,000 Per Claim" || coverable.PremOpsBIPDDeductible == "10,000 Per Claim" || coverable.PremOpsBIPDDeductible == "15,000 Per Claim" || coverable.PremOpsBIPDDeductible == "20,000 Per Claim" || coverable.PremOpsBIPDDeductible == "25,000 Per Claim" || coverable.PremOpsBIPDDeductible == "50,000 Per Claim" || coverable.PremOpsBIPDDeductible == "75,000 Per Claim" || coverable.PremOpsBIPDDeductible == "100,000 Per Claim") && coverable.IfAnyBasis == "No" && coverable.PremOpsBIPDDeductibleFactorOverride == 0) {
      Error_Message = "[{0}] Must enter Prem Ops BI and PD Deductible Factor Override"
    }
  }

}