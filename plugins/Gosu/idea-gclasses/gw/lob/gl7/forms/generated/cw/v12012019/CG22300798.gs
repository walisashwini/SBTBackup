package gw.lob.gl7.forms.generated.cw.v12012019

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG22300798 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext
  private var attachFormCG2230_1: java.lang.Integer
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
  
    attachFormCG2230_1()
  
    return GeneralLiabilityExclCorporalPunishment()
  }

  private function attachFormCG2230_1() {
    attachFormCG2230_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
      for (element1 in element.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
        if ((element1.ClassCode == "47471" || element1.ClassCode == "47473" || element1.ClassCode == "47474" || element1.ClassCode == "47475" || element1.ClassCode == "47476" || element1.ClassCode == "47477" || element1.ClassCode == "47478" || element1.ClassCode == "67508" || element1.ClassCode == "67509" || element1.ClassCode == "67512" || element1.ClassCode == "67513") && element1.ClassCode != "47469") {
          attachFormCG2230_1 = attachFormCG2230_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityExclCorporalPunishment() : boolean {
    if (attachFormCG2230_1 > 0 && (ED.tempGL7SublineTypes.Subline == "Premises/Operations" || ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations")) {
      return true
    }
    return false
  }

}