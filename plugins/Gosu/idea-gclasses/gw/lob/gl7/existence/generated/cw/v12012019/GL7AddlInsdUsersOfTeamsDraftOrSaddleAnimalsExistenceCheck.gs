package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimalsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2014_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2014_1()
  
    return GeneralLiabilityAddlInsdUsersOfTeamsDraftOrSaddleAnimals()
  }

  private function attachFormCG2014_1() {
    attachFormCG2014_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "40045" || element1.ClassCode == "40046" || element1.ClassCode == "40047") {
          attachFormCG2014_1 = attachFormCG2014_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityAddlInsdUsersOfTeamsDraftOrSaddleAnimals() : boolean {
    if (attachFormCG2014_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}