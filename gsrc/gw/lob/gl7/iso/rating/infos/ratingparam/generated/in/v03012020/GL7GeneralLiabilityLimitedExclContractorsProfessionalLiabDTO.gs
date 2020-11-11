package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclContractorsProfessionalLiabDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclContractorsProfessionalLiabDTO {

  public construct(_gL7LmtdExclContractorsProfessionalLiab : GL7LmtdExclContractorsProfessionalLiab, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdExclContractorsProfessionalLiab, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclContractorsProfessionalLiabDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}