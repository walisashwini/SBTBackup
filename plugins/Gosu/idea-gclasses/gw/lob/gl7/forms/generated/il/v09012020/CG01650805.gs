package gw.lob.gl7.forms.generated.il.v09012020

uses gw.forms.FormInferenceContext

uses gw.lob.common.util.*
class CG01650805 extends gw.lob.common.forms.GeneratedAvailabilityForm {
  private var _cf = new CommonFunctions()
  private var coverable0: GL7GeneralLiabilityLine
  private var context: FormInferenceContext
  private var attachFormCG0165_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = context.Period.GL7Line.GL7SublineTypes.singleWhere( \ elm -> elm.Subline == Parameters.getParam("GL7SublineType"))
    private var tempSublines = tempGL7SublineTypes.Sublines.singleWhere( \ elm -> elm.Jurisdiction.Code == Parameters.getParam("Jurisdiction"))
  }
  

  override public function isAvailable(_context : FormInferenceContext, _availableStates : java.util.Set<Jurisdiction>) : boolean {
    context = _context
  
    return isAvailable0()
  }

  private function isAvailable0() : boolean {
    extractedData = new ExtractedData()
  
    attachFormCG0165_1()
  
    return GeneralLiabilityIllinoisChangesCondominiums()
  }

  private function attachFormCG0165_1() {
    attachFormCG0165_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
      for (element1 in element.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters))) {
        if (element1.ClassCode == "62000" || element1.ClassCode == "62001" || element1.ClassCode == "62002" || element1.ClassCode == "62003") {
          attachFormCG0165_1 = attachFormCG0165_1 + 1
        }
      }
    }
  }

  private function GeneralLiabilityIllinoisChangesCondominiums() : boolean {
    if (attachFormCG0165_1 > 0 && ED.tempSublines.CondominiumAssociation == "Yes" && ED.tempSublines.ByLawsCreatedOrAmendedOnOrAfterDate == "Yes") {
      return true
    }
    return false
  }

}