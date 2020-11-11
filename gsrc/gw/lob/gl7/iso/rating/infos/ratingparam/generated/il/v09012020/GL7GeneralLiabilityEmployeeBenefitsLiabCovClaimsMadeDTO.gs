package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEmployeeBenefitsLiabCovClaimsMadeDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEmployeeBenefitsLiabCovClaimsMadeDTO {

  public construct(_gL7EmplBenefitsLiabCovClaimsMade : GL7EmplBenefitsLiabCovClaimsMade, parent : GL7GeneralLiabilityDTO) {
    super( _gL7EmplBenefitsLiabCovClaimsMade, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEmployeeBenefitsLiabCovClaimsMadeDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}