package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7Classification_ER_4bf6 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7Exposure> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7Exposure
  private var Error_Message: java.lang.String

  

  override public function validate(_coverable : GL7Exposure) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
  
    CG2135CannotBeAttachedAtTheLocationandClassificationlevelssimultaneously()
  
    return Error_Message
  }

  private function CG2135CannotBeAttachedAtTheLocationandClassificationlevelssimultaneously() {
    if (_cf.exists(coverable.GL7Location.GL7ExclCovCMedPayLocClassLvl) && _cf.exists(coverable.GL7ExclCovCMedPayLocClassLvl1)) {
      Error_Message = "[{0}] 'Exclusion - Coverage C - Medical Payments' Cannot Be Attached At The Location and Classification levels simultaneously"
    }
  }

}