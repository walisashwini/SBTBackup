package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclServicesFurnishedByHealthCarePrvdrsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2244_1: java.lang.Integer
  private var attachFormCG2244Fire_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2244Fire_1()
    attachFormCG2244_1()
  
    return GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrs()
  }

  private function attachFormCG2244Fire_1() {
    attachFormCG2244Fire_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "44100" || element1.ClassCode == "44101" || element1.ClassCode == "44102" || element1.ClassCode == "44103" || element1.ClassCode == "44104" || element1.ClassCode == "44105" || element1.ClassCode == "44106" || element1.ClassCode == "44108" || element1.ClassCode == "44109" || element1.ClassCode == "44110" || element1.ClassCode == "44111" || element1.ClassCode == "44112" || element1.ClassCode == "44113") {
          if (element1.MunicipalityOperatesAFireDepartment != null && element1.MunicipalityOperatesAFireDepartment != "") {
            if (element1.MunicipalityOperatesAFireDepartment == "Yes") {
              attachFormCG2244Fire_1 = attachFormCG2244Fire_1 + 1
            }
          }
        }
      }
    }
  }

  private function attachFormCG2244_1() {
    attachFormCG2244_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "40031" || element1.ClassCode == "40032" || element1.ClassCode == "43550" || element1.ClassCode == "43551" || element1.ClassCode == "44427" || element1.ClassCode == "44428" || element1.ClassCode == "44500" || element1.ClassCode == "46700" || element1.ClassCode == "66561" || element1.ClassCode == "44432" || element1.ClassCode == "44430" || element1.ClassCode == "44501" || element1.ClassCode == "44436" || element1.ClassCode == "44434" || element1.ClassCode == "44440" || element1.ClassCode == "44438" || element1.ClassCode == "44429" || element1.ClassCode == "44437" || element1.ClassCode == "44431" || element1.ClassCode == "44433" || element1.ClassCode == "44435" || element1.ClassCode == "44439") {
          attachFormCG2244_1 = attachFormCG2244_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclServicesFurnishedByHealthCarePrvdrs() : boolean {
    if (attachFormCG2244Fire_1 > 0 || attachFormCG2244_1 > 0) {
      return true
    }
    return false
  }

}