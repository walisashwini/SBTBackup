package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionLiabCovExtensionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionLiabCovExtensionDTO {

  public construct(_gL7PollutionLiabCovExtension : GL7PollutionLiabCovExtension, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PollutionLiabCovExtension, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionLiabCovExtensionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}