package gw.lob.gl7.availability.generated.il.v09012020

uses gw.lob.common.util.*
class GL7AddlInsdCondoUnitOwnersAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2004_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2004_1()
  
    return GeneralLiabilityAddlInsdCondoUnitOwners()
  }

  private function attachFormCG2004_1() {
    attachFormCG2004_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if ((element1.ClassCode == "62000" || element1.ClassCode == "62001" || element1.ClassCode == "62002" || element1.ClassCode == "62003") && ED.tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).ByLawsCreatedOrAmendedOnOrAfterDate == "No") {
          attachFormCG2004_1 = attachFormCG2004_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityAddlInsdCondoUnitOwners() : boolean {
    if (attachFormCG2004_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}