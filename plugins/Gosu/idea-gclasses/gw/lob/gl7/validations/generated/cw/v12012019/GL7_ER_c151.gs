package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_c151 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    TerrorismFormsCG2187_CG2188andCG2189cannotbeattachedtoapolicywhenTerrorismRiskInsuranceProgramTRIPisineffectthroughoutthepolicytermorwhenTerrorismRiskInsuranceProgramTRIPisnotineffectthroughoutthepolicytermorwhenTRIAhasbeenextended()
  
    return Error_Message
  }

  private function TerrorismFormsCG2187_CG2188andCG2189cannotbeattachedtoapolicywhenTerrorismRiskInsuranceProgramTRIPisineffectthroughoutthepolicytermorwhenTerrorismRiskInsuranceProgramTRIPisnotineffectthroughoutthepolicytermorwhenTRIAhasbeenextended() {
    if (ED.tempGL7SublineTypes.Subline != "Product Withdrawal" && ED.tempGL7SublineTypes.Subline != "Electronic Data Liability") {
      if (((ED.tempGL7SublineTypes.TRIPTerminatesBeforeExpirationDate == "No" || ED.tempGL7SublineTypes.TRIAExtended == "Yes") || (ED.tempGL7SublineTypes.TRIPTerminatesBeforeExpirationDate == "Yes" && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.TRIAExpirationDate) < _cf.isoDateWithoutTime(line.EffectiveDate))) && (_cf.count(ED.tempGL7SublineTypes.GL7CondExclOfTerrDispositionOfAct2002) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7CondExclOfTerrNuclearBiologicalChemicalDisposit) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct) > 0)) {
        Error_Message = "[{0}] Terrorism Forms 'Conditional Exclusion Of Terrorism (Relating To Disposition Of Federal Terrorism Risk Insurance Act)', 'Conditional Exclusion Of Terrorism Involving Nuclear, Biological Or Chemical Terrorism (Relating To Disposition Of Federal TRIA)' and 'Conditional Limitation Of Coverage For Terrorism On An Annual Aggregate Basis (Relating To Disposition Of Federal TRIA)' cannot be attached to a policy when Terrorism Risk Insurance Program (TRIP) is in effect throughout the policy term or when Terrorism Risk Insurance Program (TRIP) is not in effect throughout the policy term or when TRIA has been extended"
      }
    }
  }

}