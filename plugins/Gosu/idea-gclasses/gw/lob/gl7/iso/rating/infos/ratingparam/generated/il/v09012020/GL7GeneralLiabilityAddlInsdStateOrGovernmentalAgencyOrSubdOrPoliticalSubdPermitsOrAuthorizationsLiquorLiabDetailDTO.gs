package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO {
   return _parent as GL7GeneralLiabilityAddlInsdStateOrGovernmentalAgencyOrSubdOrPoliticalSubdPermitsOrAuthorizationsLiquorLiabDTO
  }
  

  
}