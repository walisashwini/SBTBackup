package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_f279 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    CG2451cannotbeattachedwhenCG2109orCG2110isonthesamepolicy()
  
    return Error_Message
  }

  private function CG2451cannotbeattachedwhenCG2109orCG2110isonthesamepolicy() {
    if ((_cf.count(ED.tempGL7SublineTypes.GL7ExclUnmannedAircraft) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ExclUnmannedAircraftCovAOnly) > 0) && _cf.count(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) > 0) {
      Error_Message = "[{0}] 'Limited Coverage For Designated Unmanned Aircraft (Coverage A Only)' cannot be attached when 'Exclusion - Unmanned Aircraft' or 'Exclusion - Unmanned Aircraft (Coverage A Only)' is on the same policy"
    }
  }

}