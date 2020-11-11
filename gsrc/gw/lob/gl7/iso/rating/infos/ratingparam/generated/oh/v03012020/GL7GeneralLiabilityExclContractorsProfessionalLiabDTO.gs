package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclContractorsProfessionalLiabDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclContractorsProfessionalLiabDTO {

  public construct(_gL7ExclContractorsProfessionalLiab : GL7ExclContractorsProfessionalLiab, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclContractorsProfessionalLiab, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclContractorsProfessionalLiabDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}