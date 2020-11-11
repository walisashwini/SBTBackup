package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO {

  public construct(_gL7UnmannedAircraftTerr : GL7UnmannedAircraftTerr, parent : GL7GeneralLiabilityUnmannedAircraftDTO) {
    super( _gL7UnmannedAircraftTerr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftTerrorismCoverageDTO {
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
  override property get ParentLineModelObject() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return _parent as GL7GeneralLiabilityUnmannedAircraftDTO
  }
  

  
}