package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_5faa extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  private var EffectiveDtCLV: java.util.Date
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    EffectiveDt()
    TheRetroactiveDatecannotbegreaterthanthePolicyEffectiveDate()
  
    return Error_Message
  }

  private function EffectiveDt() {
    EffectiveDtCLV = line.EffectiveDate
    if (line.EffectiveDate != null) {
      EffectiveDtCLV = line.EffectiveDate
    }
  }

  private function TheRetroactiveDatecannotbegreaterthanthePolicyEffectiveDate() {
    if ((ED.tempGL7SublineTypes.LiquorCoverageForm == "Claims Made" && ED.tempGL7SublineTypes.LiquorRetroactiveDate != null && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.LiquorRetroactiveDate) > _cf.isoDateWithoutTime(EffectiveDtCLV) || ED.tempGL7SublineTypes.PollutionCoverageForm == "Claims Made" && ED.tempGL7SublineTypes.PollutionRetroactiveDate != null && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.PollutionRetroactiveDate) > _cf.isoDateWithoutTime(EffectiveDtCLV) || (ED.tempGL7SublineTypes.PremOpsProdsCoverageForm == "Claims Made" && ED.tempGL7SublineTypes.PremOpsProdsRetroactiveDate != null && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.PremOpsProdsRetroactiveDate) > _cf.isoDateWithoutTime(EffectiveDtCLV)) || (ED.tempGL7SublineTypes.USTCoverageForm == "Claims Made" && ED.tempGL7SublineTypes.UndergroundStorageTankRetroactiveDate != null && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.UndergroundStorageTankRetroactiveDate) > _cf.isoDateWithoutTime(EffectiveDtCLV))) && ED.tempGL7SublineTypes.RetroactiveDateApplies == "Yes") {
      Error_Message = "[{0}] The Retroactive Date cannot be greater than the Policy Effective Date"
    }
  }

}