package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionProfessionalServicesOpticalAndHearingAidEstablishmentsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionProfessionalServicesOpticalAndHearingAidEstablishmentsDTO {

  public construct(_gL7ExclProfessionalServicesOpticalAndHearingAidEst : GL7ExclProfessionalServicesOpticalAndHearingAidEst, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProfessionalServicesOpticalAndHearingAidEst, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionProfessionalServicesOpticalAndHearingAidEstablishmentsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}