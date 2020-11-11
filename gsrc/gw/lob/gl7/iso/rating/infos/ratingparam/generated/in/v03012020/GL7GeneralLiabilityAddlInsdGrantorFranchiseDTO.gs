package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO {

  public construct(_gL7AddlInsdGrantorFranchise : GL7AddlInsdGrantorFranchise, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdGrantorFranchise, parent )
    _addlInsdGrantorFranchiseDetail = _gL7AddlInsdGrantorFranchise.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailGroupingDTO(_gL7AddlInsdGrantorFranchise.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdGrantorFranchiseDetail() : GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailGroupingDTO {
   return _addlInsdGrantorFranchiseDetail as GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}