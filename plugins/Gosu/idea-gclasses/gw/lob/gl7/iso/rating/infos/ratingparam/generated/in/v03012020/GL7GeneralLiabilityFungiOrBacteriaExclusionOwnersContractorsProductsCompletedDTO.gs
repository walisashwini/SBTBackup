package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityFungiOrBacteriaExclusionOwnersContractorsProductsCompletedDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityFungiOrBacteriaExclusionOwnersContractorsProductsCompletedDTO {

  public construct(_gL7FungiOrBacteriaExclOwnersContractorsProdsComple : GL7FungiOrBacteriaExclOwnersContractorsProdsComple, parent : GL7GeneralLiabilityDTO) {
    super( _gL7FungiOrBacteriaExclOwnersContractorsProdsComple, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityFungiOrBacteriaExclusionOwnersContractorsProductsCompletedDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}