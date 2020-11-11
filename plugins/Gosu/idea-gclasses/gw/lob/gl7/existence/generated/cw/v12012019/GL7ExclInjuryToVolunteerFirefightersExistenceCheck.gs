package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclInjuryToVolunteerFirefightersExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2256_1: java.lang.Integer
  private var attachFormCG2256ForFire_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2256_1()
    attachFormCG2256ForFire_1()
  
    return GeneralLiabilityExclInjuryToVolunteerFirefighters()
  }

  private function attachFormCG2256_1() {
    attachFormCG2256_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "43550" || element1.ClassCode == "43551") {
          attachFormCG2256_1 = attachFormCG2256_1 + 1
        }
      }
    }
  }

  private function attachFormCG2256ForFire_1() {
    attachFormCG2256ForFire_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "44100" || element1.ClassCode == "44101" || element1.ClassCode == "44102" || element1.ClassCode == "44103" || element1.ClassCode == "44104" || element1.ClassCode == "44105" || element1.ClassCode == "44106" || element1.ClassCode == "44108" || element1.ClassCode == "44109" || element1.ClassCode == "44110" || element1.ClassCode == "44111" || element1.ClassCode == "44112" || element1.ClassCode == "44113") {
          if (element1.MunicipalityOperatesAFireDepartment != null && element1.MunicipalityOperatesAFireDepartment != "") {
            if (element1.MunicipalityOperatesAFireDepartment == "Yes") {
              attachFormCG2256ForFire_1 = attachFormCG2256ForFire_1 + 1
            }
          }
        }
      }
    }
  }

  private function GeneralLiabilityExclInjuryToVolunteerFirefighters() : boolean {
    if (attachFormCG2256_1 > 0 || attachFormCG2256ForFire_1 > 0) {
      return true
    }
    return false
  }

}