package gw.lob.gl7.validations.generated.il.v09012020

uses gw.lob.common.util.*
class GL7_ER_0eab extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  private var classCodeCountTemp1: java.math.BigDecimal
  private var Error_Message: java.lang.String
  private var classCodeCount: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7Subline) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    classCodeCount()
    ACondominiumClassificationmustbeselectedwhenCondominiumAssociationisYes()
  
    return Error_Message
  }

  private function classCodeCount() {
    classCodeCount = 0
    if (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations") {
      for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
          if (element1.ClassCode == "62000" || element1.ClassCode == "62001" || element1.ClassCode == "62002" || element1.ClassCode == "62003") {
            classCodeCountTemp1 = classCodeCount + 1.0
            classCodeCount = _cf.makeIntegerFrom(classCodeCountTemp1)
          }
        }
      }
    } else {
      classCodeCount = 0
    }
  }

  private function ACondominiumClassificationmustbeselectedwhenCondominiumAssociationisYes() {
    if (classCodeCount == 0 && ED.tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).CondominiumAssociation == "Yes") {
      Error_Message = "[{0}] A Condominium Classification must be selected when Condominium Association is Yes"
    }
  }

}