package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCannabisExclusionWithHempExceptionRailroadDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCannabisExclusionWithHempExceptionRailroadDTO {

  public construct(_gL7CannabisExclWithHempExceptionRailroad : GL7CannabisExclWithHempExceptionRailroad, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CannabisExclWithHempExceptionRailroad, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCannabisExclusionWithHempExceptionRailroadDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}