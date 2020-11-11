package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7DedLiabInsuranceAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormPremOpsCG0300_1: java.lang.Integer
  private var attachFormProdsCG0300_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormPremOpsCG0300_1()
    attachFormProdsCG0300_1()
  
    return GeneralLiabilityDeductibleLiabilityInsurance()
  }

  private function attachFormPremOpsCG0300_1() {
    attachFormPremOpsCG0300_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if ((element1.PremOpsBIDeductible != "" && element1.PremOpsBIDeductible != null) && element1.PremOpsBIDeductible != "No Deductible" && element1.PremOpsBIDeductible != "Not Applicable" || ((element1.PremOpsPDDeductible != "" && element1.PremOpsPDDeductible != null) && element1.PremOpsPDDeductible != "No Deductible" && element1.PremOpsPDDeductible != "Not Applicable") || ((element1.PremOpsBIPDDeductible != "" && element1.PremOpsBIPDDeductible != null) && element1.PremOpsBIPDDeductible != "No Deductible" && element1.PremOpsBIPDDeductible != "Not Applicable")) {
          attachFormPremOpsCG0300_1 = attachFormPremOpsCG0300_1 + 1
        }
      }
    }
  }

  private function attachFormProdsCG0300_1() {
    attachFormProdsCG0300_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if ((element1.ProdsCompldOpsBIDeductible != "" && element1.ProdsCompldOpsBIDeductible != null) && element1.ProdsCompldOpsBIDeductible != "No Deductible" && element1.ProdsCompldOpsBIDeductible != "Not Applicable" || ((element1.ProdsCompldOpsPDDeductible != "" && element1.ProdsCompldOpsPDDeductible != null) && element1.ProdsCompldOpsPDDeductible != "No Deductible" && element1.ProdsCompldOpsPDDeductible != "Not Applicable") || ((element1.ProdsCompldOpsBIPDDeductible != "" && element1.ProdsCompldOpsBIPDDeductible != null) && element1.ProdsCompldOpsBIPDDeductible != "No Deductible" && element1.ProdsCompldOpsBIPDDeductible != "Not Applicable")) {
          attachFormProdsCG0300_1 = attachFormProdsCG0300_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityDeductibleLiabilityInsurance() : boolean {
    if ((ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && attachFormPremOpsCG0300_1 > 0) {
      return true
    } else {
      if ((ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && attachFormProdsCG0300_1 > 0) {
        return true
      }
    }
    return false
  }

}