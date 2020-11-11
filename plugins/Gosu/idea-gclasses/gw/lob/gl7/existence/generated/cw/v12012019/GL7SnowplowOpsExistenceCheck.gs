package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7SnowplowOpsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var SublineCLV: java.lang.String = ""
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.GL7Location.SublineType
  }
  

  override public function isExistenceConditionMet(_coverable : GL7Exposure) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    Subline()
  
    return GeneralLiabilitySnowplowOperationsCoverage()
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function GeneralLiabilitySnowplowOperationsCoverage() : boolean {
    if (coverable.ClassCode == "99310" && (SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}