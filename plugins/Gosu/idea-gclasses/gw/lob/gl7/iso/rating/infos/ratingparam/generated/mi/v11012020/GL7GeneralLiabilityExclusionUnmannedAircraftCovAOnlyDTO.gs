package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionUnmannedAircraftCovAOnlyDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionUnmannedAircraftCovAOnlyDTO {

  public construct(_gL7ExclUnmannedAircraftCovAOnly : GL7ExclUnmannedAircraftCovAOnly, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclUnmannedAircraftCovAOnly, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionUnmannedAircraftCovAOnlyDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}