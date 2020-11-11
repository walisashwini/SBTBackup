package gw.lob.gl7.availability.generated.oh.v03012020

uses gw.lob.common.util.*
class GL7StopGapEmployersLiabCovEndorsementPolLvlAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7Subline) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    return GeneralLiabilityStopGapEmployersLiabilityCoverageEndorsementPolLvl()
  }

  private function GeneralLiabilityStopGapEmployersLiabilityCoverageEndorsementPolLvl() : boolean {
    if (ED.tempGL7SublineTypes.Sublines.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).StopGap == "Yes" && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}