package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCrossSuitsLiabilityUSTDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCrossSuitsLiabilityUSTDTO {

  public construct(_gL7ExclCrossSuitsLiabUST : GL7ExclCrossSuitsLiabUST, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclCrossSuitsLiabUST, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCrossSuitsLiabilityUSTDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}