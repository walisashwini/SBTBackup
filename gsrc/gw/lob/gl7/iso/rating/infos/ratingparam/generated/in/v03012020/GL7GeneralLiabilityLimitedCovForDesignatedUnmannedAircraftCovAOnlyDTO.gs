package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovAOnlyDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovAOnlyDTO {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1 : GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovAOnlyDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}