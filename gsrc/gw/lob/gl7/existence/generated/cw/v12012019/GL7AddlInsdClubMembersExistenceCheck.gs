package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7AddlInsdClubMembersExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2002_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2002_1()
  
    return GeneralLiabilityAddlInsdClubMembers()
  }

  private function attachFormCG2002_1() {
    attachFormCG2002_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "11138" || element1.ClassCode == "41664" || element1.ClassCode == "41665" || element1.ClassCode == "41666" || element1.ClassCode == "41667" || element1.ClassCode == "41668" || element1.ClassCode == "41669" || element1.ClassCode == "41670") {
          attachFormCG2002_1 = attachFormCG2002_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityAddlInsdClubMembers() : boolean {
    if (attachFormCG2002_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}