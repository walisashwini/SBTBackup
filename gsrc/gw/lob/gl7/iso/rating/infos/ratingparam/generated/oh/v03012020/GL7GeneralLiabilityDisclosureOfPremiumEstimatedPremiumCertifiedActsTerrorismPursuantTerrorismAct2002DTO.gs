package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDisclosureOfPremiumEstimatedPremiumCertifiedActsTerrorismPursuantTerrorismAct2002DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDisclosureOfPremiumEstimatedPremiumCertifiedActsTerrorismPursuantTerrorismAct2002DTO {

  public construct(_gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct : GL7DisclosureOfPremiumEstimatedPremiumCertifiedAct, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DisclosureOfPremiumEstimatedPremiumCertifiedAct, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDisclosureOfPremiumEstimatedPremiumCertifiedActsTerrorismPursuantTerrorismAct2002DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}