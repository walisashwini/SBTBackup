package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_f744 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
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
    MustenterProdsCompldOpsBIDeductibleFactorOverride()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function MustenterProdsCompldOpsBIDeductibleFactorOverride() {
    if ((SublineCLV == "Products/Completed Operations" || (SublineCLV == "Premises/Operations and Products/Completed Operations" && coverable.ProdsCompldOpsCov != "Included")) && (coverable.ProdsCompldOpsBIDeductible == "250 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "500 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "750 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "1,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "2,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "3,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "4,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "5,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "10,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "15,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "20,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "25,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "50,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "75,000 Per Claim" || coverable.ProdsCompldOpsBIDeductible == "100,000 Per Claim") && coverable.IfAnyBasis == "No" && coverable.ProdsCompldOpsBIDeductibleFactorOverride == 0) {
      Error_Message = "[{0}] Must enter Prods Compld Ops BI Deductible Factor Override"
    }
  }

}