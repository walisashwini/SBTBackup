package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionEarthMovementCompletedOperationsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionEarthMovementCompletedOperationsDTO {

  public construct(_gL7ExclEarthMovementCompletedOps : GL7ExclEarthMovementCompletedOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclEarthMovementCompletedOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionEarthMovementCompletedOperationsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}