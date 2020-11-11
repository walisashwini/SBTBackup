package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclUndergroundStorageTankIncidentsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclUndergroundStorageTankIncidentsDTO {

  public construct(_gL7ExclUndergroundStorageTankIncidents : GL7ExclUndergroundStorageTankIncidents, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclUndergroundStorageTankIncidents, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclUndergroundStorageTankIncidentsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}