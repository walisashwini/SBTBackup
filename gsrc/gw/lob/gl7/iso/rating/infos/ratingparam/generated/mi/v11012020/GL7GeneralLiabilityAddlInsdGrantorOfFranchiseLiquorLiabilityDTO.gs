package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO {

  public construct(_gL7AddlInsdGrantorOfFranchiseLiquorLiab : GL7AddlInsdGrantorOfFranchiseLiquorLiab, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdGrantorOfFranchiseLiquorLiab, parent )
    _addlInsdGrantorOfFranchiseLiquorLiabilityDetail = _gL7AddlInsdGrantorOfFranchiseLiquorLiab.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailGroupingDTO(_gL7AddlInsdGrantorOfFranchiseLiquorLiab.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdGrantorOfFranchiseLiquorLiabilityDetail() : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailGroupingDTO {
   return _addlInsdGrantorOfFranchiseLiquorLiabilityDetail as GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}