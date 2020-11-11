package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_4b32 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
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
    EstimatedContractCostWithoutRailroadTrainHazardcannotexceedExposureAmount()
  
    return Error_Message
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function EstimatedContractCostWithoutRailroadTrainHazardcannotexceedExposureAmount() {
    if (SublineCLV == "Railroad" && coverable.EstdContractCostWORRHzd > coverable.RailroadExposure) {
      Error_Message = "[{0}] Estimated Contract Cost Without Railroad Train Hazard cannot exceed Exposure Amount"
    }
  }

}