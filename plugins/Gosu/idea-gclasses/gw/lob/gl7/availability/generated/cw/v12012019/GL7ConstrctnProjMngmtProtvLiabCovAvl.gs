package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7ConstrctnProjMngmtProtvLiabCovAvl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG3115_1: java.lang.Integer

  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
  
    attachFormCG3115_1()
  
    return GeneralLiabilityConstrctnProjMngmtProtvLiabCov()
  }

  private function attachFormCG3115_1() {
    attachFormCG3115_1 = 0
    for (element in line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.OwnersContractorsClassCode == "93040") {
          attachFormCG3115_1 = attachFormCG3115_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityConstrctnProjMngmtProtvLiabCov() : boolean {
    if (attachFormCG3115_1 > 0) {
      return true
    }
    return false
  }

}