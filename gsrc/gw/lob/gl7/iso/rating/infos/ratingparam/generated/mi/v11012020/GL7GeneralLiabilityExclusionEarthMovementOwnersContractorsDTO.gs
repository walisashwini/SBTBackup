package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionEarthMovementOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionEarthMovementOwnersContractorsDTO {

  public construct(_gL7ExclEarthMovementOwnersContractors : GL7ExclEarthMovementOwnersContractors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclEarthMovementOwnersContractors, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionEarthMovementOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}