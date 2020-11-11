package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclPersonalAdvertisingInjuryExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2138_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2138_1()
  
    return GeneralLiabilityExclPersonalAdvertisingInjury()
  }

  private function attachFormCG2138_1() {
    attachFormCG2138_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "43200" || element1.ClassCode == "46882" || element1.ClassCode == "91130" || element1.ClassCode == "46822" || element1.ClassCode == "65007" || element1.ClassCode == "91636" || element1.ClassCode == "98751" || element1.ClassCode == "46881") {
          attachFormCG2138_1 = attachFormCG2138_1 + 1
        }
        if ((element1.ClassCode == "66123" || element1.ClassCode == "66122") && ((element1.LimitedCovForPersonalAndAdvertisingInjury != null && element1.LimitedCovForPersonalAndAdvertisingInjury != "") && element1.LimitedCovForPersonalAndAdvertisingInjury == "No")) {
          attachFormCG2138_1 = attachFormCG2138_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclPersonalAdvertisingInjury() : boolean {
    if (attachFormCG2138_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}