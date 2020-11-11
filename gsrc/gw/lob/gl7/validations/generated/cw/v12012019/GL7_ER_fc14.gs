package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_fc14 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    CG2154andCG2131cannotbeattachedtothesamepolicy()
  
    return Error_Message
  }

  private function CG2154andCG2131cannotbeattachedtothesamepolicy() {
    if (_cf.count(ED.tempGL7SublineTypes.GL7ExclDesignatedOpsCovByConsolidatedWrapUpInsProg) > 0 && _cf.count(ED.tempGL7SublineTypes.GL7LmtdExclDesignatedOpsCovByConsolidatedWrapUp1ns) > 0) {
      Error_Message = "[{0}] 'Exclusion - Designated Operations Covered By A Controlled (Wrap-Up) Insurance Program' and 'Limited Exclusion - Designated Operations Covered By A Controlled (Wrap-Up) Insurance Program' cannot be attached to the same policy"
    }
  }

}