package gw.lob.gl7.availability.generated.in.v03012020

uses gw.lob.common.util.*
class GL7INChangesPerPersonLmtsOfInsGovSubdivisionsAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline

  

  override public function isAvailable(_coverable : GL7Subline) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
  
    return GeneralLiabilityIndianaChangesPerPersonLimitsOfInsuranceGovernmentalSubdivisions()
  }

  private function GeneralLiabilityIndianaChangesPerPersonLimitsOfInsuranceGovernmentalSubdivisions() : boolean {
    if (line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).GovernmentalSubdivision == "Yes") {
      return true
    }
    return false
  }

}