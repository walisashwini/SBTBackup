package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProfessionalLiabExclComputerSoftwareDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProfessionalLiabExclComputerSoftwareDTO {

  public construct(_gL7ProfessionalLiabExclCompSoftware : GL7ProfessionalLiabExclCompSoftware, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProfessionalLiabExclCompSoftware, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProfessionalLiabExclComputerSoftwareDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}