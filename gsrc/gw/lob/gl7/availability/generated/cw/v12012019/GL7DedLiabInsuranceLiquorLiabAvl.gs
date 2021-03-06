package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7DedLiabInsuranceLiquorLiabAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG0305_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG0305_1()
  
    return GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiab()
  }

  private function attachFormCG0305_1() {
    attachFormCG0305_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.LiquorDeductible != "No Deductible") {
          attachFormCG0305_1 = attachFormCG0305_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiab() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Liquor" && attachFormCG0305_1 > 0) {
      return true
    }
    return false
  }

}