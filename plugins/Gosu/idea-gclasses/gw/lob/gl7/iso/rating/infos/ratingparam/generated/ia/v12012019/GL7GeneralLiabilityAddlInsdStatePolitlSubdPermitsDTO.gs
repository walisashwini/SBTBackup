package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO {

  public construct(_gL7AddlInsdStatePolitlSubdPermits : GL7AddlInsdStatePolitlSubdPermits, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdStatePolitlSubdPermits, parent )
    _addlInsdStatePolitlSubdPermitsDetail = _gL7AddlInsdStatePolitlSubdPermits.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailGroupingDTO(_gL7AddlInsdStatePolitlSubdPermits.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdStatePolitlSubdPermitsDetail() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailGroupingDTO {
   return _addlInsdStatePolitlSubdPermitsDetail as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}