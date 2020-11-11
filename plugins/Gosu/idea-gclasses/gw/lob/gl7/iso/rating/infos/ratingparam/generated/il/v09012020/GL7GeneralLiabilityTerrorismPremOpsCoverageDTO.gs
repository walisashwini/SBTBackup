package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTerrorismPremOpsCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTerrorismPremOpsCoverageDTO {

  public construct(_gL7TerrPremOps : GL7TerrPremOps, parent : GL7GeneralLiabilityTerrorismDTO) {
    super( _gL7TerrPremOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismPremOpsCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject2 = ParentLineModelObject.ParentLineModelObject
   var tempParentLineModelObject = tempParentLineModelObject2.ParentLineModelObject.ParentLineModelObject
   if ((tempParentLineModelObject2.Subline == "Premises/Operations and Products/Completed Operations" || tempParentLineModelObject2.Subline == "Premises/Operations") && ((tempParentLineModelObject.TerrorismCoverage != null && tempParentLineModelObject.TerrorismCoverage != "") && tempParentLineModelObject.TerrorismCoverage == "Yes" || _cf.exists(tempParentLineModelObject.ExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActs) || _cf.exists(tempParentLineModelObject.ConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002) || _cf.exists(tempParentLineModelObject.ExclusionOfTerrorismNuclearBiologicalChemicalTerrorism) || _cf.exists(tempParentLineModelObject.CertifiedActsOfTerrorismAggregateLimitCapOnLossesFromCertifiedActsOfTerrorismPremOps) || _cf.exists(tempParentLineModelObject.ConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002) || _cf.exists(tempParentLineModelObject.LimitationOfCoverageForTerrorismSubLimitAnnualAggregateBasis))) {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityTerrorismDTO {
   return _parent as GL7GeneralLiabilityTerrorismDTO
  }
  

  
}