package gw.lob.gl7.validations.generated.mi.v11012020

uses gw.lob.common.util.*
class GL7Location_ER_9594 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Location> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Location
  private var Error_Message: java.lang.String
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempSublineType = coverable.SublineType
  }
  

  override public function validate(_coverable : GL7Location) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    TerrorismTerritoryCodeshouldmatchLiquorCode()
  
    return Error_Message
  }

  private function TerrorismTerritoryCodeshouldmatchLiquorCode() {
    if (ED.tempSublineType.Subline == "Liquor" && ED.tempSublineType.TerrorismCoverage == "Yes" && (coverable.ZipCode == "Other" && coverable.TerrorismTerritory != coverable.LiquorLiabTerritory)) {
      Error_Message = "[{0}] Terrorism Territory Code should match Liquor Code"
    }
  }

}