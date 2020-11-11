package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExtendedReportingPeriodForTerrAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
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
  
    return GeneralLiabilityExtendedReportingPeriodForTerrorismCoverage()
  }

  private function GeneralLiabilityExtendedReportingPeriodForTerrorismCoverage() : boolean {
    if (_cf.count(ED.tempGL7SublineTypes.GL7CondExclOfTerrDispositionOfAct2002) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7CondExclOfTerrNuclearBiologicalChemicalDisposit) > 0) {
      if ((ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations") && ED.tempGL7SublineTypes.PremOpsProdsCoverageForm == "Claims Made" || ED.tempGL7SublineTypes.Subline == "Liquor" && ED.tempGL7SublineTypes.LiquorCoverageForm == "Claims Made" || ED.tempGL7SublineTypes.Subline == "Pollution" || ED.tempGL7SublineTypes.Subline == "Underground Storage Tank") {
        return true
      }
    }
    return false
  }

}