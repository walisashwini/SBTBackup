package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminProdsCompldOpsDTO {

  public construct(_gL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3 : GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SeedMerchantsCovForErroneousDeliveryMixtureAnd3, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}