package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1Avl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2419_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2419_1()
  
    return GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotIncldd()
  }

  private function attachFormCG2419_1() {
    attachFormCG2419_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "16892") {
          attachFormCG2419_1 = attachFormCG2419_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotIncldd() : boolean {
    if ((ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") && attachFormCG2419_1 > 0) {
      return true
    }
    return false
  }

}