package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_bf27 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
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
    Exposuremustbeentered()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function Exposuremustbeentered() {
    if ((SublineCLV == "Liquor" && (coverable.LiquorClassCode != "" && coverable.LiquorClassCode != null) && coverable.LiquorExposure == 0 || SublineCLV == "Owners and Contractors" && (coverable.OwnersContractorsClassCode != "" && coverable.OwnersContractorsClassCode != null) && coverable.OwnersContractorsExposure == 0 || SublineCLV == "Railroad" && (coverable.RailroadClassCode != "" && coverable.RailroadClassCode != null) && coverable.RailroadExposure == 0 || (SublineCLV == "Underground Storage Tank" && (coverable.USTClassCode != "" && coverable.USTClassCode != null) && coverable.USTExposure == 0) || (SublineCLV == "Electronic Data Liability" && (coverable.EDLClassCode != "" && coverable.EDLClassCode != null) && coverable.EDLExposure == 0)) && coverable.MiscIfAnyBasis == "No") {
      Error_Message = "[{0}] Exposure must be entered"
    }
  }

}