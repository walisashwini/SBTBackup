package gw.lob.gl7.forms.generated.ia.v12012019

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class IL02760908 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext
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
  
    return GeneralLiabilityChangesCancellationAndNonrenewalPremOpsProdsCompldOpsLiquorPollution()
  }

  private function GeneralLiabilityChangesCancellationAndNonrenewalPremOpsProdsCompldOpsLiquorPollution() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Pollution") {
      return true
    }
    return false
  }

}