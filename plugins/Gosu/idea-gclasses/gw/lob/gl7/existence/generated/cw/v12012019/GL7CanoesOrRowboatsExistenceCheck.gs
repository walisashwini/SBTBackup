package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7CanoesOrRowboatsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7Exposure> {
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
  
    return GeneralLiabilityCanoesOrRowboats()
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function GeneralLiabilityCanoesOrRowboats() : boolean {
    if ((coverable.ClassCode == "10110" || coverable.ClassCode == "40111" || coverable.ClassCode == "41421" || coverable.ClassCode == "41422" || coverable.ClassCode == "41668" || coverable.ClassCode == "41667" || coverable.ClassCode == "43117" || coverable.ClassCode == "45190" || coverable.ClassCode == "45191" || coverable.ClassCode == "45192" || coverable.ClassCode == "45193" || coverable.ClassCode == "64074" || coverable.ClassCode == "64075") && (SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}