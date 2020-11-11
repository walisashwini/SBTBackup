package gw.lob.gl7.forms.generated.oh.v03012020

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG22020817 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext
  private var attachFormCG2202_1: java.lang.Integer
  private var checkClimbingFacilityOperatorAnswer_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = context.Period.GL7Line.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType"))
  }
  

  override public function isAvailable(_context : FormInferenceContext, _availableStates : java.util.Set<Jurisdiction>) : boolean {
    context = _context
  
    return isAvailable0()
  }

  private function isAvailable0() : boolean {
    extractedData = new ExtractedData()
  
    attachFormCG2202_1()
    checkClimbingFacilityOperatorAnswer_1()
  
    return GeneralLiabilityChangesClimbingFacilitiesOperatorsNoticeOfCancellationAndClaimAmount()
  }

  private function attachFormCG2202_1() {
    attachFormCG2202_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
      for (element1 in element.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
        if (element1.ClassCode == "44315") {
          attachFormCG2202_1 = attachFormCG2202_1 + 1
        }
      }
    }
  }

  private function checkClimbingFacilityOperatorAnswer_1() {
    checkClimbingFacilityOperatorAnswer_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
      for (element1 in element.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
        if ((element1.ClimbingFacilityOperator != null && element1.ClimbingFacilityOperator != "") && element1.ClimbingFacilityOperator == "Yes") {
          checkClimbingFacilityOperatorAnswer_1 = checkClimbingFacilityOperatorAnswer_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityChangesClimbingFacilitiesOperatorsNoticeOfCancellationAndClaimAmount() : boolean {
    if (attachFormCG2202_1 > 0 && checkClimbingFacilityOperatorAnswer_1 > 0) {
      return true
    }
    return false
  }

}