package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {

  public construct(_gL7AddlInsdCoOwnerInsdPrem : GL7AddlInsdCoOwnerInsdPrem, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdCoOwnerInsdPrem, parent )
    _addlInsdCoOwnerInsdPremDetail = _gL7AddlInsdCoOwnerInsdPrem.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailGroupingDTO(_gL7AddlInsdCoOwnerInsdPrem.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdCoOwnerInsdPremDetail() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailGroupingDTO {
   return _addlInsdCoOwnerInsdPremDetail as GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}