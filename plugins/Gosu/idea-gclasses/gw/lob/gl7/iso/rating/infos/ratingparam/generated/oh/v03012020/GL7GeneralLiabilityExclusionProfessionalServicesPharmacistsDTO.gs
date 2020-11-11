package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionProfessionalServicesPharmacistsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionProfessionalServicesPharmacistsDTO {

  public construct(_gL7ExclProfessionalServicesPharmacists : GL7ExclProfessionalServicesPharmacists, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProfessionalServicesPharmacists, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionProfessionalServicesPharmacistsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}