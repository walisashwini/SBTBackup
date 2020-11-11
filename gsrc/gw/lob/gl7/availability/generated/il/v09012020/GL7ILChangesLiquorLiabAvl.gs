package gw.lob.gl7.availability.generated.il.v09012020

uses gw.lob.common.util.*
class GL7ILChangesLiquorLiabAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7Subline> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Subline

  

  override public function isAvailable(_coverable : GL7Subline) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
  
    return GeneralLiabilityIllinoisChangesLiquorLiability()
  }

  private function GeneralLiabilityIllinoisChangesLiquorLiability() : boolean {
    if (line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).Subline == "Liquor") {
      return true
    }
    return false
  }

}