package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionUnmannedAircraftRailroadDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionUnmannedAircraftRailroadDTO {

  public construct(_gL7ExclUnmannedAircraftRailroad : GL7ExclUnmannedAircraftRailroad, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclUnmannedAircraftRailroad, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionUnmannedAircraftRailroadDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}