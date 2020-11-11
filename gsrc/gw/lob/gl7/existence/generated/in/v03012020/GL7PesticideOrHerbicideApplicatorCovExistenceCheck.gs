package gw.lob.gl7.existence.generated.in.v03012020

uses gw.lob.common.util.*
class GL7PesticideOrHerbicideApplicatorCovExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2264_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2264_1()
  
    return GeneralLiabilityPesticideOrHerbicideApplicatorCov()
  }

  private function attachFormCG2264_1() {
    attachFormCG2264_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "43470" || element1.ClassCode == "43860" || element1.ClassCode == "91606" || element1.ClassCode == "98257" || element1.ClassCode == "99777" || element1.ClassCode == "97050") {
          attachFormCG2264_1 = attachFormCG2264_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityPesticideOrHerbicideApplicatorCov() : boolean {
    if (attachFormCG2264_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}