package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_44ed extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  private var gsClass_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    gsClass_1()
    AGovernmentalSubdivisionsclassmustbeselectedforGovernmentalSubdivisionsPolicy()
  
    return Error_Message
  }

  private function gsClass_1() {
    gsClass_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if (element1.ClassCode != null && element1.ClassCode != "") {
          if (element1.ClassCode == "44100" || element1.ClassCode == "44101" || element1.ClassCode == "44102" || element1.ClassCode == "44103" || element1.ClassCode == "44104" || element1.ClassCode == "44105" || element1.ClassCode == "44106" || element1.ClassCode == "44108" || element1.ClassCode == "44109" || element1.ClassCode == "44110" || element1.ClassCode == "44111" || element1.ClassCode == "44112" || element1.ClassCode == "44113") {
            gsClass_1 = gsClass_1 + 1
          }
        }
      }
    }
  }

  private function AGovernmentalSubdivisionsclassmustbeselectedforGovernmentalSubdivisionsPolicy() {
    if (ED.tempGL7SublineTypes.GovernmentalSubdivision == "Yes") {
      if (gsClass_1 == 0) {
        Error_Message = "[{0}] A Governmental Subdivisions class must be selected for Governmental Subdivisions Policy"
      }
    }
  }

}