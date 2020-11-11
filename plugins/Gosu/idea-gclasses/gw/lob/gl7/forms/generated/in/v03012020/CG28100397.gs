package gw.lob.gl7.forms.generated.in.v03012020

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG28100397 extends gw.lob.common.forms.GeneratedAvailabilityForm {
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
  
    return GeneralLiabilityIndianaChangesPollutionExclusionOwnersContractors()
  }

  private function GeneralLiabilityIndianaChangesPollutionExclusionOwnersContractors() : boolean {
    if (ED.tempGL7SublineTypes.Subline == "Owners and Contractors" && _cf.count(ED.tempGL7SublineTypes.Sublines.singleWhere( \ elm -> elm.Jurisdiction.Code == Parameters.getParam("Jurisdiction")).GL7AmendmentOfDefinitionOfPollutants) == 0) {
      return true
    }
    return false
  }

}