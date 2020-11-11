package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionUnmannedAircraftOwnersAndContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionUnmannedAircraftOwnersAndContractorsDTO {

  public construct(_gL7ExclUnmannedAircraftOwnersAndContractors : GL7ExclUnmannedAircraftOwnersAndContractors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclUnmannedAircraftOwnersAndContractors, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionUnmannedAircraftOwnersAndContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}