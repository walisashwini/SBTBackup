package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCannabisExclusionWithHempandLessorsRiskExceptionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCannabisExclusionWithHempandLessorsRiskExceptionsDTO {

  public construct(_gL7CannabisExclWithHempandLessorsRiskExceptions : GL7CannabisExclWithHempandLessorsRiskExceptions, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CannabisExclWithHempandLessorsRiskExceptions, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCannabisExclusionWithHempandLessorsRiskExceptionsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}