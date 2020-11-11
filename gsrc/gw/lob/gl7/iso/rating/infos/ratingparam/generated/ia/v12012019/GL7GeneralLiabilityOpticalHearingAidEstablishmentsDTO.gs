package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityOpticalHearingAidEstablishmentsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityOpticalHearingAidEstablishmentsDTO {

  public construct(_gL7OpticalHearingAidEstablishments : GL7OpticalHearingAidEstablishments, parent : GL7GeneralLiabilityDTO) {
    super( _gL7OpticalHearingAidEstablishments, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityOpticalHearingAidEstablishmentsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}