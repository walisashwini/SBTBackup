package gw.lob.gl7.existence.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7LmtdExclPersonalAdvertisingInjLawyersExistenceCheck extends gw.lob.common.dependency.GeneratedClauseExistence<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var attachFormCG2296_1: java.lang.Integer

  

  override public function isExistenceConditionMet(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
  
    attachFormCG2296_1()
  
    return GeneralLiabilityLimitedExclPersonalAdvertisingInjLawyers()
  }

  private function attachFormCG2296_1() {
    attachFormCG2296_1 = 0
    for (element in line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable)).Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if ((element1.ClassCode == "66123" || element1.ClassCode == "66122") && ((element1.LimitedCovForPersonalAndAdvertisingInjury != null && element1.LimitedCovForPersonalAndAdvertisingInjury != "") && element1.LimitedCovForPersonalAndAdvertisingInjury == "Yes")) {
          attachFormCG2296_1 = attachFormCG2296_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityLimitedExclPersonalAdvertisingInjLawyers() : boolean {
    if (attachFormCG2296_1 > 0) {
      return true
    }
    return false
  }

}