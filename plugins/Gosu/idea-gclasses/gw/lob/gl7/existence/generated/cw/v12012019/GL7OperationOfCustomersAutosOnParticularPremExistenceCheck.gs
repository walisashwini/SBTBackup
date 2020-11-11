package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7OperationOfCustomersAutosOnParticularPremExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2268_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2268_1()
  
    return GeneralLiabilityOperationOfCustomersAutosOnParticularPrem()
  }

  private function attachFormCG2268_1() {
    attachFormCG2268_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "10072" || element1.ClassCode == "10073" || element1.ClassCode == "10075" || element1.ClassCode == "10367" || element1.ClassCode == "13453" || element1.ClassCode == "13455" || element1.ClassCode == "18616") {
          attachFormCG2268_1 = attachFormCG2268_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityOperationOfCustomersAutosOnParticularPrem() : boolean {
    if (attachFormCG2268_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}