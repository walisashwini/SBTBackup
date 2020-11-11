package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ExclProdsCompletedOpsHazardAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType

  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
  
    return GeneralLiabilityExclProductsCompletedOperationsHazard()
  }

  private function GeneralLiabilityExclProductsCompletedOperationsHazard() : boolean {
    if (line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).Subline == "Premises/Operations") {
      return true
    }
    return false
  }

}