package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_7512 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  private var temp1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    OnlyoneofPharmacistsendorsementscanbeattachedtothesamepolicy()
  
    return Error_Message
  }

  private function OnlyoneofPharmacistsendorsementscanbeattachedtothesamepolicy() {
    temp1 = _cf.count(ED.tempGL7SublineTypes.GL7ExclProdsProfessionalServicesDruggists) + _cf.count(ED.tempGL7SublineTypes.GL7Druggists) + _cf.count(ED.tempGL7SublineTypes.GL7DruggistsBroadCov) + _cf.count(ED.tempGL7SublineTypes.GL7ExclProfessionalServicesPharmacists)
    if (temp1 > 1) {
      Error_Message = "[{0}] Only one of Pharmacists endorsements can be attached to the same policy"
    }
  }

}