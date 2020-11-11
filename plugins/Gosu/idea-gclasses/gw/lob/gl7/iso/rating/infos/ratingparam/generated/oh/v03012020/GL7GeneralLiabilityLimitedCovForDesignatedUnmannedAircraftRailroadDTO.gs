package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftRailroadDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftRailroadDTO {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftRailroad : GL7LmtdCovForDesignatedUnmannedAircraftRailroad, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdCovForDesignatedUnmannedAircraftRailroad, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftRailroadDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}