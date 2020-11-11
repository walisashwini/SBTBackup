package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7CollegeSchoolLmtdFormExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var medPayCovForStudNoCount_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    medPayCovForStudNoCount_1()
  
    return GeneralLiabilityCollegeSchoolLimitedForm()
  }

  private function medPayCovForStudNoCount_1() {
    medPayCovForStudNoCount_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "47471" || element1.ClassCode == "47473" || element1.ClassCode == "47474" || element1.ClassCode == "47475" || element1.ClassCode == "47476" || element1.ClassCode == "47477" || element1.ClassCode == "47478" || element1.ClassCode == "67508" || element1.ClassCode == "67509" || element1.ClassCode == "67512" || element1.ClassCode == "67513") {
          if ((element1.MedPayCovForStud != null && element1.MedPayCovForStud != "") && element1.MedPayCovForStud == "No") {
            medPayCovForStudNoCount_1 = medPayCovForStudNoCount_1 + 1
          }
        }
      }
    }
  }

  private function GeneralLiabilityCollegeSchoolLimitedForm() : boolean {
    if (medPayCovForStudNoCount_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}