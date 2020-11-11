package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7PollutionLiabCovFormDesigntdSitesAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    return GeneralLiabilityPollutionLiabCovFormDesigntdSites()
  }

  private function GeneralLiabilityPollutionLiabCovFormDesigntdSites() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Pollution" && ED.tempGL7SublineTypes.PollutionCleanUpCoverage == "Yes") {
      return true
    }
    return false
  }

}