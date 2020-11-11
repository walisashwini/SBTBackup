package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftOwnersContractorsDTO {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftOwnersContr : GL7LmtdCovForDesignatedUnmannedAircraftOwnersContr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdCovForDesignatedUnmannedAircraftOwnersContr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}