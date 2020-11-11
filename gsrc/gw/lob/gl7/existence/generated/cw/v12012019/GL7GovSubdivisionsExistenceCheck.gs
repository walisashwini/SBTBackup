package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7GovSubdivisionsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2409_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2409_1()
  
    return GeneralLiabilityGovernmentalSubdivisions()
  }

  private function attachFormCG2409_1() {
    attachFormCG2409_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "44100" || element1.ClassCode == "44101" || element1.ClassCode == "44102" || element1.ClassCode == "44103" || element1.ClassCode == "44104" || element1.ClassCode == "44105" || element1.ClassCode == "44106" || element1.ClassCode == "44108" || element1.ClassCode == "44109" || element1.ClassCode == "44110" || element1.ClassCode == "44111" || element1.ClassCode == "44112" || element1.ClassCode == "44113") {
          attachFormCG2409_1 = attachFormCG2409_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityGovernmentalSubdivisions() : boolean {
    if (attachFormCG2409_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}