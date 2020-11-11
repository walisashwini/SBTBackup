package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclSpecifiedTherapeuticOrCosmeticSrvcsExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2245_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2245_1()
  
    return GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcs()
  }

  private function attachFormCG2245_1() {
    attachFormCG2245_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "10113" || element1.ClassCode == "12356" || element1.ClassCode == "11128" || element1.ClassCode == "11127" || element1.ClassCode == "18911" || element1.ClassCode == "15600" || element1.ClassCode == "11234" || element1.ClassCode == "49870" || element1.ClassCode == "47420" || element1.ClassCode == "14655" || element1.ClassCode == "45191" || element1.ClassCode == "10115" || element1.ClassCode == "18570" || element1.ClassCode == "45192" || element1.ClassCode == "45193" || element1.ClassCode == "18912" || element1.ClassCode == "45190" || element1.ClassCode == "48808") {
          attachFormCG2245_1 = attachFormCG2245_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcs() : boolean {
    if (attachFormCG2245_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}