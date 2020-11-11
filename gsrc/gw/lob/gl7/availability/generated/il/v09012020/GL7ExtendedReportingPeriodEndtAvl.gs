package gw.lob.gl7.availability.generated.il.v09012020

uses gw.lob.common.util.*
class GL7ExtendedReportingPeriodEndtAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType

  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
  
    return GeneralLiabilityExtendedReportingPeriodEndt()
  }

  private function GeneralLiabilityExtendedReportingPeriodEndt() : boolean {
    if (line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).Subline == "Pollution") {
      return true
    }
    return false
  }

}