package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7UnmannedAircraft_ER_32b4 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7UnmannedAircraft> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7UnmannedAircraft
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.Exposure.GL7Location.SublineType
  }
  

  override public function validate(_coverable : GL7UnmannedAircraft) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    PleaseselectcoverageAandorcoverageBforthisunmannedaircraft()
  
    return Error_Message
  }

  private function PleaseselectcoverageAandorcoverageBforthisunmannedaircraft() {
    if (_cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraf1)) {
      if (coverable.CovAApplies == "No" && coverable.CovBApplies == "No") {
        Error_Message = "[{0}] Please select coverage A and/or coverage B for this unmanned aircraft"
      }
    }
  }

}