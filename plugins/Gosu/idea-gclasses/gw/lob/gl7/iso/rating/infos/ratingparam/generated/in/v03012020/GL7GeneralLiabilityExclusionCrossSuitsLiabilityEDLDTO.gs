package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCrossSuitsLiabilityEDLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCrossSuitsLiabilityEDLDTO {

  public construct(_gL7ExclCrossSuitsLiabEDL : GL7ExclCrossSuitsLiabEDL, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclCrossSuitsLiabEDL, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCrossSuitsLiabilityEDLDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}