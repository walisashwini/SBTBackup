package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTerrorismEndorsementCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTerrorismEndorsementCoverageDTO {

  public construct(_gL7TerrEndorsement : GL7TerrEndorsement, parent : GL7GeneralLiabilityDTO) {
    super( _gL7TerrEndorsement, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismEndorsementCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   if ((ParentLineModelObject.Subline == "Premises/Operations" || ParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations") && (ParentLineModelObject.TerrorismCoverage == "Yes" || _cf.exists(ParentLineModelObject.ExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActs) || _cf.exists(ParentLineModelObject.ConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002) || _cf.exists(ParentLineModelObject.ExclusionOfTerrorismNuclearBiologicalChemicalTerrorism) || _cf.exists(ParentLineModelObject.CertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismPremOps) || _cf.exists(ParentLineModelObject.ConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002) || _cf.exists(ParentLineModelObject.LimitationOfCoverageForTerrorismSubLimitAnnualAggregateBasis))) {
     coverageOnPolicyIndicator = 1
   } else {
     if ((ParentLineModelObject.Subline == "Products/Completed Operations" || ParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations") && (ParentLineModelObject.TerrorismCoverage == "Yes" || _cf.exists(ParentLineModelObject.ExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActs) || _cf.exists(ParentLineModelObject.ConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002) || _cf.exists(ParentLineModelObject.ExclusionOfTerrorismNuclearBiologicalChemicalTerrorism) || _cf.exists(ParentLineModelObject.CertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismPremOps) || _cf.exists(ParentLineModelObject.CertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismProdsCompldOps) || _cf.exists(ParentLineModelObject.ConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002) || _cf.exists(ParentLineModelObject.LimitationOfCoverageForTerrorismSubLimitAnnualAggregateBasis))) {
       coverageOnPolicyIndicator = 1
     } else {
       if ((ParentLineModelObject.Subline == "Liquor" || ParentLineModelObject.Subline == "Owners and Contractors" || ParentLineModelObject.Subline == "Pollution" || ParentLineModelObject.Subline == "Railroad" || ParentLineModelObject.Subline == "Underground Storage Tank") && (ParentLineModelObject.TerrorismCoverage == "Yes" || _cf.exists(ParentLineModelObject.ExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActs) || _cf.exists(ParentLineModelObject.ConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002) || _cf.exists(ParentLineModelObject.ExclusionOfTerrorismNuclearBiologicalChemicalTerrorism))) {
         coverageOnPolicyIndicator = 1
       } else {
         coverageOnPolicyIndicator = 0
       }
     }
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}