package gw.lob.gl7.forms.generated.cw.v12012019

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG23010413 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext
  private var attachFormCG2301_1: java.lang.Integer
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
  
    attachFormCG2301_1()
  
    return GeneralLiabilityExclRealEstateAgentsBrokersErrorsOmissions()
  }

  private function attachFormCG2301_1() {
    attachFormCG2301_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
      for (element1 in element.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
        if (element1.ClassCode == "47050") {
          attachFormCG2301_1 = attachFormCG2301_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclRealEstateAgentsBrokersErrorsOmissions() : boolean {
    if ((ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations") && attachFormCG2301_1 > 0) {
      return true
    }
    return false
  }

}