package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO {

  public construct(_gL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe : GL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe, parent )
    _addlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetail = _gL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailGroupingDTO(_gL7AddlInsdStateOrGovAgencyOrSubdOrPoliticalSubdPe.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetail() : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailGroupingDTO {
   return _addlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetail as GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}