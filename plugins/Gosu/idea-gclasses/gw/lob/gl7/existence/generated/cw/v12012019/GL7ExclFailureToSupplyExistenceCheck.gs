package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclFailureToSupplyExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2250_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2250_1()
  
    return GeneralLiabilityExclFailureToSupply()
  }

  private function attachFormCG2250_1() {
    attachFormCG2250_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "13204" || element1.ClassCode == "13205" || element1.ClassCode == "13206" || element1.ClassCode == "13207" || element1.ClassCode == "13410" || element1.ClassCode == "13411" || element1.ClassCode == "13412" || element1.ClassCode == "92445" || element1.ClassCode == "92453" || element1.ClassCode == "95305" || element1.ClassCode == "95306" || element1.ClassCode == "97501" || element1.ClassCode == "97503" || element1.ClassCode == "99081" || element1.ClassCode == "99082" || element1.ClassCode == "99083" || element1.ClassCode == "99160" || element1.ClassCode == "99943") {
          attachFormCG2250_1 = attachFormCG2250_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclFailureToSupply() : boolean {
    if (attachFormCG2250_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}