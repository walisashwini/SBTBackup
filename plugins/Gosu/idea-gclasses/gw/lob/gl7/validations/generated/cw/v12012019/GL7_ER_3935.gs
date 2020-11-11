package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_3935 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    OneoftheclasscodesisnotavalidclasscodeforGovernmentalSubdivisionsPolicy()
  
    return Error_Message
  }

  private function OneoftheclasscodesisnotavalidclasscodeforGovernmentalSubdivisionsPolicy() {
    if (ED.tempGL7SublineTypes.GovernmentalSubdivision == "Yes") {
      for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
          if (element1.ClassCode != null && element1.ClassCode != "") {
            if ((element1.ClassCode != "" && element1.ClassCode != null) && element1.ClassCode != "44100" && element1.ClassCode != "44101" && element1.ClassCode != "44102" && element1.ClassCode != "44103" && element1.ClassCode != "44104" && element1.ClassCode != "44105" && element1.ClassCode != "44106" && element1.ClassCode != "44108" && element1.ClassCode != "44109" && element1.ClassCode != "44110" && element1.ClassCode != "44111" && element1.ClassCode != "44112" && element1.ClassCode != "44113" && element1.ClassCode != "10020" && element1.ClassCode != "40010" && element1.ClassCode != "41210" && element1.ClassCode != "41700" && element1.ClassCode != "44070" && element1.ClassCode != "44193" && element1.ClassCode != "44194" && element1.ClassCode != "44427" && element1.ClassCode != "44428" && element1.ClassCode != "44429" && element1.ClassCode != "44430" && element1.ClassCode != "44431" && element1.ClassCode != "44432" && element1.ClassCode != "44433" && element1.ClassCode != "44434" && element1.ClassCode != "44435" && element1.ClassCode != "44436" && element1.ClassCode != "44437" && element1.ClassCode != "44438" && element1.ClassCode != "44439" && element1.ClassCode != "44440" && element1.ClassCode != "45523" && element1.ClassCode != "45524" && element1.ClassCode != "47471" && element1.ClassCode != "47473" && element1.ClassCode != "47474" && element1.ClassCode != "48637" && element1.ClassCode != "48638" && element1.ClassCode != "48252" && element1.ClassCode != "48727" && element1.ClassCode != "49800" && element1.ClassCode != "49801" && element1.ClassCode != "49802" && element1.ClassCode != "49803" && element1.ClassCode != "49902" && element1.ClassCode != "49903" && element1.ClassCode != "63215" && element1.ClassCode != "63216" && element1.ClassCode != "64500" && element1.ClassCode != "67508" && element1.ClassCode != "67509" && element1.ClassCode != "67510" && element1.ClassCode != "67511" && element1.ClassCode != "67512" && element1.ClassCode != "67513" && element1.ClassCode != "91265" && element1.ClassCode != "91266" && element1.ClassCode != "92445" && element1.ClassCode != "92446" && element1.ClassCode != "92447" && element1.ClassCode != "92453" && element1.ClassCode != "95305" && element1.ClassCode != "95306" && element1.ClassCode != "99160" && element1.ClassCode != "99163" && element1.ClassCode != "99315" && element1.ClassCode != "99321" && element1.ClassCode != "99943" && element1.ClassCode != "97504" && element1.ClassCode != "97503" && element1.ClassCode != "97501" && element1.ClassCode != "97502") {
              Error_Message = "[{0}] One of the class codes is not a valid class code for Governmental Subdivisions Policy"
            }
          }
        }
      }
    }
  }

}