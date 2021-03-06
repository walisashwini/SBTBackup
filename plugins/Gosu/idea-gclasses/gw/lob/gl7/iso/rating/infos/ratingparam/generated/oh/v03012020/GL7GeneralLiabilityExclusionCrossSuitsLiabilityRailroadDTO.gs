package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCrossSuitsLiabilityRailroadDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCrossSuitsLiabilityRailroadDTO {

  public construct(_gL7ExclCrossSuitsLiabRailroad : GL7ExclCrossSuitsLiabRailroad, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclCrossSuitsLiabRailroad, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCrossSuitsLiabilityRailroadDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}