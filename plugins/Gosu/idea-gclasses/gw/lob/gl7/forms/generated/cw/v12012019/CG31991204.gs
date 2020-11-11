package gw.lob.gl7.forms.generated.cw.v12012019

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG31991204 extends gw.lob.common.forms.GeneratedAvailabilityForm {
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
  
    return GeneralLiabilityNuclearEnergyLiabilityExclusionEndorsementBroadForm()
  }

  private function GeneralLiabilityNuclearEnergyLiabilityExclusionEndorsementBroadForm() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Product Withdrawal" || ED.tempGL7SublineTypes.Subline == "Electronic Data Liability") {
      return true
    }
    return false
  }

}