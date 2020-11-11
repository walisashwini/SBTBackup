package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_8dc5 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    CannotattachCG2106_CG2107_orCG2108withCG0437_CG0471_CG0472tothesamepolicy()
  
    return Error_Message
  }

  private function CannotattachCG2106_CG2107_orCG2108withCG0437_CG0471_CG0472tothesamepolicy() {
    if ((_cf.count(ED.tempGL7SublineTypes.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal2) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ExclAccessOrDisclosureOfConfidentialOrPersonalI) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ExclAccessOrDisclosureOfConfidentialOrPersonal1) > 0) && (_cf.count(ED.tempGL7SublineTypes.GL7ElectrDataLiabEndt) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ElectrDataLiabLmtdBIExceptionNotIncluded) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ElectrDataLiabCovCovAWithAccessOrDisclosureOfCo) > 0)) {
      Error_Message = "[{0}] Cannot attach 'Exclusion - Access Or Disclosure Of Confidential Or Personal Information And Data-related Liability - With Limited BI Exception', 'Exclusion - Access Or Disclosure Of Confidential Or Personal Info And Data-related Liability - Limited BI Exception Not Included', or 'Exclusion - Access Or Disclosure Of Confidential Or Personal Information (Coverage B Only)' with 'Electronic Data Liability', 'Electronic Data Liability - Limited Bodily Injury Exception Not Included', 'Electronic Data Liability Coverage (Coverage A) With Access Or Disclosure Of Confidential Or Personal Information Exclusion (Cov' to the same policy"
    }
  }

}