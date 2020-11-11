package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclProfessionalServicesBloodBanksDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclProfessionalServicesBloodBanksDTO {

  public construct(_gL7ExclProfessionalServicesBloodBanks : GL7ExclProfessionalServicesBloodBanks, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProfessionalServicesBloodBanks, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclProfessionalServicesBloodBanksDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}