package gw.lob.gl7.validations.generated.il.v09012020

uses gw.lob.common.util.*
class GL7_ER_a207 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    OnlyonePollutionExclusionformCG2149_CG2155orCG2165canbeattached()
  
    return Error_Message
  }

  private function OnlyonePollutionExclusionformCG2149_CG2155orCG2165canbeattached() {
    if (_cf.count(ED.tempGL7SublineTypes.GL7TotalPollutionExclWithAHostileFireExcptn) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo) > 0 || (_cf.count(ED.tempGL7SublineTypes.GL7TotalPollutionExclWithAHostileFireExcptn) > 0 && _cf.count(ED.tempGL7SublineTypes.GL7TotalPollutionExclWithABldgHeatgEquipmtExcptnHo) > 0)) {
      Error_Message = "[{0}] Only one Pollution Exclusion form - 'Total Pollution Exclusion Endorsement', 'Total Pollution Exclusion With A Hostile Fire Exception' or 'Total Pollution Exclusion With A Building Heating, Cooling And Dehumidifying Equipment Exception And A Hostile Fire Exception' can be attached"
    }
  }

}