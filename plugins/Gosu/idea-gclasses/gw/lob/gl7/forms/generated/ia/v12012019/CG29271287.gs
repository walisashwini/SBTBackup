package gw.lob.gl7.forms.generated.ia.v12012019

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG29271287 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext

  

  override public function isAvailable(_context : FormInferenceContext, _availableStates : java.util.Set<Jurisdiction>) : boolean {
    context = _context
  
    return isAvailable0()
  }

  private function isAvailable0() : boolean {
    return GeneralLiabilityChangesCancellationAndNonrenewalOwnersContractors()
  }

  private function GeneralLiabilityChangesCancellationAndNonrenewalOwnersContractors() : boolean {
    if (context.Period.GL7Line.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType")).Subline == "Owners and Contractors") {
      return true
    }
    return false
  }

}