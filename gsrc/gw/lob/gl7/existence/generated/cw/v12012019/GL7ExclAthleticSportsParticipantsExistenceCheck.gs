package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclAthleticSportsParticipantsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2101_1: java.lang.Integer
  private var removeFormCG2101_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2101_1()
    removeFormCG2101_1()
  
    return GeneralLiabilityExclAthleticSportsParticipants()
  }

  private function attachFormCG2101_1() {
    attachFormCG2101_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "40059" || element1.ClassCode == "40061" || element1.ClassCode == "40063" || element1.ClassCode == "40064" || element1.ClassCode == "40066" || element1.ClassCode == "63218" || element1.ClassCode == "43422" || element1.ClassCode == "43424" || element1.ClassCode == "46911" || element1.ClassCode == "46915" || element1.ClassCode == "46916" || element1.ClassCode == "47318" || element1.ClassCode == "48637" || element1.ClassCode == "48638" || element1.ClassCode == "63217" || element1.ClassCode == "40067" || element1.ClassCode == "40069" || element1.ClassCode == "43421" || element1.ClassCode == "63219" || element1.ClassCode == "63220" || element1.ClassCode == "46912" || element1.ClassCode == "48441") {
          attachFormCG2101_1 = attachFormCG2101_1 + 1
        }
      }
    }
  }

  private function removeFormCG2101_1() {
    removeFormCG2101_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "67508" || element1.ClassCode == "67509" || element1.ClassCode == "47468" || element1.ClassCode == "67510" || element1.ClassCode == "67511" || element1.ClassCode == "47469" || element1.ClassCode == "67512" || element1.ClassCode == "67513" || element1.ClassCode == "47477" || element1.ClassCode == "47478" || element1.ClassCode == "47475" || element1.ClassCode == "47476" || element1.ClassCode == "47473" || element1.ClassCode == "47471" || element1.ClassCode == "47474" || element1.ClassCode == "48637" || element1.ClassCode == "48638") {
          removeFormCG2101_1 = removeFormCG2101_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclAthleticSportsParticipants() : boolean {
    if (attachFormCG2101_1 > 0 && removeFormCG2101_1 == 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}