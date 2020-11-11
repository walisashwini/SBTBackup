package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ProdsCompletedOpsHazardRedefinedExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2407_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2407_1()
  
    return GeneralLiabilityProdsCompletedOpsHazardRedefined()
  }

  private function attachFormCG2407_1() {
    attachFormCG2407_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "12375" || element1.ClassCode == "14401" || element1.ClassCode == "16819" || element1.ClassCode == "16820" || element1.ClassCode == "16900" || element1.ClassCode == "16901" || element1.ClassCode == "16902" || element1.ClassCode == "16905" || element1.ClassCode == "16906" || element1.ClassCode == "16910" || element1.ClassCode == "16911" || element1.ClassCode == "16915" || element1.ClassCode == "16916" || element1.ClassCode == "16920" || element1.ClassCode == "16921" || element1.ClassCode == "16930" || element1.ClassCode == "16931" || element1.ClassCode == "16940" || element1.ClassCode == "16941") {
          attachFormCG2407_1 = attachFormCG2407_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityProdsCompletedOpsHazardRedefined() : boolean {
    if (attachFormCG2407_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations")) {
      return true
    }
    return false
  }

}