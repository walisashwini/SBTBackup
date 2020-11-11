package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO {

  public construct(_gL7TerrAllOtherSubline : GL7TerrAllOtherSubline, parent : GL7GeneralLiabilityTerrorismDTO) {
    super( _gL7TerrAllOtherSubline, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTerrorismAllOtherSublineCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject2 = ParentLineModelObject.ParentLineModelObject
   var tempParentLineModelObject = tempParentLineModelObject2.ParentLineModelObject.ParentLineModelObject
   if ((tempParentLineModelObject2.Subline == "Liquor" || tempParentLineModelObject2.Subline == "Owners and Contractors" || tempParentLineModelObject2.Subline == "Pollution" || tempParentLineModelObject2.Subline == "Railroad" || tempParentLineModelObject2.Subline == "Underground Storage Tank") && ((tempParentLineModelObject.TerrorismCoverage != null && tempParentLineModelObject.TerrorismCoverage != "") && tempParentLineModelObject.TerrorismCoverage == "Yes" || _cf.exists(tempParentLineModelObject.ExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActs) || _cf.exists(tempParentLineModelObject.ConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002) || _cf.exists(tempParentLineModelObject.ExclusionOfTerrorismNuclearBiologicalChemicalTerrorism))) {
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