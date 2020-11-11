package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclMedPayCovInmatesPatientsPrisonersExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2252_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2252_1()
  
    return GeneralLiabilityExclMedPayCovInmatesPatientsPrisoners()
  }

  private function attachFormCG2252_1() {
    attachFormCG2252_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "44427" || element1.ClassCode == "44428" || element1.ClassCode == "44429" || element1.ClassCode == "44430" || element1.ClassCode == "44431" || element1.ClassCode == "44432" || element1.ClassCode == "44433" || element1.ClassCode == "44434" || element1.ClassCode == "44435" || element1.ClassCode == "44436" || element1.ClassCode == "44437" || element1.ClassCode == "44438" || element1.ClassCode == "44439" || element1.ClassCode == "44440" || element1.ClassCode == "46700" || element1.ClassCode == "67017") {
          attachFormCG2252_1 = attachFormCG2252_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclMedPayCovInmatesPatientsPrisoners() : boolean {
    if (attachFormCG2252_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}