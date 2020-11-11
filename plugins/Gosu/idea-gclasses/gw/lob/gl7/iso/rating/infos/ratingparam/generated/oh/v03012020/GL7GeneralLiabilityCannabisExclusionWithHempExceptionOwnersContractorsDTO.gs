package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCannabisExclusionWithHempExceptionOwnersContractorsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCannabisExclusionWithHempExceptionOwnersContractorsDTO {

  public construct(_gL7CannabisExclWithHempExceptionOwnersContractors : GL7CannabisExclWithHempExceptionOwnersContractors, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CannabisExclWithHempExceptionOwnersContractors, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCannabisExclusionWithHempExceptionOwnersContractorsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}