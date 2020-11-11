package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdControllingIntDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdControllingIntDTO {

  public construct(_gL7AddlInsdControllingInt : GL7AddlInsdControllingInt, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdControllingInt, parent )
    _addlInsdControllingIntDetail = _gL7AddlInsdControllingInt.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdControllingIntDetailGroupingDTO(_gL7AddlInsdControllingInt.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdControllingIntDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdControllingIntDetail() : GL7GeneralLiabilityAddlInsdControllingIntDetailGroupingDTO {
   return _addlInsdControllingIntDetail as GL7GeneralLiabilityAddlInsdControllingIntDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}