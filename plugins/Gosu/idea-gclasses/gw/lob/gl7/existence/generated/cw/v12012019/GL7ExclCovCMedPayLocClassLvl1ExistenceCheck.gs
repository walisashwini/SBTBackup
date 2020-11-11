package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclCovCMedPayLocClassLvl1ExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7Exposure> {
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
  
    return GeneralLiabilityExclusionCoverageCMedicalPaymentsClassification()
  }

  private function Subline() {
    if (ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") {
      SublineCLV = ED.tempSublineType.Subline
    } else {
      SublineCLV = ""
    }
  }

  private function GeneralLiabilityExclusionCoverageCMedicalPaymentsClassification() : boolean {
    if (coverable.ClassCode == "41665" || coverable.ClassCode == "41666" || coverable.ClassCode == "40046" || coverable.ClassCode == "16670" || coverable.ClassCode == "43117" || coverable.ClassCode == "44222" || coverable.ClassCode == "45224" || coverable.ClassCode == "45225" || coverable.ClassCode == "47221" || coverable.ClassCode == "48177" || coverable.ClassCode == "48178" || coverable.ClassCode == "48252" || coverable.ClassCode == "48924") {
      return true
    }
    if ((ED.tempSublineType.MedicalPaymentsExcl != null && ED.tempSublineType.MedicalPaymentsExcl != "") && ED.tempSublineType.MedicalPaymentsExcl == "Yes" && (SublineCLV == "Premises/Operations" || SublineCLV == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}