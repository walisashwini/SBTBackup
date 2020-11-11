package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProflLiabExclHealthExerciseClubCommerciallyOperatedHealthExerciseFacilitiesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProflLiabExclHealthExerciseClubCommerciallyOperatedHealthExerciseFacilitiesDTO {

  public construct(_gL7ProflLiabExclHealthExerciseClubCommerciallyOper : GL7ProflLiabExclHealthExerciseClubCommerciallyOper, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProflLiabExclHealthExerciseClubCommerciallyOper, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProflLiabExclHealthExerciseClubCommerciallyOperatedHealthExerciseFacilitiesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}