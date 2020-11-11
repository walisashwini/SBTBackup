package gw.lob.gl7.forms.generated.in.v03012020

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class IL01580908 extends gw.lob.common.forms.GeneratedAvailabilityForm {
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
  
    return GeneralLiabilityIndianaChanges()
  }

  private function GeneralLiabilityIndianaChanges() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Owners and Contractors" || ED.tempGL7SublineTypes.Subline == "Railroad" || ED.tempGL7SublineTypes.Subline == "Liquor" || ED.tempGL7SublineTypes.Subline == "Pollution" || ED.tempGL7SublineTypes.Subline == "Underground Storage Tank") {
      return true
    }
    return false
  }

}