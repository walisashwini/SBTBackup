package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7UndergroundResourcesAndEquipmtCovExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2262_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2262_1()
  
    return GeneralLiabilityUndergroundResourcesAndEquipmtCov()
  }

  private function attachFormCG2262_1() {
    attachFormCG2262_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "44010" || element1.ClassCode == "46510" || element1.ClassCode == "98150" || element1.ClassCode == "98151" || element1.ClassCode == "98155" || element1.ClassCode == "98156" || element1.ClassCode == "98157" || element1.ClassCode == "98158" || element1.ClassCode == "98161" || element1.ClassCode == "98162") {
          attachFormCG2262_1 = attachFormCG2262_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityUndergroundResourcesAndEquipmtCov() : boolean {
    if (attachFormCG2262_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}