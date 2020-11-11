package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCannabisExclusionWithHempExceptionPollutionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCannabisExclusionWithHempExceptionPollutionDTO {

  public construct(_gL7CannabisExclWithHempExceptionPollution : GL7CannabisExclWithHempExceptionPollution, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CannabisExclWithHempExceptionPollution, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCannabisExclusionWithHempExceptionPollutionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}