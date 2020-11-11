package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotInclddDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotInclddDTO {

  public construct(_gL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1 : GL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SeedMerchantsCovForErroneousDeliveryMixtureAnd1, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySeedMerchantsCovForErroneousDeliveryMixtureAndRsltgFailrOfSeedGerminNotInclddDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}