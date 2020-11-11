package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_a4f0 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    CG2450cannotbeattachedwhenCG2451orCG2452isonthesamepolicy()
  
    return Error_Message
  }

  private function CG2450cannotbeattachedwhenCG2451orCG2452isonthesamepolicy() {
    if ((_cf.count(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) > 0) && _cf.count(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraf1) > 0) {
      Error_Message = "[{0}] 'Limited Coverage For Designated Unmanned Aircraft' cannot be attached when 'Limited Coverage For Designated Unmanned Aircraft (Coverage A Only)' or 'Limited Coverage For Designated Unmanned Aircraft (Coverage B Only)' is on the same policy"
    }
  }

}