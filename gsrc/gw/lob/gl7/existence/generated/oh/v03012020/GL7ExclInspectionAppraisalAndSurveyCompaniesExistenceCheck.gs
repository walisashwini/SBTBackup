package gw.lob.gl7.existence.generated.oh.v03012020

uses gw.lob.common.util.*
class GL7ExclInspectionAppraisalAndSurveyCompaniesExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2224_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2224_1()
  
    return GeneralLiabilityExclInspectionAppraisalAndSurveyCompanies()
  }

  private function attachFormCG2224_1() {
    attachFormCG2224_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "97308" || element1.ClassCode == "96317") {
          attachFormCG2224_1 = attachFormCG2224_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclInspectionAppraisalAndSurveyCompanies() : boolean {
    if (attachFormCG2224_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      if (_cf.count(ED.tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GL7WoodDestroyingInsectDiagnosticInspectionErrorsA) == 0) {
        return true
      }
    }
    return false
  }

}