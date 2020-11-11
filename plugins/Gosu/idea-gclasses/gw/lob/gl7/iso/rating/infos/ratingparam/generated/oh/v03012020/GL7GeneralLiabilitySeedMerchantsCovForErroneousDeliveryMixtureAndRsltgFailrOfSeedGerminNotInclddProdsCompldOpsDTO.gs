package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotInclddProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotInclddProdsCompldOpsDTO {

  public construct(_gL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2 : GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SeedMerchantsCovForErroneousDeliveryMixtureAnd2, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotInclddProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}