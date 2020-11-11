package gw.lob.gl7.validations.generated.oh.v03012020

uses gw.lob.common.util.*
class GL7_ER_5b8c extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    TerrorismFormsCG2190_CG2191andCG2192cannotbeattachedtoapolicywhenTerrorismRiskInsuranceProgramTRIPisineffectorwhenTRIAhasbeenextended()
  
    return Error_Message
  }

  private function TerrorismFormsCG2190_CG2191andCG2192cannotbeattachedtoapolicywhenTerrorismRiskInsuranceProgramTRIPisineffectorwhenTRIAhasbeenextended() {
    if (ED.tempGL7SublineTypes.Subline != "Product Withdrawal" && ED.tempGL7SublineTypes.Subline != "Electronic Data Liability") {
      if ((ED.tempGL7SublineTypes.TRIPTerminatesBeforeExpirationDate == "Yes" && _cf.isoDateWithoutTime(ED.tempGL7SublineTypes.TRIAExpirationDate) > _cf.isoDateWithoutTime(line.EffectiveDate) || ED.tempGL7SublineTypes.TRIAExtended == "Yes" || ED.tempGL7SublineTypes.TRIPTerminatesBeforeExpirationDate == "No") && (_cf.count(ED.tempGL7SublineTypes.GL7ExclOfTerr) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ExclOfTerrNuclearBiologicalChemicalTerr) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7LimitationOfCovForTerrSubLimitAnnualAggBasis) > 0)) {
        Error_Message = "[{0}] Terrorism Forms 'Exclusion Of Terrorism', 'Exclusion Of Terrorism Involving Nuclear, Biological Or Chemical Terrorism' and 'Limitation Of Coverage For Terrorism On An Annual Aggregate Basis' cannot be attached to a policy when Terrorism Risk Insurance Program (TRIP) is in effect or when TRIA has been extended"
      }
    }
  }

}