package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_298e extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    RailroadSublineisnotaviableselectionwithinaPackagePolicy()
  
    return Error_Message
  }

  private function RailroadSublineisnotaviableselectionwithinaPackagePolicy() {
    if (ED.tempGL7SublineTypes.PackagePolicy == "Yes" && ED.tempGL7SublineTypes.Subline == "Railroad") {
      Error_Message = "[{0}] Railroad Subline is not a viable selection within a Package Policy"
    }
  }

}