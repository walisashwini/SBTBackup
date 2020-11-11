package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO {

  public construct(_gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased : GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased, parent )
    _addlInsdOwnersOrOtherIntsFromWhomLandLeasedDetail = _gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailGroupingDTO(_gL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetail() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailGroupingDTO {
   return _addlInsdOwnersOrOtherIntsFromWhomLandLeasedDetail as GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}