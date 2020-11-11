package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCannabisExclusionWithHempExceptionProductWithdrawalDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCannabisExclusionWithHempExceptionProductWithdrawalDTO {

  public construct(_gL7CannabisExclWithHempExceptionProductWithdrawal : GL7CannabisExclWithHempExceptionProductWithdrawal, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CannabisExclWithHempExceptionProductWithdrawal, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCannabisExclusionWithHempExceptionProductWithdrawalDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}