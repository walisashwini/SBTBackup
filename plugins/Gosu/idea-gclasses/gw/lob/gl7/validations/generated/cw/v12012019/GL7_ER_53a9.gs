package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_53a9 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    PleaseremoveendorsementCG2450_CG2451orCG2452sinceLimitedCoverageForDesignatedUnmannedAircraftselectionisNo()
  
    return Error_Message
  }

  private function PleaseremoveendorsementCG2450_CG2451orCG2452sinceLimitedCoverageForDesignatedUnmannedAircraftselectionisNo() {
    if (ED.tempGL7SublineTypes.LimitedCovForDesignatedUnmannedAircraft == "No" && (_cf.exists(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) || _cf.exists(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) || _cf.exists(ED.tempGL7SublineTypes.GL7LmtdCovForDesignatedUnmannedAircraf1))) {
      Error_Message = "[{0}] Please remove endorsement 'Limited Coverage For Designated Unmanned Aircraft', 'Limited Coverage For Designated Unmanned Aircraft (Coverage A Only)' or 'Limited Coverage For Designated Unmanned Aircraft (Coverage B Only)' since Limited Coverage For Designated Unmanned Aircraft selection is No"
    }
  }

}