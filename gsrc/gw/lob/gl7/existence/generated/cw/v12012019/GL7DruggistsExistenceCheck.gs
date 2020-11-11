package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7DruggistsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2269_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2269_1()
  
    return GeneralLiabilityDruggists()
  }

  private function attachFormCG2269_1() {
    attachFormCG2269_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "45900" || element1.ClassCode == "12374" || element1.ClassCode == "12375") {
          attachFormCG2269_1 = attachFormCG2269_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityDruggists() : boolean {
    if (attachFormCG2269_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations") && _cf.count(ED.tempGL7SublineTypes.GL7DruggistsBroadCov) == 0 && _cf.count(ED.tempGL7SublineTypes.GL7ExclProdsProfessionalServicesDruggists) == 0 && _cf.count(ED.tempGL7SublineTypes.GL7ExclProfessionalServicesPharmacists) == 0) {
      return true
    }
    return false
  }

}