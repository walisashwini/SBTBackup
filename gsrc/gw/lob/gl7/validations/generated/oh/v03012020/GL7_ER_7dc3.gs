package gw.lob.gl7.validations.generated.oh.v03012020

uses gw.lob.common.util.*
class GL7_ER_7dc3 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    ACertifiedActsofTerrorismFormmustbeattachedtothepolicywhencoverageisaccepted()
  
    return Error_Message
  }

  private function ACertifiedActsofTerrorismFormmustbeattachedtothepolicywhencoverageisaccepted() {
    if (ED.tempGL7SublineTypes.Subline != "Product Withdrawal" && ED.tempGL7SublineTypes.Subline != "Electronic Data Liability") {
      if (ED.tempGL7SublineTypes.TerrorismCoverage == "Yes") {
        if (_cf.count(ED.tempGL7SublineTypes.GL7CapOnLossesFromCertifiedActsOfTerr) == 0 && _cf.count(ED.tempGL7SublineTypes.GL7LmtdTerrExclOthThanCertifiedActsOfTerrCapOnLoss) == 0) {
          Error_Message = "[{0}] A Certified Acts of Terrorism Form must be attached to the policy when coverage is accepted"
        }
      }
    }
  }

}