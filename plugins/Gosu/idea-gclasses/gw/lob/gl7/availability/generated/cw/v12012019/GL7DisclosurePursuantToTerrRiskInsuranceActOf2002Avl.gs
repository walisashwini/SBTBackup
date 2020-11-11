package gw.lob.gl7.availability.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7DisclosurePursuantToTerrRiskInsuranceActOf2002Avl extends gw.lob.common.dependency.GeneratedClauseAvailability<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function isAvailable(_coverable : GL7SublineType) : boolean {
    coverable = _coverable
    line = coverable.PolicyLine as GL7Line
    extractedData = new ExtractedData()
  
    return GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002()
  }

  private function GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002() : boolean {
    if ((ED.tempGL7SublineTypes.Subline != "Product Withdrawal" && ED.tempGL7SublineTypes.Subline != "Electronic Data Liability") && (_cf.count(ED.tempGL7SublineTypes.GL7CapOnLossesFromCertifiedActsOfTerr) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCerti) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7CertifiedActsOfTerrAggLimitCapOnLossesFromCert1) > 0 || _cf.count(ED.tempGL7SublineTypes.GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA) > 0)) {
      return true
    }
    return false
  }

}