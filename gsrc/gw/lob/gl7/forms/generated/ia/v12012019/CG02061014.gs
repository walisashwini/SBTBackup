package gw.lob.gl7.forms.generated.ia.v12012019

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG02061014 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext
  private var attachFormCG0206_1: java.lang.Integer
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
  
    attachFormCG0206_1()
  
    return GeneralLiabilityChangesNoticeOfCancellationForContractors()
  }

  private function attachFormCG0206_1() {
    attachFormCG0206_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
      for (element1 in element.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
        if ((element1.ClassCode == "91111" || element1.ClassCode == "91150" || element1.ClassCode == "91155" || element1.ClassCode == "10040" || element1.ClassCode == "10042" || element1.ClassCode == "91250" || element1.ClassCode == "94444" || element1.ClassCode == "95648" || element1.ClassCode == "95647" || element1.ClassCode == "97222" || element1.ClassCode == "97223" || element1.ClassCode == "98482" || element1.ClassCode == "98483" || element1.ClassCode == "16527" || element1.ClassCode == "98636" || element1.ClassCode == "98884" || element1.ClassCode == "99165" || element1.ClassCode == "99943" || element1.ClassCode == "99946" || element1.ClassCode == "99948") && ((element1.Contractor != null && element1.Contractor != "") && element1.Contractor == "Yes")) {
          attachFormCG0206_1 = attachFormCG0206_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityChangesNoticeOfCancellationForContractors() : boolean {
    if ((ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations") && attachFormCG0206_1 > 0) {
      return true
    }
    return false
  }

}