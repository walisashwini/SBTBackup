package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclErroneousDeliveryOrMixtureResultingFailrSeedGerminSeedMerchantsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclErroneousDeliveryOrMixtureResultingFailrSeedGerminSeedMerchantsDTO {

  public construct(_gL7ExclErroneousDeliveryOrMixtureResultingFailrSee : GL7ExclErroneousDeliveryOrMixtureResultingFailrSee, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclErroneousDeliveryOrMixtureResultingFailrSee, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclErroneousDeliveryOrMixtureResultingFailrSeedGerminSeedMerchantsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}