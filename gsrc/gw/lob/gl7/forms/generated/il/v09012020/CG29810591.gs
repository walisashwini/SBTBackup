package gw.lob.gl7.forms.generated.il.v09012020

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG29810591 extends gw.lob.common.forms.GeneratedAvailabilityForm {
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
  
    return GeneralLiabilityIllinoisChangesProdsCompldOpsClaimsMade()
  }

  private function GeneralLiabilityIllinoisChangesProdsCompldOpsClaimsMade() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" && ED.tempGL7SublineTypes.PremOpsProdsCoverageForm == "Claims Made") {
      return true
    }
    return false
  }

}