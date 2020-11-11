package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO {

  public construct(_gL7AddlInsdSponsorsLiquorLiab : GL7AddlInsdSponsorsLiquorLiab, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdSponsorsLiquorLiab, parent )
    _addlInsdSponsorsLiquorLiabilityDetail = _gL7AddlInsdSponsorsLiquorLiab.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailGroupingDTO(_gL7AddlInsdSponsorsLiquorLiab.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdSponsorsLiquorLiabilityDetail() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailGroupingDTO {
   return _addlInsdSponsorsLiquorLiabilityDetail as GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}