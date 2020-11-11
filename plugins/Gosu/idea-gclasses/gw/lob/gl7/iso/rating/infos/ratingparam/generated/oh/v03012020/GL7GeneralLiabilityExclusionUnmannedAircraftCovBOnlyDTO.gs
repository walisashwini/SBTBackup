package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionUnmannedAircraftCovBOnlyDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionUnmannedAircraftCovBOnlyDTO {

  public construct(_gL7ExclUnmannedAircraftCovBOnly : GL7ExclUnmannedAircraftCovBOnly, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclUnmannedAircraftCovBOnly, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionUnmannedAircraftCovBOnlyDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}