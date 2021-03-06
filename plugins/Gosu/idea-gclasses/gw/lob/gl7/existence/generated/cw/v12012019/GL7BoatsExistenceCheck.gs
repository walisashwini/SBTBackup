package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7BoatsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2412_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2412_1()
  
    return GeneralLiabilityBoats()
  }

  private function attachFormCG2412_1() {
    attachFormCG2412_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "10117" || element1.ClassCode == "10119" || element1.ClassCode == "40115" || element1.ClassCode == "40117" || element1.ClassCode == "40140" || element1.ClassCode == "43760" || element1.ClassCode == "44222") {
          attachFormCG2412_1 = attachFormCG2412_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityBoats() : boolean {
    if (attachFormCG2412_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}