package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclProfessionalVeterinarianServicesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclProfessionalVeterinarianServicesDTO {

  public construct(_gL7ExclProfessionalVeterinarianServices : GL7ExclProfessionalVeterinarianServices, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProfessionalVeterinarianServices, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclProfessionalVeterinarianServicesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}