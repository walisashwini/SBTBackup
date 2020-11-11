package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclProductsProfessionalServicesOpticalHearingAidEstablishmentsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclProductsProfessionalServicesOpticalHearingAidEstablishmentsDTO {

  public construct(_gL7ExclProdsProfessionalServicesOpticalHearingAidE : GL7ExclProdsProfessionalServicesOpticalHearingAidE, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProdsProfessionalServicesOpticalHearingAidE, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclProductsProfessionalServicesOpticalHearingAidEstablishmentsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}