package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVendorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVendorsDTO {

  public construct(_gL7AddlInsdVendors : GL7AddlInsdVendors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdVendors, parent )
    _addlInsdVendorsDetail = _gL7AddlInsdVendors.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdVendorsDetailGroupingDTO(_gL7AddlInsdVendors.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdVendorsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdVendorsDetail() : GL7GeneralLiabilityAddlInsdVendorsDetailGroupingDTO {
   return _addlInsdVendorsDetail as GL7GeneralLiabilityAddlInsdVendorsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}