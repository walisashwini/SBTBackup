package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDisclosureOfPremiumThrough123105CertifiedActsTerrorismPursuantTerrorismAct2002DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDisclosureOfPremiumThrough123105CertifiedActsTerrorismPursuantTerrorismAct2002DTO {

  public construct(_gL7DisclosureOfPremiumThrough123105CertifiedActsTe : GL7DisclosureOfPremiumThrough123105CertifiedActsTe, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DisclosureOfPremiumThrough123105CertifiedActsTe, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDisclosureOfPremiumThrough123105CertifiedActsTerrorismPursuantTerrorismAct2002DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}