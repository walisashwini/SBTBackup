package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCrossSuitsLiabilityLiquorDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCrossSuitsLiabilityLiquorDTO {

  public construct(_gL7ExclCrossSuitsLiabLiquor : GL7ExclCrossSuitsLiabLiquor, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclCrossSuitsLiabLiquor, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCrossSuitsLiabilityLiquorDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}