package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7MisdeliveryLiquidProdsCovExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2266_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    attachFormCG2266_1()
  
    return GeneralLiabilityMisdeliveryLiquidProductsCov()
  }

  private function attachFormCG2266_1() {
    attachFormCG2266_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode == "10036" || element1.ClassCode == "11101" || element1.ClassCode == "12683" || element1.ClassCode == "53907" || element1.ClassCode == "57001" || element1.ClassCode == "13204" || element1.ClassCode == "13205" || element1.ClassCode == "13410" || element1.ClassCode == "13411" || element1.ClassCode == "13206" || element1.ClassCode == "13207" || element1.ClassCode == "13412") {
          attachFormCG2266_1 = attachFormCG2266_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityMisdeliveryLiquidProductsCov() : boolean {
    if (attachFormCG2266_1 > 0 && ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") {
      return true
    }
    return false
  }

}