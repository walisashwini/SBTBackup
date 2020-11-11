package gw.lob.gl7.validations.generated.il.v09012020

uses gw.lob.common.util.*
class GL7_ER_8d8a extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7Subline) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    CondominiumAssociationAndGovernmentalSubdivisioncannotbothbeselectedYes()
  
    return Error_Message
  }

  private function CondominiumAssociationAndGovernmentalSubdivisioncannotbothbeselectedYes() {
    if (ED.tempGL7SublineTypes.GovernmentalSubdivision == "Yes" && ED.tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).CondominiumAssociation == "Yes") {
      Error_Message = "[{0}] Condominium Association And Governmental Subdivision cannot both be selected Yes"
    }
  }

}