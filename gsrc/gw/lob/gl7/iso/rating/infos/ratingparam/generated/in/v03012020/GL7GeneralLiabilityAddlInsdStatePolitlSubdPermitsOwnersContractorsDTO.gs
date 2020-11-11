package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO {

  public construct(_gL7AddlInsdStatePolitlSubdPermitsOwnersContractors : GL7AddlInsdStatePolitlSubdPermitsOwnersContractors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdStatePolitlSubdPermitsOwnersContractors, parent )
    _addlInsdStatePolitlSubdPermitsOwnersContractorsDetail = _gL7AddlInsdStatePolitlSubdPermitsOwnersContractors.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailGroupingDTO(_gL7AddlInsdStatePolitlSubdPermitsOwnersContractors.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdStatePolitlSubdPermitsOwnersContractorsDetail() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailGroupingDTO {
   return _addlInsdStatePolitlSubdPermitsOwnersContractorsDetail as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}