package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsOwnersContractorsDTO {

  public construct(_gL7ExclExteriorInsulationAndFinishSystemsOwnersCon : GL7ExclExteriorInsulationAndFinishSystemsOwnersCon, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclExteriorInsulationAndFinishSystemsOwnersCon, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}