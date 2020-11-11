package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_9e44 extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
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
  
    CG2176cannotbeattachedwithoutCG2180_CG2182_orCG2184()
  
    return Error_Message
  }

  private function CG2176cannotbeattachedwithoutCG2180_CG2182_orCG2184() {
    if (ED.tempGL7SublineTypes.Subline != "Product Withdrawal" && ED.tempGL7SublineTypes.Subline != "Electronic Data Liability") {
      if (ED.tempGL7SublineTypes.TerrorismCoverage != "Yes") {
        if (ED.tempGL7SublineTypes.TerrorismCoverage == "No") {
          if (_cf.count(ED.tempGL7SublineTypes.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti) == 0 && _cf.count(ED.tempGL7SublineTypes.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1) == 0 && _cf.count(ED.tempGL7SublineTypes.GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA) == 0 && _cf.count(ED.tempGL7SublineTypes.GL7ExclOfPunitiveDamagesReltdToACertifiedActOfTerr) > 0) {
            Error_Message = "[{0}] 'Exclusion Of Punitive Damages Related To A Certified Act Of Terrorism' cannot be attached without 'Certified Acts Of Terrorism Aggregate Limit; Cap On Losses From Certified Acts Of Terrorism', 'Certified Acts Of Terrorism Aggregate Limit; Cap On Losses From Certified Acts Of Terrorism', or 'Exclusion Of Certified Nuclear, Biological, Chemical Or Radiological Acts Of Terrsm; Cap On Losses From Certified Acts Of Terrsm'"
          }
        }
      }
    }
  }

}