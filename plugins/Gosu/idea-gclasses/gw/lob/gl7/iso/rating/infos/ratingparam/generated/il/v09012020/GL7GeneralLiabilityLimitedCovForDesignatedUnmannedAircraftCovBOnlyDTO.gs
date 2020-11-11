package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovBOnlyDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovBOnlyDTO {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1 : GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftCovBOnlyDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}